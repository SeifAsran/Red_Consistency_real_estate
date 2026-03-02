import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import contactBg from '../Assets/Images/contact.jpg';
import './Contact.css';

const leftVariants = {
  initial: { opacity: 0, x: -32 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] } },
};

const rightVariants = {
  initial: { opacity: 0, x: 32 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] } },
};

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    interest: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (submitted) setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Typically send to backend/API here
    setSubmitted(true);
  };

  return (
    <PageTransition>
      <div className="contact-page-wrap">
        <div
          className="contact-hero-bg"
          style={{
            backgroundImage: `linear-gradient(rgba(5, 42, 53, 0.85), rgba(6, 58, 74, 0.85)), url(${contactBg})`,
          }}
        />
        {/* Hero Section */}
        <section className="contact-hero">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 0.61, 0.36, 1] }}
            >
              <h1 className="contact-hero-title">Connect With Excellence</h1>
              <p className="contact-hero-subtext">
                Begin your journey in the complete cycle of Egyptian living.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Split Layout */}
        <section className="contact-main">
          <div className="container">
            <div className="contact-grid">
              {/* Left: Info */}
              <motion.div
                className="contact-info-panel"
                variants={leftVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
              >
                <h2 className="contact-section-title">Red Consistency</h2>
                <p className="contact-section-copy">
                  A dedicated team of advisors, architects, and finishing specialists ready to guide
                  you through every chapter of the complete cycle.
                </p>

                <div className="contact-info-list">
                  <div className="contact-info-item">
                    <div className="contact-icon-circle">
                      <Mail size={18} />
                    </div>
                    <div>
                      <div className="contact-info-label">Inquiries</div>
                      <a
                        href="mailto:info@redconsistency.com"
                        className="contact-info-link"
                      >
                        info@redconsistency.com
                      </a>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <div className="contact-icon-circle">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <div className="contact-info-label">Office</div>
                      <div className="contact-info-text">New Cairo, Egypt</div>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <div className="contact-icon-circle">
                      <Phone size={18} />
                    </div>
                    <div>
                      <div className="contact-info-label">Phone</div>
                      <div className="contact-info-text">(+20) 000-000-0000</div>
                    </div>
                  </div>
                </div>

                <div className="contact-socials">
                  <div className="contact-info-label">Socials</div>
                  <div className="contact-social-links">
                    <a href="#" className="contact-social-link">
                      <Instagram size={18} /> <span>Instagram</span>
                    </a>
                    <a href="#" className="contact-social-link">
                      <Linkedin size={18} /> <span>LinkedIn</span>
                    </a>
                    <a href="#" className="contact-social-link">
                      <MessageCircle size={18} /> <span>WhatsApp</span>
                    </a>
                  </div>
                </div>

                <div className="contact-hours">
                  <div className="contact-info-label">Business Hours</div>
                  <div className="contact-info-text">Sunday – Thursday: 10:00 AM – 6:00 PM</div>
                </div>
              </motion.div>

              {/* Right: Form */}
              <motion.div
                className="contact-form-panel"
                variants={rightVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
              >
                <h2 className="contact-section-title">Premium Inquiry</h2>
                <p className="contact-section-copy">
                  Tell us how we can support your next move—in New Compounds, The Exchange, or The
                  Atelier.
                </p>

                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="contact-form-row">
                    <div className="contact-field">
                      <label htmlFor="name" className="contact-label">
                        Full Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        className="contact-input"
                        required
                      />
                    </div>
                    <div className="contact-field">
                      <label htmlFor="email" className="contact-label">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        className="contact-input"
                        required
                      />
                    </div>
                  </div>

                  <div className="contact-form-row">
                    <div className="contact-field full">
                      <label htmlFor="interest" className="contact-label">
                        Interest
                      </label>
                      <select
                        id="interest"
                        name="interest"
                        value={form.interest}
                        onChange={handleChange}
                        className="contact-input contact-select"
                        required
                      >
                        <option value="" disabled>
                          Select an area of interest
                        </option>
                        <option value="compounds">New Compounds</option>
                        <option value="exchange">The Exchange</option>
                        <option value="atelier">The Atelier</option>
                      </select>
                    </div>
                  </div>

                  <div className="contact-form-row">
                    <div className="contact-field full">
                      <label htmlFor="message" className="contact-label">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        value={form.message}
                        onChange={handleChange}
                        className="contact-input contact-textarea"
                        required
                      />
                    </div>
                  </div>

                  <div className="contact-actions">
                    <button type="submit" className="contact-submit-btn">
                      Send Inquiry
                    </button>
                  </div>
                </form>

                {submitted && (
                  <motion.div
                    className="contact-success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
                  >
                    <p>
                      Thank you for your inquiry. A member of the Red Consistency team will reach
                      out to you shortly.
                    </p>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Contact;

