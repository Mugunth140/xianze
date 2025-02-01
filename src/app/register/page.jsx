"use client";

import { useState } from "react";
import "../../sass/pages/register.scss";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
    branch: "",
    college: "",
    contact: "",
    event: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const eventsList = [
    "Technical Connection",
    "Technical Quiz",
    "Paper Presentation",
    "Debugging",
    "Mini Hackathon",
    "Break the Query",
    "Gaming",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage("Registration Successful!");
        setFormData({
          name: "",
          email: "",
          course: "",
          branch: "",
          college: "",
          contact: "",
          event: "",
        });
      } else {
        setMessage(data.error || "Something went wrong.");
      }
    } catch (error) {
      setMessage("Failed to submit. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section className="registerSection">
      <div className="registerContainer">
        <h2>Event Registration</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email ID" value={formData.email} onChange={handleChange} required />
          <input type="text" name="course" placeholder="Course" value={formData.course} onChange={handleChange} required />
          <input type="text" name="branch" placeholder="Branch" value={formData.branch} onChange={handleChange} required />
          <input type="text" name="college" placeholder="College Name" value={formData.college} onChange={handleChange} required />
          <input type="text" name="contact" placeholder="Contact Number" value={formData.contact} onChange={handleChange} required />

          <select name="event" value={formData.event} onChange={handleChange} required>
            <option value="">Select an Event</option>
            {eventsList.map((event, index) => (
              <option key={index} value={event}>
                {event}
              </option>
            ))}
          </select>

          <button type="submit" disabled={loading} className="registerButton">
            {loading ? "Submitting..." : "Register"}
          </button>
        </form>
        {message && <p className="formMessage">{message}</p>}
      </div>
    </section>
  );
};

export default Register;
