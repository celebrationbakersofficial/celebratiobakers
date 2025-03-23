require("dotenv").config();
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const Razorpay = require("razorpay");
const crypto = require("crypto");
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
const { MONGDB_URI } = process.env;
mongoose.connect(MONGDB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
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

// Route to create a payment order
// app.post("/create-order", async (req, res) => {
//   try {
//     const { amount, email, address, giftDetails } = req.body;

//     // Razorpay order options
//     const options = {
//       amount: amount * 100, // Amount in paise
//       currency: "INR",
//       receipt: "receipt#1",
//       notes: {
//         key1: "value3",
//         key2: "value2",
//       },
//     };

//     razorpay.orders.create(options, async (err, order) => {
//       if (err) {
//         return res.status(500).json({ message: "Error creating order", error: err });
//       }

//       // Save order details in MongoDB
//       const payment = new Payment({
//         order_id: order.id,
//         amount: amount,
//         status: "pending",
//         address: address, // Store address
//         giftDetails: giftDetails, // Store gift details
//       });
//       await payment.save();

//       res.json({
//         order_id: order.id,
//         key_id: process.env.RAZORPAY_KEY_ID,
//       });
//     });
//   } catch (error) {
//     res.status(500).json({ message: "Error creating payment", error: error.message });
//   }
// });

// Route to create a payment order
// Route to create a payment order
const getFirstValidAddress = (address) => {
  const addressTypes = ["Home", "Office", "Hotel", "Other"];
  
  // Loop through each address type and return the first valid one
  for (const type of addressTypes) {
    if (address[type]) {
      return address[type]; // Return the first valid address as an object
    }
  }
  
  return {}; // If no valid address is found, return an empty object
};

// app.post("/create-order", async (req, res) => {
//   try {
//     const { amount, email, address, giftDetails } = req.body;
//     console.log("Received address:", address); // Log the address to verify

//     // Get the first valid address
//     const selectedAddress = getFirstValidAddress(address);
//     // Razorpay order options
//     const options = {
//       amount: amount * 100, // Amount in paise
//       currency: "INR",
//       receipt: "receipt#1",
//       notes: {
//         key1: "value3",
//         key2: "value2",
//       },
//     };

//     razorpay.orders.create(options, async (err, order) => {
//       if (err) {
//         return res.status(500).json({ message: "Error creating order", error: err });
//       }

//       // Save order details in MongoDB
//       const payment = new Payment({
//         order_id: order.id,
//         amount: amount,
//         status: "pending",
//         address: selectedAddress, // Store the selected address
//         giftDetails: giftDetails, // Store gift details
//       });
//       await payment.save();

//       // Prepare email content to send to your email address
//       const emailContent = `
//         <h3>New Order Received</h3>
//         <p><strong>Order ID:</strong> ${order.id}</p>
//         <p><strong>Amount:</strong> ₹${amount}</p>
//         <p><strong>Status:</strong> Pending</p>
//         <h4>Shipping Address</h4>
//         <p><strong>House:</strong> ${selectedAddress.house || 'Not Provided'}</p>
//         <p><strong>Landmark:</strong> ${selectedAddress.landmark || 'Not Provided'}</p>
//         <p><strong>Phone:</strong> ${selectedAddress.phone || 'Not Provided'}</p>
//         <p><strong>Email:</strong> ${selectedAddress.email || 'Not Provided'}</p>
//         <p><strong>Locality:</strong> ${selectedAddress.locality || 'Not Provided'}</p>
//         <h4>Gift Details</h4>
//         <p><strong>Recipient Name:</strong> ${giftDetails.recipientName}</p>
//         <p><strong>Sender Name:</strong> ${giftDetails.senderName}</p>
//         <p><strong>Recipient Mobile:</strong> ${giftDetails.recipientMobile}</p>
//         <p><strong>Message:</strong> ${giftDetails.message}</p>
//       `;

//       // Set up email options
//       const mailOptions = {
//         from: 'developer.govinda00@gmail.com',
//         to: 'aeroedgetechnologies@gmail.com',
//         subject: 'New Order Notification',
//         html: emailContent,
//       };

//       // Send the email to you with the order details
//       transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//           // Log the error for debugging
//           console.error('Error sending email:', error);
//           return res.status(500).json({ message: 'Error sending email', error: error });
//         }
//         console.log('Order details email sent:', info.response);
//         // Respond with a success message after the email is sent
//         res.status(200).json({
//           message: 'Order created successfully and email sent',
//           order_id: order.id,
//           key_id: process.env.RAZORPAY_KEY_ID,
//         });
//       });
//     });
//   } catch (error) {
//     res.status(500).json({ message: "Error creating payment", error: error.message });
//   }
// });

// Route to verify payment signature after successful payment

app.post("/create-order", async (req, res) => {
  try {
    const { amount, email, address, giftDetails } = req.body;
    console.log("Received address:", address); // Log the address to verify

    // Get the first valid address
    const selectedAddress = getFirstValidAddress(address);
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
        order_id: order.id,
        amount: amount,
        status: "pending",
        address: selectedAddress, // Store the selected address
        giftDetails: giftDetails, // Store gift details
      });
      await payment.save();

      // Prepare email content to send to your email address
      const adminEmailContent = `
        <h3>New Order Received</h3>
        <p><strong>Order ID:</strong> ${order.id}</p>
        <p><strong>Amount:</strong> ₹${amount}</p>
        <p><strong>Status:</strong> Pending</p>
        <h4>Shipping Address</h4>
        <p><strong>House:</strong> ${selectedAddress.house || 'Not Provided'}</p>
        <p><strong>Landmark:</strong> ${selectedAddress.landmark || 'Not Provided'}</p>
        <p><strong>Phone:</strong> ${selectedAddress.phone || 'Not Provided'}</p>
        <p><strong>Email:</strong> ${selectedAddress.email || 'Not Provided'}</p>
        <p><strong>Locality:</strong> ${selectedAddress.locality || 'Not Provided'}</p>
        <h4>Gift Details</h4>
        <p><strong>Recipient Name:</strong> ${giftDetails.recipientName}</p>
        <p><strong>Sender Name:</strong> ${giftDetails.senderName}</p>
        <p><strong>Recipient Mobile:</strong> ${giftDetails.recipientMobile}</p>
        <p><strong>Message:</strong> ${giftDetails.message}</p>
      `;

      // Set up email options for admin
      const adminMailOptions = {
        from: 'developer.govinda00@gmail.com',
        to: 'aeroedgetechnologies@gmail.com',
        subject: 'New Order Notification',
        html: adminEmailContent,
      };

      // Send the email to admin with the order details
      transporter.sendMail(adminMailOptions, (error, info) => {
        if (error) {
          // Log the error for debugging
          console.error('Error sending admin email:', error);
          return res.status(500).json({ message: 'Error sending email to admin', error: error });
        }
        console.log('Admin email sent:', info.response);
      });

      // Prepare email content to send to the customer
      const customerEmailContent = `
        <h3>Order Confirmation</h3>
        <p><strong>Order ID:</strong> ${order.id}</p>
        <p><strong>Amount:</strong> ₹${amount}</p>
        <p><strong>Status:</strong> Pending</p>
        <h4>Shipping Address</h4>
        <p><strong>House:</strong> ${selectedAddress.house || 'Not Provided'}</p>
        <p><strong>Landmark:</strong> ${selectedAddress.landmark || 'Not Provided'}</p>
        <p><strong>Phone:</strong> ${selectedAddress.phone || 'Not Provided'}</p>
        <p><strong>Email:</strong> ${selectedAddress.email || 'Not Provided'}</p>
        <p><strong>Locality:</strong> ${selectedAddress.locality || 'Not Provided'}</p>
        <h4>Gift Details</h4>
        <p><strong>Recipient Name:</strong> ${giftDetails.recipientName}</p>
        <p><strong>Sender Name:</strong> ${giftDetails.senderName}</p>
        <p><strong>Recipient Mobile:</strong> ${giftDetails.recipientMobile}</p>
        <p><strong>Message:</strong> ${giftDetails.message}</p>
        <p><strong>Order Tracking:</strong> Your order is now in processing and will be shipped soon. You will receive tracking updates once it is dispatched.</p>
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
          // Log the error for debugging
          console.error('Error sending customer email:', error);
          return res.status(500).json({ message: 'Error sending email to customer', error: error });
        }
        console.log('Customer email sent:', info.response);
      });

      // Respond with a success message after both emails are sent
      res.status(200).json({
        message: 'Order created successfully, and emails sent to both customer and admin.',
        order_id: order.id,
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
    user: 'developer.govinda00@gmail.com',  // Your email (sender's address)
    pass: 'coku kgqp bzze reyi',     // The app password you generated
  },
});

// POST route to handle form submission
app.post('/send-email', (req, res) => {
  const { name, email, message, subject } = req.body;

  const mailOptions = {
    from: email,  // From the user's email
    to: 'aeroedgetechnologies@gmail.com',  // Your email address
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