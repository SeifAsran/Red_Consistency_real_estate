import React, { useState } from 'react';
import './GallerySlider.css';
import homePlan1 from '../Assets/Images/Home.plans (1).jpg';
import homePlan2 from '../Assets/Images/Home.plans (2).jpg';
import homePlan3 from '../Assets/Images/Home.plans (3).jpg';
import homePlan4 from '../Assets/Images/Home.plans (4).jpg';

const GallerySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start with center image

  const slides = [
    {
      id: 1,
      title: 'Living Room Plan',
      url: homePlan1,
    },
    {
      id: 2,
      title: 'Kitchen & Dining',
      url: homePlan2,
    },
    {
      id: 3,
      title: 'Bedroom Layout',
      url: homePlan3,
    },
    {
      id: 4,
      title: 'Open Concept View',
      url: homePlan4,
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="gallery-section py-5">
      <div className="container">
        {/* Header Section */}
        <h2 className="home-section-title display-5 fw-bold mb-4">The Gallery</h2>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div className="gallery-label" style={{ color: '#7AB2B2', fontSize: '0.9rem' }}>
            Designed for Living
          </div>
          <div className="slider-controls">
            <button className="control-btn me-2" onClick={prevSlide}>
              <span className="arrow">‹</span>
            </button>
            <button className="control-btn" onClick={nextSlide}>
              <span className="arrow">›</span>
            </button>
          </div>
        </div>

        {/* Slider Track */}
        <div className="gallery-slider-viewport">
          <div
            className="gallery-slider-track"
            style={{ transform: `translateX(-${currentIndex * 45}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`gallery-card ${index === currentIndex ? 'active' : ''}`}
              >
                <img src={slide.url} alt={slide.title} />
                <div className="card-overlay">
                  <span className="room-title">{slide.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySlider;

