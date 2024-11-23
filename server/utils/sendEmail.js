const nodemailer = require("nodemailer");

const sendEmail = async (emailOptions) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email provider here
    auth: {
      user: 'balakrishnalingala94@gmail.com', // Your email
      pass: 'jmvlqucwunifcmkq'    // Your email password
    }
  });

  try {
    await transporter.sendMail(emailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email');
  }
};

module.exports = sendEmail;
