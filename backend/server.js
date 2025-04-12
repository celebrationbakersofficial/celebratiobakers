require("dotenv").config();
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const Razorpay = require("razorpay");
const crypto = require("crypto");
const cors = require('cors');
const path = require('path');
const multer = require('multer');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB connection
const { MONGDB_URI } = process.env;
mongoose.connect(MONGDB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err));

// Razorpay instance
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});
const addressSchema = new mongoose.Schema({
  house: { type: String },
  landmark: { type: String },
  phone: { type: String },
  email: { type: String },
  locality: { type: String }
});
const Payment = mongoose.model("Payment", new mongoose.Schema({
  payment_id: String,
  order_id: String,
  amount: Number,
  status: String,
  created_at: { type: Date, default: Date.now },
  address: {
    Home: addressSchema,
    Office: addressSchema,
    Hotel: addressSchema,
    Other: addressSchema,
  },
  giftDetails: {
    recipientName: String,
    senderName: String,
    recipientMobile: String,
    message: String,
  },
}));

// Set up multer to store images in memory as buffers
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
// Define the Logo schema with image as Buffer and contentType
const logoSchema = new mongoose.Schema({
  image: { type: Buffer, required: true },  // Store image as a Buffer
  contentType: { type: String, required: true },  // Content type (e.g., image/png)
}, { timestamps: true });

const Logo = mongoose.model("Logo", logoSchema);
// Function to save the logo to MongoDB (this will run automatically on server start)
const saveLogoToDB = async () => {
  try {
    // Define the path to the image
    const imagePath = path.join(__dirname, 'public', 'images', 'logos.png');
    
    // Check if the file exists
    if (!fs.existsSync(imagePath)) {
      console.log('Image file not found!');
      return;
    }

    // Read the image as a Buffer
    const imageBuffer = fs.readFileSync(imagePath);
    const contentType = 'image/png';  // Set the appropriate content type (e.g., image/png)

    // Check if the logo already exists in the database
    const existingLogo = await Logo.findOne();
    if (existingLogo) {
      console.log('Logo already exists in the database!');
      return;
    }

    // Save the logo to MongoDB
    const newLogo = new Logo({
      image: imageBuffer,  // Store the image as a Buffer
      contentType: contentType,  // Store the content type
    });

    await newLogo.save();
    console.log('Logo saved to MongoDB successfully!');
  } catch (err) {
    console.error('Error saving logo:', err);
  }
};


// // Function to insert logo into the database (without a route)
// async function addLogoToDatabase() {
//   try {
//     const logoPath = path.join(__dirname, 'public', 'images', 'logos.png'); // Path to the logo file
//     const logoBuffer = fs.readFileSync(logoPath); // Read image file as a buffer

//     const logo = new Logo({
//       image: logoBuffer,  // Store image as a Buffer
//       contentType: 'image/png',  // You can modify this based on your image type
//     });

//     await logo.save();
//     console.log("Logo saved successfully!");
//   } catch (err) {
//     console.error("Error saving logo", err);
//   }
// }

// // Call the function once when the app starts to insert the logo
// addLogoToDatabase();  // Make sure this is called when the app starts

