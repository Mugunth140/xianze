'use client'
import { useState } from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";
import {motion} from "motion/react";
import "@/sass/pages/contact.scss";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [statusMessage, setStatusMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true); 

    try {
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatusMessage("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatusMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatusMessage("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false); 
    }

    setTimeout(() => {
      setStatusMessage("");
    }, 5000);
  };

  return (
    <section className="contactSection">
      <motion.div className="contactContainer" initial={{ opacity: 0 , y:100}} animate={{ opacity: 1 , y:0 }} transition={{ duration: 1 }}>
        <h2>Contact Us</h2>
        <p>Have questions? Reach out to us!</p>

        <Link href="https://chat.whatsapp.com/GObiBOjDxn5KTC2GVwCXXp" target="_blank" className="whatsappLink">
          <FaWhatsapp /> WhatsApp Community
        </Link>

        <div className="dropdown">
          <button className="dropdownButton" onClick={() => setIsOpen(!isOpen)}>
            Student Coordinators 
          </button>
          {isOpen && (
            <ul className="dropdownMenu">
              <li><a href="tel:+918148529920">Sharulatha - 8148529920</a></li>
              <li><a href="tel:+918072390391">Rajakavika - 8072390391</a></li>
              <li><a href="tel:+916384761234">Mugunth - 6384761234</a></li>
            </ul>
          )}
        </div>

        {statusMessage && (
          <div className={`statusMessage ${statusMessage.includes("successfully") ? "success" : "error"}`}>
            {statusMessage}
          </div>
        )}

        {isLoading && (
          <div className="loader">
            <div className="spinner"></div>
          </div>
        )}

        <form className="contactForm" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
          <textarea name="message" placeholder="Your Message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
          <button type="submit" className="submitButton">Send Message</button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
