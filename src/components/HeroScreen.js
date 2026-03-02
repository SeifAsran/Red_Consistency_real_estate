import React, { useState, useEffect } from 'react';
import './HeroScreen.css';
import HomeScreen1 from '../Assets/Images/Home_screen_1.jpg';
import HomeScreen2 from '../Assets/Images/Home_screen_2.jpg';
import HomeScreen3 from '../Assets/Images/Home_screen_3.jpg';
import HomeScreen4 from '../Assets/Images/Home_screen_4.jpg';
import avatar1 from '../Assets/Images/Home.plans (2).jpg';
import avatar2 from '../Assets/Images/Home.plans (3).jpg';
import avatar3 from '../Assets/Images/Home.plans (4).jpg';
import moLogo from '../Assets/Images/mo.logo.png';

const slides = [HomeScreen1, HomeScreen2, HomeScreen3, HomeScreen4];

const HeroScreen = () => {
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-wrapper">
      {/* Background Slides */}
      {slides.map((url, index) => (
        <div
          key={index}
          className={`hero-slide ${index === currentImg ? 'active' : ''}`}
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${url})`,
          }}
        />
      ))}

      {/* Left-side glossy white background panel */}
      <div className="hero-left-bg" />

      {/* Main Content - Creative Agency Layout */}
      <div className="container hero-content">
        <div className="hero-layout">
          {/* Left: Badge, Heading, Copy, Social Proof */}
          <div className="hero-left">
            <div className="hero-pill">Real Estate Creative Studio</div>
            <h1 className="hero-agency-title">
              Bold brand experiences
              <br />
              for modern living.
            </h1>
            <p className="hero-subcopy">
              Makan Oasis partners with visionary developers to craft immersive
              spaces, iconic architecture, and high-converting launch campaigns.
            </p>

            <div className="hero-social-proof">
              <div className="hero-avatars">
                <img src={avatar1} alt="Customer 1" />
                <img src={avatar2} alt="Customer 2" />
                <img src={avatar3} alt="Customer 3" />
              </div>
              <div className="hero-social-text">
                <span className="hero-social-label">24K+ residents</span>
                <span className="hero-social-muted">living in branded compounds worldwide.</span>
              </div>
            </div>
          </div>

          {/* Right: Floating "Live Your Dream" card */}
          <div className="hero-right">
            <div className="hero-floating-card">
              <div className="hero-card-img-wrap">
                <img src={HomeScreen1} alt="Live your dream home" className="hero-card-img" />
              </div>
              <div className="hero-card-body">
                <h4 className="hero-card-title">Live Your Dream</h4>
                <p className="hero-card-text">
                  Thoughtfully designed homes that look great, perform well, and fit your lifestyle
                  perfectly every day.
                </p>
                <button className="btn hero-card-cta">Schedule Visit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroScreen;


