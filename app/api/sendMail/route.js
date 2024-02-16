import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  const data = await req.json();
  const { name, email, message } = data;

  if (!name || !email || !message) {
    NextResponse.status(500).json({ message: "All fields are required!" });
  }

  try {
    // Configure the Nodemailer transporter
    const transporter = nodemailer.createTransport({
      // Use your email service provider's SMTP settings here
      service: "SendinBlue",
      auth: {
        user: process.env.SENDINBLUE_USERNAME, // Your Gmail email address
        pass: process.env.SENDINBLUE_PASSWORD, // Your Gmail app-specific password
      },
    });

    // Define email options
    const mailOptions = {
      from: email,
      to: "gio.shatira@gmail.com", // Your email address where you want to receive messages
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email was sent!", ok: true });
  } catch (error) {
    console.error("Error sending email:", error);
    NextResponse.status(500).json({ message: "Could not send message!" });
  }
}
