import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import '../components/PageHero.css';
import './Atelier.css';
import renovationBg from '../Assets/Images/renovation.jpg';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const atelierItems = [
  { title: 'Signature Paints', desc: 'Velvety, low-sheen finishes in calibrated tones.' },
  { title: 'Stone & Parquet Floors', desc: 'Long-format planks and natural stone patterns.' },
  { title: 'Wall Panels & Cladding', desc: '3D wall systems and acoustic paneling.' },
  { title: 'Lighting & Metalwork', desc: 'Curated brass and hidden lighting details.' },
];

const Atelier = () => {
  return (
    <PageTransition>
      <section className="page-section atelier-page page-hero-wrapper">
        <div
          className="page-hero-bg"
          style={{
            backgroundImage: `linear-gradient(rgba(5,42,53,0.8), rgba(6,58,74,0.75)), url(${renovationBg})`,
          }}
        />
        <div className="container page-hero-content">
          <h1>The Atelier</h1>
          <p className="page-hero-lead">
            A finishing lab for high-end paints, flooring, and wall designs — where every detail is
            tested, refined, and elevated.
          </p>
        </div>
      </section>
      <section className="page-body atelier-page">
        <div className="container">
          <motion.div
            className="row g-4 atelier-grid"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {atelierItems.map((item) => (
              <motion.div
                key={item.title}
                className="col-md-6 col-lg-3"
                variants={itemVariants}
              >
                <div className="atelier-card">
                  <h3 className="atelier-card-title">{item.title}</h3>
                  <p className="atelier-card-text">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Atelier;

