import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import aboutBg from '../Assets/Images/about.jpg';
import visionImg from '../Assets/Images/Vision.jpg';
import missionImg from '../Assets/Images/Mission.jpg';
import './About.css';

const About = () => {
  const reveal = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <PageTransition>
      <div className="about-page-wrap">
        {/* Hero – match other pages' background image style */}
        <section className="page-section about-page page-hero-wrapper">
          <div
            className="page-hero-bg"
            style={{
              backgroundImage:
                'linear-gradient(rgba(5,42,53,0.8), rgba(6,58,74,0.75)), url(' + aboutBg + ')',
            }}
          />
          <div className="container page-hero-content">
            <motion.h1 {...reveal}>About Us</motion.h1>
          </div>
        </section>

        <div className="container about-container">
          
          {/* Section 1: About Us */}
          <motion.div className="z-section" {...reveal}>
            <div className="z-text">
              <h2 className="casko-font">The Standard of Egyptian Living</h2>
              <p>Red Consistency is more than a real estate firm; we are a multidisciplinary luxury concierge dedicated to the complete lifecycle of your home. Founded on the principles of stability and architectural artistry, we bridge the gap between property investment and the creation of a private sanctuary.</p>
            </div>
            <div className="z-image">
              <img src={aboutBg} alt="Real Estate Excellence" />
            </div>
          </motion.div>

          {/* Section 2: Our Vision (REVERSED) */}
          <motion.div className="z-section reverse" {...reveal}>
            <div className="z-text">
              <h2 className="casko-font">Our Vision</h2>
              <p>To redefine the Egyptian skyline through the lens of perfection. We strive to create an ecosystem where real estate is the seamless integration of investment value, community, and high-end design.</p>
            </div>
            <div className="z-image">
              <img src={visionImg} alt="Future Vision" />
            </div>
          </motion.div>

          {/* Section 3: Our Mission */}
          <motion.div className="z-section" {...reveal}>
            <div className="z-text">
              <h2 className="casko-font">Our Mission</h2>
              <p>To curate, trade, and perfect with integrity. We empower our clients through every stage: Curating prestigious off-plan developments, Trading verified residences, and Perfecting spaces through our specialized atelier.</p>
              <Link to="/contact" className="btn-luxury">Get In Touch</Link>
            </div>
            <div className="z-image">
              <img src={missionImg} alt="Our Commitment" />
            </div>
          </motion.div>

        </div>
      </div>
    </PageTransition>
  );
};

export default About;