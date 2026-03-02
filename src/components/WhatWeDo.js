import React from 'react';
import { Link } from 'react-router-dom';
import './WhatWeDo.css';
import compoundsBg from '../Assets/Images/compounds (1).jpg';
import marketplaceBg from '../Assets/Images/Marketplace.jpg';
import studioBg from '../Assets/Images/renovation.jpg';

const pillars = [
  {
    title: 'The Collections',
    description: 'New compounds and branded residences across Egypt’s most promising masterplans. Discover off-plan and ready projects.',
    path: '/compounds',
    image: compoundsBg,
  },
  {
    title: 'The Resale Collection',
    description: 'A curated, invitation-only marketplace where owners list and buyers discover verified, story-led properties.',
    path: '/marketplace',
    image: marketplaceBg,
  },
  {
    title: 'The Studio',
    description: 'A finishing lab for high-end paints, flooring, and wall designs — where every detail is tested, refined, and elevated.',
    path: '/finishing',
    image: studioBg,
  },
];

const WhatWeDo = () => {
  return (
    <section className="what-we-do-section">
      <div className="container">
        <h2 className="home-section-title">What We Do</h2>
        <p className="what-we-do-subtitle">The Three Pillars</p>
        <div className="row g-4 pillars-grid">
          {pillars.map((pillar) => (
            <div key={pillar.path} className="col-lg-4 col-md-6">
              <div
                className="pillar-card"
                style={{ '--pillar-bg': `url(${pillar.image})` }}
              >
                <div className="pillar-card-content">
                  <h3 className="pillar-title">{pillar.title}</h3>
                  <p className="pillar-desc">{pillar.description}</p>
                  <Link to={pillar.path} className="pillar-btn">
                    Explore
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
