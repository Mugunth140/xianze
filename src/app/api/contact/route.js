import nodemailer from "nodemailer";

export async function POST(req, res) {
  try {
    const { name, email, message } = await req.json();

    const appPassword = process.env.APP_PASSWORD;
    const appEmail = process.env.APP_EMAIL;


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

    res.status(200).json({ message: "Email Sent Successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
}
