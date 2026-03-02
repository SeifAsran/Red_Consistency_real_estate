import React, { useState } from 'react';
import './LocationHighlights.css';

const LocationHighlights = () => {
  const [activeTab, setActiveTab] = useState('Parks');

  const categories = ['Grocery', 'Dining', 'Transportation', 'Education', 'Hospitals', 'Parks'];

  // Dummy data for each category for now
  const locationsByCategory = {
    Grocery: [
      {
        name: 'Fresh Market Brooklyn',
        time: '8 min walk',
        desc: 'Neighborhood grocery with daily essentials and fresh produce.',
        icon: '🛒',
      },
      {
        name: 'Organic Whole Foods',
        time: '5 min drive',
        desc: 'Organic supermarket with a wide range of healthy options.',
        icon: '🥦',
      },
      {
        name: 'Corner Deli & Mart',
        time: '3 min walk',
        desc: 'Convenient corner store for quick snacks and basics.',
        icon: '🧃',
      },
    ],
    Dining: [
      {
        name: 'Oasis Bistro',
        time: '7 min walk',
        desc: 'Cozy neighborhood restaurant serving modern comfort food.',
        icon: '🍽️',
      },
      {
        name: 'Sunset Rooftop Café',
        time: '10 min walk',
        desc: 'Rooftop café with skyline views and specialty coffee.',
        icon: '☕',
      },
      {
        name: 'Brooklyn Street Eats',
        time: '6 min drive',
        desc: 'Vibrant food court with global street food options.',
        icon: '🌮',
      },
    ],
    Transportation: [
      {
        name: 'Clark St Subway Station',
        time: '6 min walk',
        desc: 'Direct access to multiple subway lines into Manhattan.',
        icon: '🚇',
      },
      {
        name: 'Brooklyn Ferry Terminal',
        time: '9 min walk',
        desc: 'Scenic ferry rides connecting to key waterfront destinations.',
        icon: '⛴️',
      },
      {
        name: 'Atlantic Bus Hub',
        time: '8 min drive',
        desc: 'Major bus connection point for borough-wide routes.',
        icon: '🚌',
      },
    ],
    Education: [
      {
        name: 'Brooklyn Heights Elementary',
        time: '5 min walk',
        desc: 'Highly rated public elementary school with modern facilities.',
        icon: '🏫',
      },
      {
        name: 'Riverfront Middle Academy',
        time: '10 min drive',
        desc: 'STEM-focused middle school with after-school programs.',
        icon: '📘',
      },
      {
        name: 'Downtown Learning Center',
        time: '12 min drive',
        desc: 'Tutoring and enrichment center for all ages.',
        icon: '🧠',
      },
    ],
    Hospitals: [
      {
        name: 'Brooklyn General Hospital',
        time: '9 min drive',
        desc: 'Full-service hospital with 24/7 emergency care.',
        icon: '🏥',
      },
      {
        name: 'Riverfront Medical Clinic',
        time: '6 min drive',
        desc: 'Family clinic for primary care and routine check-ups.',
        icon: '👩‍⚕️',
      },
      {
        name: 'City Wellness Center',
        time: '4 min walk',
        desc: 'Wellness center offering therapy, yoga, and nutrition services.',
        icon: '💊',
      },
    ],
    Parks: [
      {
        name: 'Brooklyn Bridge Park',
        time: '15 min walk',
        desc: 'Scenic waterfront park with recreation and skyline views.',
        icon: '🌲',
      },
      {
        name: 'Cadman Plaza Park',
        time: '10 min walk',
        desc: 'Green open space perfect for walking, jogging, and relaxing.',
        icon: '🌳',
      },
      {
        name: 'Fort Greene Park',
        time: '6 min drive',
        desc: 'Historic park with trails, playgrounds, and community events.',
        icon: '⛰️',
      },
    ],
  };

  return (
    <section className="location-section">
      <div className="container py-5">
        <header className="mb-5 text-center">
          <p className="highlight-label">Location Highlights</p>
          <h2 className="home-section-title display-4 fw-bold main-title">
            Everything You Need, All Around You
          </h2>
        </header>

        {/* Tab Navigation */}
        <div className="tab-container mb-5">
          <ul className="nav nav-pills gap-2">
            {categories.map((cat) => (
              <li className="nav-item" key={cat}>
                <button
                  className={`nav-link tab-btn ${activeTab === cat ? 'active' : ''}`}
                  onClick={() => setActiveTab(cat)}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <hr className="divider mb-5" />

        {/* Location Grid */}
        <div className="row g-4">
          {locationsByCategory[activeTab].map((loc, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="location-card d-flex align-items-start">
                <div className="icon-wrapper me-3">
                  {/* Using text icons to match the simplified style of the prompt */}
                  <span className="fs-2">{loc.icon}</span>
                </div>
                <div className="location-info">
                  <h4 className="fw-bold h5 mb-1">{loc.name}</h4>
                  <p className="travel-time small mb-2">{loc.time}</p>
                  <p className="text-muted small">{loc.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationHighlights;

