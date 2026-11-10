import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };
  
  return (
    <section id="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact Us</h2>
          <p>We'd love to hear from you. Get in touch with any questions or reservations.</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Visit Our Restaurant</h3>
            <div className="contact-detail">
              <i className="fas fa-map-marker-alt"></i>
              <span>Beirut City, LIU Street</span>
            </div>
            <div className="contact-detail">
              <i className="fas fa-phone"></i>
              <span>(+961) 78940016</span>
            </div>
            <div className="contact-detail">
              <i className="fas fa-envelope"></i>
              <span>info@tastybites.com</span>
            </div>
            
            <h3 style={{marginTop: '30px'}}>Opening Hours</h3>
            <div className="contact-detail">
              <i className="fas fa-clock"></i>
              <span>Monday - Sunday: 11:00 AM - 10:00 PM</span>
            </div>
          </div>
          
          <div className="contact-form">
            <h3>Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;