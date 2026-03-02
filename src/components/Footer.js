import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="container py-5">
        <div className="row text-center text-md-start align-items-center">
          {/* Address Section */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="footer-heading">Address</h5>
            <p className="footer-text">New Cairo, Egypt</p>
          </div>

          {/* Logo & Socials Section */}
          <div className="col-md-4 mb-4 mb-md-0 text-center">
            <div className="footer-logo mb-3">
              <span className="logo-square-small"></span>
              <span className="footer-brand casko-font">Red Consistency</span>
            </div>
            <div className="social-icons d-flex justify-content-center gap-3">
              <a href="#" className="social-link">
                f
              </a>
              <a href="#" className="social-link">
                ig
              </a>
              <a href="#" className="social-link">
                tw
              </a>
              <a href="#" className="social-link">
                yt
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div className="col-md-4 text-md-end">
            <h5 className="footer-heading">Contact Us</h5>
            <p className="footer-text">T. (+20) 000-000-0000</p>
            <p className="footer-text">M. info@redconsistency.com</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom py-3">
        <div className="container text-center">
          <p className="mb-0 small opacity-50">
            Copyright 2026 - Red Consistency
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

