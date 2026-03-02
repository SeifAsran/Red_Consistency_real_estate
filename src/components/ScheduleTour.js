import React, { useState } from 'react';
import './ScheduleTour.css';

const ScheduleTour = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '2026-02-10',
    time: '10:00',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Tour Requested:', formData);
    alert('Thank you! Your tour request has been sent.');
  };

  return (
    <section className="schedule-section py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side: Info and Agent */}
          <div className="col-lg-5 mb-5 mb-lg-0">
            <span className="contact-label">
              Contact Us
            </span>
            <h2 className="display-4 fw-bold mb-4">
              Schedule a Home Tour
            </h2>
            <p className="intro-text mb-5 pe-lg-5">
              Interested in this property or ready to see it in person? Send us your request and
              we'll arrange a visit at your convenience.
            </p>

            <div className="agent-profile d-flex align-items-center">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200"
                alt="Emily Rodriguez"
                className="agent-avatar-large me-3"
              />
              <div>
                <h5 className="fw-bold mb-0">
                  Emily Rodriguez
                </h5>
                <p className="mb-0 agent-phone">
                  (+1) 234-5678
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Request Form */}
          <div className="col-lg-7">
            <form className="tour-form p-4" onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    className="form-control custom-input"
                    placeholder="Your Name"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    name="email"
                    className="form-control custom-input"
                    placeholder="Your Email"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <div className="input-group">
                    <input
                      type="date"
                      name="date"
                      className="form-control custom-input"
                      value={formData.date}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <select
                    name="time"
                    className="form-select custom-input"
                    value={formData.time}
                    onChange={handleChange}
                  >
                    <option value="10:00">10:00 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="14:00">02:00 PM</option>
                    <option value="16:00">04:00 PM</option>
                  </select>
                </div>
                <div className="col-12">
                  <textarea
                    name="message"
                    className="form-control custom-input"
                    rows="4"
                    placeholder="Tell us your preferred date, time, or any questions"
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="col-12 mt-4">
                  <button type="submit" className="btn request-btn">
                    Request a Visit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleTour;

