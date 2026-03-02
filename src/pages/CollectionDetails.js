import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Leaf,
  Sparkles,
  ShoppingBag,
  ShieldCheck,
  Download,
  ArrowRight,
} from 'lucide-react';
import PageTransition from '../components/PageTransition';
import './CollectionDetails.css';
import Home1 from '../Assets/Images/Homes (1).jpg';
import Home7 from '../Assets/Images/Homes (7).jpg';
import Home8 from '../Assets/Images/Homes (8).jpg';
import Home9 from '../Assets/Images/Homes (9).jpg';
import Home10 from '../Assets/Images/Homes (10).jpg';

const compoundConfig = {
  'makan-oasis': {
    name: 'Makan Oasis',
    location: 'New Cairo',
    heroImages: [Home1, Home7, Home8],
  },
  'emerald-crescent': {
    name: 'Emerald Crescent',
    location: 'Sheikh Zayed',
    heroImages: [Home1, Home9, Home10],
  },
  default: {
    name: 'Signature Development',
    location: 'Egypt',
    heroImages: [Home1, Home7, Home10],
  },
};

const galleryImages = [Home7, Home8, Home9, Home10];

const lifestyleItems = [
  {
    icon: Leaf,
    title: 'Green Spaces & Parks',
    copy: 'Layered landscaping, walking trails, and shaded courtyards designed for slow, intentional living.',
  },
  {
    icon: Sparkles,
    title: 'Clubhouse & Spa',
    copy: 'A hospitality-led clubhouse with spa, pool decks, and lounges curated for residents and their guests.',
  },
  {
    icon: ShoppingBag,
    title: 'Commercial Promenade',
    copy: 'A ground-floor retail spine with dining, boutiques, and daily essentials within walking distance.',
  },
  {
    icon: ShieldCheck,
    title: 'Smart Security Systems',
    copy: '24/7 monitored access, smart gates, and integrated cameras that protect without overwhelming.',
  },
];

const CollectionDetails = () => {
  const { id } = useParams();
  const compound = compoundConfig[id] || compoundConfig.default;

  return (
    <PageTransition>
      <div className="collection-details-page">
        {/* Cinematic Hero */}
        <section className="collection-hero">
          <div className="hero-media-strip">
            {compound.heroImages.map((img, index) => (
              <motion.div
                key={img + index}
                className="hero-media-frame"
                initial={{ opacity: 0, scale: 1.02, y: 24 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.9, delay: index * 0.15, ease: [0.22, 0.61, 0.36, 1] }}
                style={{
                  backgroundImage: 'linear-gradient(rgba(3,18,23,0.5), rgba(3,18,23,0.8)), url(' + img + ')',
                }}
              />
            ))}
          </div>
          <div className="hero-overlay">
            <div className="hero-copy container">
              <h1 className="casko-font hero-title">
                {compound.name} – Redefining {compound.location}
              </h1>
              <p className="hero-subtitle">
                A masterplanned compound where architecture, landscape, and everyday rituals are
                choreographed into one continuous experience.
              </p>
            </div>
          </div>
        </section>

        {/* Lifestyle Grid */}
        <section className="lifestyle-section">
          <div className="container">
            <div className="section-heading">
              <h2 className="casko-font">Lifestyle & Amenities</h2>
              <p>
                Beyond facades and floorplans, this development is measured by the way it feels to walk,
                live, and gather within its grounds.
              </p>
            </div>
            <div className="lifestyle-grid">
              {lifestyleItems.map((item) => (
                <motion.article
                  key={item.title}
                  className="lifestyle-card"
                  initial={{ opacity: 0, scale: 0.92, y: 18 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
                >
                  <div className="lifestyle-icon">
                    <item.icon size={22} />
                  </div>
                  <h3 className="casko-font lifestyle-title">{item.title}</h3>
                  <p className="lifestyle-copy">{item.copy}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Masterplan & Floorplans */}
        <section className="masterplan-section">
          <div className="container masterplan-grid">
            <div className="masterplan-visual">
              <h2 className="casko-font section-title">The Masterplan</h2>
              <div className="masterplan-frame">
                <div className="masterplan-image" />
                <span className="masterplan-hint casko-font">Hover to Zoom</span>
              </div>
            </div>

            <div className="unit-types">
              <h2 className="casko-font section-title">Available Unit Types</h2>
              <div className="unit-type-list">
                <div className="unit-type-card">
                  <h3 className="casko-font">Apartments</h3>
                  <p>
                    2–4 bedroom homes oriented for light, privacy, and seamless circulation between living
                    spaces.
                  </p>
                </div>
                <div className="unit-type-card">
                  <h3 className="casko-font">Penthouses</h3>
                  <p>
                    Signature residences with expansive terraces, skyline views, and elevated entertaining
                    spaces.
                  </p>
                </div>
                <div className="unit-type-card">
                  <h3 className="casko-font">Duplexes</h3>
                  <p>
                    Double-height living, private gardens, and layered zones for families that live on multiple
                    levels.
                  </p>
                </div>
              </div>
              <button type="button" className="brochure-btn casko-font">
                <Download size={18} />
                <span>Download Brochure (PDF)</span>
              </button>
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="collection-gallery">
          <div className="container">
            <div className="section-heading">
              <h2 className="casko-font">Gallery</h2>
              <p>
                A visual study of elevation, light, and the everyday views residents experience from
                within the compound.
              </p>
            </div>
            <div className="gallery-grid">
              {galleryImages.map((img, index) => (
                <div key={img + index} className="gallery-card">
                  <img
                    src={img}
                    alt={compound.name + ' gallery ' + (index + 1)}
                    className="gallery-img"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Floating CTA */}
        <button type="button" className="site-visit-cta casko-font">
          <span>Book a Site Visit</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </PageTransition>
  );
};

export default CollectionDetails;

