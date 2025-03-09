const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

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
