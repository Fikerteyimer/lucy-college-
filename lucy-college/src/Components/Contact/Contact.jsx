import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! Your message has been sent.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-page">

      {/* Page Header */}
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We’re here to help. Reach out anytime.</p>
      </div>

      {/* Form + Map Container */}
      <div className="contact-main">
        {/* Contact Form */}
        <div className="contact-form">
          <h2>Send a Message</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Full Name
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required
              />
            </label>
            <label>
              Email
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required
              />
            </label>
            <label>
              Message
              <textarea 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                required
              />
            </label>
            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Google Map */}
        <div className="contact-map">
          <iframe
            title="Lucy College Location"
            src="https://maps.app.goo.gl/KAHBps5o4ZbrTsRk7"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Contact Info at the bottom */}
      <div className="contact-info">
        <h2>Get in Touch</h2>
        <p>📍 Dessie, Ethiopia</p>
        <p>📞 +251 9XX XXX XXX</p>
        <p>📧 info@lucycollege.edu</p>
        <p>⏰ Mon – Fri: 8:30 AM – 5:00 PM</p>
      </div>

    </div>
  );
};

export default Contact;
