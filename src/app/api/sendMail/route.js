import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    const appEmail = process.env.APP_EMAIL;
    const appPassword = process.env.APP_PASSWORD;

    if (!appEmail || !appPassword) {
      return NextResponse.json(
        { error: "Email configuration is missing." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: appEmail,
        pass: appPassword,
      },
    });

    const mailOptions = {
      from: `"Xianze Contact Form" <${email}>`,
      to: appEmail,
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
