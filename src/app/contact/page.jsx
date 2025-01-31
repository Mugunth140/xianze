'use client'
import { useState } from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";
import "@/sass/pages/contact.scss";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/sendMail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <section className="contactSection">
      <div className="contactContainer">
        <h2>Contact Us</h2>
        <p>Have questions? Reach out to us!</p>

        <Link href="https://chat.whatsapp.com/YOUR_COMMUNITY_LINK" target="_blank" className="whatsappLink">
          <FaWhatsapp /> WhatsApp Community
        </Link>

        {/* Student Coordinators Dropdown */}
        <div className="dropdown">
          <button className="dropdownButton" onClick={() => setIsOpen(!isOpen)}>
            Student Coordinators 
          </button>
          {isOpen && (
            <ul className="dropdownMenu">
              <li>John Doe - +91 98765 43210</li>
              <li>Jane Smith - +91 87654 32109</li>
              <li>Mike Johnson - +91 76543 21098</li>
            </ul>
          )}
        </div>

        {/* Contact Form */}
        <form className="contactForm" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
          <textarea name="message" placeholder="Your Message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
          <button type="submit" className="submitButton">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