app.post("/create-order", async (req, res) => {
  try {
    const { amount, email, address, giftDetails } = req.body;
    console.log("Received address:", address); // Log the address to verify
    const customOrderId = '#' + Math.floor(1000000 + Math.random() * 9000000);

    // Razorpay order options
    const options = {
      amount: amount * 100, // Amount in paise
      currency: "INR",
      receipt: "receipt#1",
      notes: {
        key1: "value3",
        key2: "value2",
      },
    };

    razorpay.orders.create(options, async (err, order) => {
      if (err) {
        return res.status(500).json({ message: "Error creating order", error: err });
      }

      // Save order details in MongoDB
      const payment = new Payment({
        transaction_id: order.id, // Save Razorpay's order ID here
        order_id: customOrderId,  // Save our custom order ID
        // order_id: order.id,
        amount: amount,
        status: "pending",
        address: address, // Store the entire address object
        giftDetails: giftDetails, // Store gift details
      });
      await payment.save();
      const logo = await Logo.findOne();  // Assuming there's only one logo in the collection

      // Check if logo exists
      if (!logo) {
        return res.status(404).send("Logo not found.");
      }
  
      // Convert the logo buffer to base64
      const logoBase64 = logo.image.toString('base64');
      const logoContentType = logo.contentType;
  
      const generateAddressSection = (addressObj, addressType) => {
        const fields = [];
        
        if (addressObj.house) fields.push(`<p><strong>House:</strong> ${addressObj.house}</p>`);
        if (addressObj.landmark) fields.push(`<p><strong>Landmark:</strong> ${addressObj.landmark}</p>`);
        if (addressObj.phone) fields.push(`<p><strong>Phone:</strong> ${addressObj.phone}</p>`);
        if (addressObj.email) fields.push(`<p><strong>Email:</strong> ${addressObj.email}</p>`);
        if (addressObj.locality) fields.push(`<p><strong>Locality:</strong> ${addressObj.locality}</p>`);
        
        if (fields.length === 0) return ''; // If no field is provided, return an empty string
        
        return `
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 8px; margin-top: 10px; border: 1px solid #ddd;">
            <h4 style="color: #007bff; margin-bottom: 10px;">${addressType} Address</h4>
            ${fields.join('')}
          </div>
        `;
      };
      console.log("Base64 Logo Data:", logoBase64);  // Check if base64 data is valid
      console.log("Content Type:", logoContentType);  // Check the content type
      
      // Prepare email content for the admin with inline styles
      const adminEmailContent = `
<html>
  <body style="font-family: Arial, sans-serif; background-color: #f8f8f8; margin: 0; padding: 0;">
    <div style="max-width: 600px; margin: auto; background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
      <div style="text-align: center; padding-bottom: 20px;">
        <!-- Rounded Logo -->
        <img src="https://i.imgur.com/ll4hIXN.png" alt="Company Logo" style="width: 150px; border-radius: 50%;">
      </div>

      <h2 style="color: #333; text-align: center;">New Order Confirmed!</h2>
      <p style="font-size: 16px; color: #555; text-align: center;">A new order has been confirmed. Below are the details:</p>

      <div style="border-top: 2px solid #eee; margin-top: 20px; padding-top: 20px;">
        <p style="font-size: 16px; color: #555;"><strong>Order ID:</strong>${customOrderId}</p>
        <p style="font-size: 16px; color: #555;"><strong>Transaction ID:</strong>${order.id}</p>
        <p style="font-size: 16px; color: #555;"><strong>Amount:</strong> ₹${amount}</p>
        <p style="font-size: 16px; color: #555;"><strong>Status:</strong> Pending</p>
      </div>

      <div style="font-size: 18px; color: #333; font-weight: bold; margin-top: 20px;">Customer's Addresses</div>
      ${Object.keys(address).map((key) => {
        const addr = address[key]; // Get each address type (Home, Office, Hotel)
        return generateAddressSection(addr, key);
      }).join('')}

      <h3 style="color: #333;">Gift Details</h3>
      <p style="font-size: 16px; color: #555;"><strong>Recipient:</strong> ${giftDetails.recipientName}</p>
      <p style="font-size: 16px; color: #555;"><strong>Message:</strong> ${giftDetails.message}</p>

      <div style="margin-top: 30px; text-align: center; font-size: 14px; color: #888;">
        <p>&copy; 2025 celebrationbakers. All rights reserved.</p>
      </div>
    </div>
  </body>
</html>
      `;

      // Set up email options for admin
      const adminMailOptions = {
        from: 'celebrationbakersofficial@gmail.com',
        to: 'celebrationbakersofficial@gmail.com',
        subject: 'New Order Notification',
        html: adminEmailContent,
      };

      // Send the email to admin with the order details
      transporter.sendMail(adminMailOptions, (error, info) => {
        if (error) {
          console.error('Error sending admin email:', error);
          return res.status(500).json({ message: 'Error sending email to admin', error: error });
        }
        console.log('Admin email sent:', info.response);
      });

// Prepare email content to send to the customer with inline styles
const customerEmailContent = `
<html>
  <body style="font-family: Arial, sans-serif; background-color: #f8f8f8; margin: 0; padding: 0;">
    <div style="max-width: 600px; margin: auto; background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
      <div style="text-align: center; padding-bottom: 20px;">
        <img src="https://i.imgur.com/h9MavFP.png" alt="Company Logo" style="width: 150px; border-radius: 50%;">
      </div>

      <h2 style="color: #333; text-align: center;">Your Order is Confirmed!</h2>
      <p style="font-size: 16px; color: #555; text-align: center;">Thank you for shopping with us. Your order has been confirmed. Here are your order details:</p>

      <div style="border-top: 2px solid #eee; margin-top: 20px; padding-top: 20px;">
        <p style="font-size: 16px; color: #555;"><strong>Order ID:</strong>${customOrderId}</p>
        <p style="font-size: 16px; color: #555;"><strong>Transaction ID:</strong>${order.id}</p>
        <p style="font-size: 16px; color: #555;"><strong>Amount:</strong> ₹${amount}</p>
        <p style="font-size: 16px; color: #555;"><strong>Status:</strong> Pending</p>
      </div>

      <div style="font-size: 18px; color: #333; font-weight: bold; margin-top: 20px;">Delivery Addresses</div>
      ${Object.keys(address).map((key) => {
        const addr = address[key]; // Get each address type (Home, Office, Hotel)
        return generateAddressSection(addr, key);
      }).join('')}

      <h3 style="color: #333;">Gift Details</h3>
      <p style="font-size: 16px; color: #555;"><strong>Recipient:</strong> ${giftDetails.recipientName}</p>
      <p style="font-size: 16px; color: #555;"><strong>Message:</strong> ${giftDetails.message}</p>

      <div style="margin-top: 20px; text-align: center;">
        <a href="https://celebrationbakers.com" style="display: inline-block; padding: 12px 24px; background-color: #007bff; color: white; text-decoration: none; font-weight: bold; border-radius: 4px;">Track Your Order</a>
      </div>

      <div style="margin-top: 30px; text-align: center; font-size: 14px; color: #888;">
        <p>&copy; 2025 celebrationbakers. All rights reserved.</p>
      </div>
    </div>
  </body>
</html>
      `;


      // Set up email options for the customer
      const customerMailOptions = {
        from: 'developer.govinda00@gmail.com',
        to: email, // Customer email address from the frontend
        subject: 'Your Order Confirmation',
        html: customerEmailContent,
      };

      // Send the email to the customer with the order details
      transporter.sendMail(customerMailOptions, (error, info) => {
        if (error) {
          console.error('Error sending customer email:', error);
          return res.status(500).json({ message: 'Error sending email to customer', error: error });
        }
        console.log('Customer email sent:', info.response);
      });

      // Respond with a success message after both emails are sent
      res.status(200).json({
        message: 'Order created successfully, and emails sent to both customer and admin.',
        // order_id: order.id,
        order_id: customOrderId,
        key_id: process.env.RAZORPAY_KEY_ID,
      });
    });
  } catch (error) {
    res.status(500).json({ message: "Error creating payment", error: error.message });
  }
});





