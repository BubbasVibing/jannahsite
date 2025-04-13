import React, { useState, useEffect, useRef } from 'react';
import './contact.css';
import { FaEnvelope, FaInstagram, FaYoutube, FaTiktok, FaSnapchatGhost, FaHandHoldingHeart } from 'react-icons/fa';
import { MdOutlineMosque } from 'react-icons/md';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });
    
    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const setRef = (index: number) => (el: HTMLElement | null) => {
    sectionRefs.current[index] = el;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the data to your backend or email service
    console.log('Form data submitted:', formData);
    setSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setSubmitted(false);
    }, 3000);
  };
  
  return (
    <div className="contact-page">
      <section className="hero-contact fade-in" ref={setRef(0)}>
        <MdOutlineMosque className="hero-icon" />
        <h1>Contact Us</h1>
        <p>We'd love to hear from you. Reach out with any questions, feedback, or inquiries.</p>
      </section>
      
      <section className="contact-main fade-in" ref={setRef(1)}>
        <div className="contact-container">
          <div className="contact-form-section">
            <h2>Send Us a Message</h2>
            
            {submitted ? (
              <div className="form-success">
                <div className="success-icon">✓</div>
                <h3>Thank You!</h3>
                <p>Your message has been sent successfully. We'll get back to you soon.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
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
                  <label htmlFor="subject">Subject</label>
                  <select 
                    id="subject" 
                    name="subject" 
                    value={formData.subject} 
                    onChange={handleChange} 
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Product Question">Product Question</option>
                    <option value="Order Status">Order Status</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Partnership">Partnership Opportunity</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5} 
                    value={formData.message} 
                    onChange={handleChange} 
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="submit-button">Send Message</button>
              </form>
            )}
          </div>
          
          <div className="contact-info-section">
            <h2>Get in Touch</h2>
            
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div className="contact-details">
                  <h3>Email Us</h3>
                  <p className="email-address">imaanforjannah@gmail.com</p>
                </div>
              </div>
            </div>
            
            <div className="social-contact">
              <h3>Connect With Us</h3>
              <p>Follow us on social media for updates, news, and more ways to get in touch with our community.</p>
              <div className="social-icons">
                <a href="https://instagram.com/imaanforjannah" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
                <a href="https://youtube.com/@imaanforjannah" target="_blank" rel="noopener noreferrer">
                  <FaYoutube />
                </a>
                <a href="https://tiktok.com/@imaanforjannah" target="_blank" rel="noopener noreferrer">
                  <FaTiktok />
                </a>
                <a href="https://snapchat.com/add/imaanforjannah" target="_blank" rel="noopener noreferrer">
                  <FaSnapchatGhost />
                </a>
              </div>
            </div>
            
            <div className="donation-section">
              <h3>Support Our Mission</h3>
              <p>Help us continue our work by making a donation. Every contribution makes a difference.</p>
              <a href="https://www.paypal.com/donate/?hosted_button_id=Z9RDY53LRG8JC" target="_blank" rel="noopener noreferrer" className="donate-button">
                <FaHandHoldingHeart className="donate-icon" />
                <span>Donate via PayPal</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <section className="faq-section fade-in" ref={setRef(3)}>
        <div className="faq-container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How can I track my order?</h3>
              <p>Once your order ships, you'll receive a tracking number via email that you can use to monitor your package's journey to you.</p>
            </div>
            
            <div className="faq-item">
              <h3>What is your return policy?</h3>
              <p>We accept returns within 30 days of delivery. Items must be unworn, unwashed, and have all original tags attached.</p>
            </div>
            
            <div className="faq-item">
              <h3>Do you ship internationally?</h3>
              <p>Yes! We ship to over 50 countries worldwide. Shipping costs and delivery times vary by location.</p>
            </div>
            
            <div className="faq-item">
              <h3>How do I know what size to order?</h3>
              <p>Each product page has a detailed size guide. If you're between sizes, we generally recommend sizing up.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
