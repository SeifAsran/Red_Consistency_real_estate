import React, { useEffect, useRef } from 'react';
import './PropertyListings.css';
import compound1 from '../Assets/Images/compounds (1).jpg';
import compound2 from '../Assets/Images/compounds (2).jpg';
import compound3 from '../Assets/Images/compounds (3).jpg';
import compound4 from '../Assets/Images/compounds (4).jpg';

const PropertyListings = () => {
  const properties = [
    {
      id: 1,
      title: 'Emerald Dunes Compound',
      beds: 4,
      baths: 3,
      sqft: 3200,
      price: '2,522,000',
      image: compound1,
    },
    {
      id: 2,
      title: 'Skyline Heights Residences',
      beds: 3,
      baths: 3,
      sqft: 2800,
      price: '2,250,000',
      image: compound2,
    },
    {
      id: 3,
      title: 'Garden Court Villas',
      beds: 5,
      baths: 4,
      sqft: 3600,
      price: '3,150,000',
      image: compound3,
    },
    {
      id: 4,
      title: 'Harbor View Estates',
      beds: 4,
      baths: 3,
      sqft: 3100,
      price: '2,890,000',
      image: compound4,
    },
  ];

  const rowsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    rowsRef.current.forEach((row) => {
      if (row) observer.observe(row);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="listings-section py-5">
      <div className="container">
        <h2 className="home-section-title display-5 fw-bold mb-5 text-center">
          The Collections
        </h2>
        {properties.map((prop, idx) => (
          <div
            key={prop.id}
            ref={(el) => {
              rowsRef.current[idx] = el;
            }}
            className="property-row d-flex align-items-center mb-5"
          >
            {/* Left side: Text Details */}
            <div className="property-info col-lg-6">
              <h3 className="property-title mb-4">{prop.title}</h3>
              <div className="property-specs d-flex gap-4 mb-4">
                <span>🛏️ {prop.beds} Bed</span>
                <span>🚿 {prop.baths} Bath</span>
                <span>📏 {prop.sqft} sqft</span>
              </div>
              <div className="d-flex align-items-center justify-content-between pe-lg-5">
                <h4 className="property-price mb-0">${prop.price}</h4>
                <div className="arrow-btn">
                  <span className="arrow-icon">↗</span>
                </div>
              </div>
            </div>

            {/* Right side: Image with zoom transition */}
            <div className="property-image-container col-lg-6">
              <div className="image-wrapper">
                <img src={prop.image} alt={prop.title} className="img-fluid property-img" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PropertyListings;

