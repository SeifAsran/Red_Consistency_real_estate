import React, { useState } from 'react';
import './Floorplans.css';
import floorPlan1 from '../Assets/Images/floor.plans (1).jpg';

const Floorplans = () => {
  const [activeFloor, setActiveFloor] = useState(1);

  const floorData = [
    { label: 'Living Room', size: '20 m²' },
    { label: 'Dinning Room', size: '15 m²' },
    { label: 'Kitchen', size: '15 m²' },
    { label: 'Master Bedroom', size: '16 m²' },
    { label: 'Kids Bedroom 1', size: '12 m²' },
    { label: 'Kids Bedroom 2', size: '12 m²' },
    { label: 'Bath Room', size: '6 m²' },
    { label: 'Garage', size: '40 m²' },
    { label: 'Warehouse', size: '4 m²' },
  ];

  return (
    <section className="floorplan-section">
      <div className="container py-5">
        <h2 className="home-section-title display-4 fw-bold mb-4 text-center text-white">
          Discover Home Floorplans
        </h2>
        {/* Floor Toggle Header */}
        <div className="d-flex justify-content-end mb-4">
          <div className="floor-toggle-group">
            <button
              className={`btn floor-btn ${activeFloor === 1 ? 'active' : ''}`}
              onClick={() => setActiveFloor(1)}
            >
              Floor 1
            </button>
            <button
              className={`btn floor-btn ${activeFloor === 2 ? 'active' : ''}`}
              onClick={() => setActiveFloor(2)}
            >
              Floor 2
            </button>
          </div>
        </div>

        <div className="row align-items-center">
          {/* Left Side: Stats */}
          <div className="col-lg-5 text-white">
            <div className="stats-list">
              {floorData.map((item, index) => (
                <div
                  key={index}
                  className="d-flex justify-content-between border-bottom border-secondary py-3"
                >
                  <span className="stat-label">{item.label}</span>
                  <span className="stat-value fw-bold">{item.size}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Blueprint Image */}
          <div className="col-lg-7 text-center mt-5 mt-lg-0">
            <div className="blueprint-container">
              <img
                src={floorPlan1}
                alt="Floorplan Blueprint"
                className="img-fluid blueprint-img"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="bottom-scroll-up">
        <button className="btn btn-circle">↑</button>
      </div>
    </section>
  );
};

export default Floorplans;

