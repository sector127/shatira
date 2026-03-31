import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, message } = data;

    if (!name || !email || !message) {
      return NextResponse.json({ message: "All fields are required!" }, { status: 400 });
    }

    // Configure the Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "SendinBlue",
      auth: {
        user: process.env.SENDINBLUE_USERNAME,
        pass: process.env.SENDINBLUE_PASSWORD,
      },
    });

    // Define email options
    const mailOptions = {
      from: email,
      to: "gio.shatira@gmail.com",
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email was sent!", ok: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ message: "Could not send message!" }, { status: 500 });
  }
}
