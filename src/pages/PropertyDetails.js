import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  Maximize2,
  BedDouble,
  Bath,
  Car,
  Banknote,
  X,
  PhoneCall,
  MessageCircle,
} from 'lucide-react';
import PageTransition from '../components/PageTransition';
import '../components/PageHero.css';
import './PropertyDetails.css';
import gallery1 from '../Assets/Images/compounds (1).jpg';
import gallery2 from '../Assets/Images/compounds (2).jpg';
import gallery3 from '../Assets/Images/compounds (3).jpg';

const propertyMock = {
  yearBuilt: 2022,
  area: 185,
  beds: 3,
  baths: 3,
  parking: 2,
  price: 'EGP 8,900,000',
  title: 'Emerald Crescent Residences',
  location: 'New Cairo, Egypt',
  description:
    'A curated home for those who expect more from every square meter. Emerald Crescent Residences blends architectural clarity, natural light, and tailored finishes into a private sanctuary in the heart of New Cairo. Floor-to-ceiling openings, calm palettes, and refined materiality create a stage for effortless daily living.',
  facilitiesLeft: ['24/7 Security & concierge', 'Panoramic community view', 'Smart home-ready wiring', 'Central air conditioning'],
  facilitiesRight: ['Underground parking', 'Elevated lobby entrance', 'High-speed elevators', 'On-site facility management'],
  images: [gallery1, gallery2, gallery3],
};

const PropertyDetails = () => {
  const { id } = useParams();
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const property = propertyMock;

  const handleThumbClick = (index) => {
    setActiveIndex(index);
  };

  const toggleLightbox = () => {
    setLightboxOpen((prev) => !prev);
  };

  return (
    <PageTransition>
      <div className="property-details-page">
        <section className="property-hero container">
          {/* Gallery */}
          <div className="property-gallery">
            <motion.div
              className="property-main-image-wrap"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.4 }}
              onClick={toggleLightbox}
            >
              <motion.img
                key={activeIndex}
                src={property.images[activeIndex]}
                alt={property.title}
                className="property-main-image"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              />
              <div className="property-main-overlay">
                <span className="casko-font">View Gallery</span>
              </div>
            </motion.div>
            <div className="property-thumbnails">
              {property.images.map((image, index) => (
                <button
                  key={index}
                  type="button"
                  className={
                    index === activeIndex
                      ? 'property-thumb is-active'
                      : 'property-thumb'
                  }
                  onClick={() => handleThumbClick(index)}
                >
                  <img src={image} alt={property.title + ' thumbnail ' + (index + 1)} />
                </button>
              ))}
            </div>
          </div>

          {/* Title + Location */}
          <div className="property-heading">
            <h1 className="casko-font property-title">{property.title}</h1>
            <p className="property-location">{property.location}</p>
          </div>

          {/* Info Bar */}
          <div className="property-info-bar">
            <div className="info-item">
              <Calendar size={18} />
              <div>
                <span className="info-label">Year of Build</span>
                <span className="info-value casko-font">{property.yearBuilt}</span>
              </div>
            </div>
            <div className="info-item">
              <Maximize2 size={18} />
              <div>
                <span className="info-label">Area</span>
                <span className="info-value casko-font">{property.area} m²</span>
              </div>
            </div>
            <div className="info-item">
              <BedDouble size={18} />
              <div>
                <span className="info-label">Bedrooms</span>
                <span className="info-value casko-font">{property.beds}</span>
              </div>
            </div>
            <div className="info-item">
              <Bath size={18} />
              <div>
                <span className="info-label">Bathrooms</span>
                <span className="info-value casko-font">{property.baths}</span>
              </div>
            </div>
            <div className="info-item">
              <Car size={18} />
              <div>
                <span className="info-label">Car Parking</span>
                <span className="info-value casko-font">{property.parking}</span>
              </div>
            </div>
            <div className="info-item">
              <Banknote size={18} />
              <div>
                <span className="info-label">Price</span>
                <span className="info-value casko-font">{property.price}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Description + Contact */}
        <section className="property-main-section">
          <div className="container property-main-grid">
            <div className="property-description">
              <h2 className="casko-font description-title">About Property</h2>
              <p className="description-body">
                {property.description}
              </p>
              <p className="description-body">
                Each room is orchestrated around comfort and clarity: generous living spaces, a
                chef-considered kitchen, tranquil bedrooms, and bathrooms appointed with
                hotel-grade fixtures. The result is a home that performs quietly in the background,
                allowing its residents to focus on the moments that matter.
              </p>

              <div className="property-facilities">
                <h3 className="casko-font facilities-title">Home Facilities</h3>
                <div className="facilities-grid">
                  <ul>
                    {property.facilitiesLeft.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <ul>
                    {property.facilitiesRight.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Advisor Card */}
            <aside className="advisor-card">
              <h3 className="casko-font advisor-title">Contact Advisor</h3>
              <p className="advisor-subtitle">
                Speak with a dedicated Red Consistency advisor about this residence and similar
                opportunities.
              </p>
              <form className="advisor-form">
                <div className="advisor-field">
                  <label htmlFor="advisor-name">Full Name</label>
                  <input
                    id="advisor-name"
                    type="text"
                    placeholder="Your name"
                  />
                </div>
                <div className="advisor-field">
                  <label htmlFor="advisor-email">Email</label>
                  <input
                    id="advisor-email"
                    type="email"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="advisor-field">
                  <label htmlFor="advisor-message">Message</label>
                  <textarea
                    id="advisor-message"
                    rows="3"
                    placeholder="Share your preferred timing and any specific requests."
                  />
                </div>
                <button type="submit" className="advisor-submit casko-font">
                  <PhoneCall size={16} />
                  <span>Request Call Back</span>
                </button>
                <button type="button" className="advisor-whatsapp">
                  <MessageCircle size={16} />
                  <span>Chat on WhatsApp</span>
                </button>
              </form>
            </aside>
          </div>
        </section>

        {/* Lightbox */}
        <AnimatePresence>
          {lightboxOpen && (
            <motion.div
              className="property-lightbox-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="property-lightbox-content"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
              >
                <button
                  type="button"
                  className="lightbox-close"
                  onClick={toggleLightbox}
                >
                  <X size={22} />
                </button>
                <img
                  src={property.images[activeIndex]}
                  alt={property.title + ' enlarged'}
                  className="lightbox-image"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageTransition>
  );
};

export default PropertyDetails;

