import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import heroImg from '../Assets/Images/renovation.jpg';
import kitchenImg from '../Assets/Images/Kitchen renovation.jpg';
import bathroomImg from '../Assets/Images/Bathroom remodeling.jpg';
import flooringImg from '../Assets/Images/Flooring replacement.jpg';
import lightingImg from '../Assets/Images/Ceiling & lighting redesign.jpg';
import paintingImg from '../Assets/Images/Painting & wall finishes.jpg';
import electricityImg from '../Assets/Images/electricity.jpg';
import plumbingImg from '../Assets/Images/plumbing.jpg';
import './Finishing.css';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] },
  },
};

const SERVICES = [
  {
    title: 'Kitchen Renovation',
    description: 'The heart of the home, reimagined with bespoke cabinetry and premium surfaces.',
    image: kitchenImg,
  },
  {
    title: 'Bathroom Remodeling',
    description: 'Private sanctuaries featuring spa-grade finishes and modern fixtures.',
    image: bathroomImg,
  },
  {
    title: 'Flooring Replacement',
    description: 'Master-class installation of marble, hardwood, and luxury porcelain.',
    image: flooringImg,
  },
  {
    title: 'Ceiling & Lighting Redesign',
    description: 'Architectural lighting and recessed designs that transform space.',
    image: lightingImg,
  },
  {
    title: 'Painting & Wall Finishes',
    description: 'Textured artistry and premium palettes for a signature look.',
    image: paintingImg,
  },
  {
    title: 'Infrastructure (Electricity & Plumbing)',
    description: 'The invisible standard of excellence: reliable, modern, and safe systems.',
    image: plumbingImg,
  },
];

const Finishing = () => {
  return (
    <PageTransition>
      <div className="finishing-page">
        {/* 1. Page Header */}
        <section className="finishing-hero">
          <div
            className="finishing-hero-bg"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(5, 42, 53, 0.78) 0%, rgba(6, 58, 74, 0.7) 100%), url(${heroImg})`,
            }}
          />
          <div className="container finishing-hero-content">
            <motion.h1
              className="finishing-hero-title"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
            >
              The Renovation
            </motion.h1>
            <motion.p
              className="finishing-hero-subtext"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 0.61, 0.36, 1] }}
            >
              From concept to completion, we redefine the essence of your private residence.
            </motion.p>
          </div>
        </section>

        {/* 2. Services Portfolio Section */}
        <section className="finishing-services">
          <div className="container">
            <motion.div
              className="finishing-services-head"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
            >
              <h2 className="finishing-section-title">Services Portfolio</h2>
              <p className="finishing-section-subtitle">
                A refined selection of renovation disciplines—delivered with consistency, discretion, and craft.
              </p>
            </motion.div>

            <motion.div
              className="finishing-services-grid"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
            >
              {SERVICES.map((service) => (
                <motion.div key={service.title} variants={itemVariants} className="finishing-service-col">
                  <div className="finishing-service-card">
                    <div className="finishing-service-media">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="finishing-service-img"
                        loading="lazy"
                      />
                      <div className="finishing-service-overlay" />
                      <div className="finishing-service-text">
                        <h3 className="finishing-service-title">{service.title}</h3>
                        <p className="finishing-service-desc">{service.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* 4. CTA */}
            <motion.div
              className="finishing-cta-wrap"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
            >
              <Link to="/contact" className="finishing-cta-btn">
                Request a Consultation
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Finishing;