app.post("/verify-payment", async (req, res) => {
  try {
    const { payment_id, order_id, razorpay_signature } = req.body;

    // Find order in MongoDB
    const order = await Payment.findOne({ order_id });

    if (!order) {
      return res.status(400).json({ message: "Order not found" });
    }

    // Generate signature hash
    const body = order_id + "|" + payment_id;
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body)
      .digest("hex");

    if (expectedSignature === razorpay_signature) {
      // Payment is verified
      order.status = "paid";
      await order.save();
      res.json({ message: "Payment verified successfully", payment: order });
    } else {
      // Payment verification failed
      res.status(400).json({ message: "Payment verification failed" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error verifying payment", error: error.message });
  }
});

app.get("/", (req, res) => {
  res.send("Backend is up and running!");
});

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'celebrationbakersofficial@gmail.com',  // Your email (sender's address)
    pass: 'lytv fmdo mhpk bjst',     // The app password you generated
  },
});

// POST route to handle form submission
app.post('/send-email', (req, res) => {
  const { name, email, message, subject } = req.body;

  const mailOptions = {
    from: email,  // From the user's email
    to: 'celebrationbakersofficial@gmail.com',  // Your email address
    subject: subject || 'New Message from Contact Form',  // Subject
    text: `You have received a new message from ${name} (${email}):\n\n${message}`,  // Email body
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ message: 'Error sending email', error });
    }
    res.status(200).json({ message: 'Email sent successfully', info });
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});