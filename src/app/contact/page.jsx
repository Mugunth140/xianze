'use client'
import Link from "next/link";
import { useState } from "react";
import "@/sass/pages/contact.scss";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="contactSection">
      <div className="contactContainer">
        <h2>Contact Us</h2>
        <p>Have questions? Reach out to us or join our WhatsApp community for updates!</p>
        
        <Link href="https://chat.whatsapp.com/YOUR_COMMUNITY_LINK" target="_blank" className="whatsappLink">
          Join Our WhatsApp Community
        </Link>

        <form className="contactForm" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button className="submitButton" type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
