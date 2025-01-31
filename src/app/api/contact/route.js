import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();
    const appPassword = process.env.NEXT_PUBLIC_GMAIL_APP_PASSWORD;
    const appEmail = process.env.NEXT_PUBLIC_GMAIL_EMAIL;

    let transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: appEmail,
        pass: appPassword, 
      },
    });

    let mailOptions = {
      from: `"Xianze Contact Form" <${email}>`,
      to: appEmail, 
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    return Response.json({ message: "Email Sent Successfully" }, { status: 200 });
  } catch (error) {
    return Response.json({ error: "Failed to send email" }, { status: 500 });
  }
}
