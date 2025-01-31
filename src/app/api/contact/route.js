import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // Configure Nodemailer Transporter
    let transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "xianze2025@gmail.com", // Official Event Email
        pass: "your-app-password", // Use App Password (Not regular Gmail password)
      },
    });

    let mailOptions = {
      from: `"Xianze Contact Form" <${email}>`,
      to: "xianze2025@gmail.com", 
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    return Response.json({ message: "Email Sent Successfully" }, { status: 200 });
  } catch (error) {
    return Response.json({ error: "Failed to send email" }, { status: 500 });
  }
}
