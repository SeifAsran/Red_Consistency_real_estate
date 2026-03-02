import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import '../components/PageHero.css';
import './Collections.css';
import collectionsBg from '../Assets/Images/Collections.jpg';
import Home1 from '../Assets/Images/Homes (1).jpg';
import Home2 from '../Assets/Images/Homes (2).jpg';
import Home3 from '../Assets/Images/Homes (3).jpg';
import Home4 from '../Assets/Images/Homes (4).jpg';
import Home5 from '../Assets/Images/Homes (5).jpg';
import Home6 from '../Assets/Images/Homes (6).jpg';

// Primary data source for compounds
export const compoundList = [
  {
    id: 'makan-oasis',
    name: 'Makan Oasis',
    location: 'New Cairo',
    delivery: 'Q4 2027',
    image: Home1,
  },
  {
    id: 'east-plateau',
    name: 'East Plateau',
    location: 'New Cairo',
    delivery: 'Q2 2026',
    image: Home2,
  },
  {
    id: 'signature-row',
    name: 'The Signature Row',
    location: 'Sheikh Zayed',
    delivery: 'Q3 2028',
    image: Home3,
  },
  {
    id: 'vista-heights',
    name: 'Vista Heights',
    location: 'New Capital',
    delivery: 'Q1 2027',
    image: Home4,
  },
  {
    id: 'palm-heights',
    name: 'Palm Heights',
    location: '6th of October',
    delivery: 'Ready to Move',
    image: Home5,
  },
  {
    id: 'skyline-quarter',
    name: 'Skyline Quarter',
    location: 'Alexandria',
    delivery: 'Q4 2029',
    image: Home6,
  },
];

const featureVariants = {
  hidden: { opacity: 0, scale: 0.94, y: 18 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 0.61, 0.36, 1] },
  },
};

const Collections = () => {
  return (
    <PageTransition>
      <section className="page-section collections-page page-hero-wrapper">
        <div
          className="page-hero-bg"
          style={{
            backgroundImage:
              'linear-gradient(rgba(5,42,53,0.8), rgba(6,58,74,0.75)), url(' + collectionsBg + ')',
          }}
        />
        <div className="container page-hero-content">
          <h1>The Collections</h1>
          <p className="page-hero-lead">
            A curated portfolio of new compounds and branded residences across Egypt&apos;s most
            promising masterplans.
          </p>
        </div>
      </section>

      <section className="collections-body">
        <div className="container collections-layout">
          {/* Signature Sidebar */}
          <aside className="collections-sidebar">
            <div className="sidebar-inner">
              <h2 className="casko-font sidebar-title">The Signature</h2>
              <p className="sidebar-copy">
                Navigate Red Consistency&apos;s signature compounds — each one a complete ecosystem of
                architecture, landscaping, and experience.
              </p>
              <nav className="sidebar-nav" aria-label="Compounds navigation">
                {compoundList.map((compound) => (
                  <a key={compound.id} href={'#' + compound.id} className="sidebar-link">
                    {compound.name}
                  </a>
                ))}
              </nav>
            </div>
            <div className="sidebar-divider" />
          </aside>

          {/* Narrative Grid */}
          <div className="collections-grid-mosaic">
            {compoundList.map((compound, index) => {
              const isOdd = (index + 1) % 2 === 1;
              return (
                <motion.article
                  key={compound.id}
                  id={compound.id}
                  className={
                    isOdd
                      ? 'collection-feature feature-large'
                      : 'collection-feature feature-small'
                  }
                  variants={featureVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.35 }}
                >
                  <div className="collection-image-wrap">
                    <img
                      src={compound.image}
                      alt={compound.name}
                      className="collection-img"
                      loading="lazy"
                    />
                    <div className="collection-info-card">
                      <h3 className="casko-font collection-name">{compound.name}</h3>
                      <p className="collection-meta">
                        <span>{compound.location}</span>
                        <span className="dot" />
                        <span>Delivery {compound.delivery}</span>
                      </p>
                    </div>
                    <div className="collection-hover-layer">
                      <Link
                        to={`/compounds/${compound.id}`}
                        className="collection-view-btn casko-font"
                      >
                        View Development
                      </Link>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Collections;

