import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BedDouble, Bath, Maximize2 } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import '../components/PageHero.css';
import './Marketplace.css';
import marketplaceBg from '../Assets/Images/Marketplace.jpg';
import property1Img from '../Assets/Images/compounds (1).jpg';
import property2Img from '../Assets/Images/compounds (2).jpg';
import property3Img from '../Assets/Images/compounds (3).jpg';

const properties = [
  {
    id: 'emerald-crescent-01',
    title: 'Emerald Crescent Residences',
    location: 'New Cairo',
    price: 'EGP 8,900,000',
    beds: 3,
    baths: 3,
    area: 185,
    image: property1Img,
  },
  {
    id: 'harbor-dunes-02',
    title: 'Harbor Dunes Beach Villa',
    location: 'North Coast',
    price: 'EGP 12,500,000',
    beds: 4,
    baths: 4,
    area: 260,
    image: property2Img,
  },
  {
    id: 'vista-heights-03',
    title: 'Vista Heights Sky Loft',
    location: 'New Capital',
    price: 'EGP 7,250,000',
    beds: 2,
    baths: 2,
    area: 150,
    image: property3Img,
  },
  {
    id: 'emerald-crescent-02',
    title: 'Emerald Crescent Garden Loft',
    location: 'New Cairo',
    price: 'EGP 9,400,000',
    beds: 3,
    baths: 3,
    area: 195,
    image: property1Img,
  },
  {
    id: 'emerald-crescent-03',
    title: 'Emerald Crescent Park View',
    location: 'New Cairo',
    price: 'EGP 10,200,000',
    beds: 4,
    baths: 4,
    area: 215,
    image: property1Img,
  },
  {
    id: 'harbor-dunes-03',
    title: 'Harbor Dunes Sea Terrace',
    location: 'North Coast',
    price: 'EGP 13,800,000',
    beds: 4,
    baths: 5,
    area: 280,
    image: property2Img,
  },
  {
    id: 'harbor-dunes-04',
    title: 'Harbor Dunes Sunset Villa',
    location: 'North Coast',
    price: 'EGP 14,600,000',
    beds: 5,
    baths: 5,
    area: 310,
    image: property2Img,
  },
  {
    id: 'vista-heights-04',
    title: 'Vista Heights Corner Suite',
    location: 'New Capital',
    price: 'EGP 7,850,000',
    beds: 2,
    baths: 3,
    area: 165,
    image: property3Img,
  },
  {
    id: 'vista-heights-05',
    title: 'Vista Heights Duplex Loft',
    location: 'New Capital',
    price: 'EGP 8,600,000',
    beds: 3,
    baths: 3,
    area: 190,
    image: property3Img,
  },
  {
    id: 'emerald-crescent-04',
    title: 'Emerald Crescent Corner Villa',
    location: 'New Cairo',
    price: 'EGP 11,900,000',
    beds: 4,
    baths: 5,
    area: 240,
    image: property1Img,
  },
  {
    id: 'harbor-dunes-05',
    title: 'Harbor Dunes Lagoon Home',
    location: 'North Coast',
    price: 'EGP 15,300,000',
    beds: 5,
    baths: 6,
    area: 325,
    image: property2Img,
  },
  {
    id: 'vista-heights-06',
    title: 'Vista Heights Panorama Suite',
    location: 'New Capital',
    price: 'EGP 8,950,000',
    beds: 3,
    baths: 3,
    area: 200,
    image: property3Img,
  },
  {
    id: 'emerald-crescent-05',
    title: 'Emerald Crescent Sky Villa',
    location: 'New Cairo',
    price: 'EGP 12,400,000',
    beds: 5,
    baths: 5,
    area: 260,
    image: property1Img,
  },
  {
    id: 'harbor-dunes-06',
    title: 'Harbor Dunes Beachfront Loft',
    location: 'North Coast',
    price: 'EGP 16,100,000',
    beds: 4,
    baths: 5,
    area: 295,
    image: property2Img,
  },
  {
    id: 'vista-heights-07',
    title: 'Vista Heights Signature Loft',
    location: 'New Capital',
    price: 'EGP 9,300,000',
    beds: 3,
    baths: 3,
    area: 205,
    image: property3Img,
  },
  {
    id: 'emerald-crescent-06',
    title: 'Emerald Crescent Terrace Home',
    location: 'New Cairo',
    price: 'EGP 9,950,000',
    beds: 4,
    baths: 4,
    area: 210,
    image: property1Img,
  },
  {
    id: 'harbor-dunes-07',
    title: 'Harbor Dunes Marina Villa',
    location: 'North Coast',
    price: 'EGP 17,200,000',
    beds: 6,
    baths: 6,
    area: 340,
    image: property2Img,
  },
  {
    id: 'vista-heights-08',
    title: 'Vista Heights Skyline Penthouse',
    location: 'New Capital',
    price: 'EGP 10,100,000',
    beds: 4,
    baths: 4,
    area: 230,
    image: property3Img,
  },
  {
    id: 'emerald-crescent-07',
    title: 'Emerald Crescent Signature Villa',
    location: 'New Cairo',
    price: 'EGP 13,700,000',
    beds: 5,
    baths: 6,
    area: 285,
    image: property1Img,
  },
  {
    id: 'harbor-dunes-08',
    title: 'Harbor Dunes Horizon Home',
    location: 'North Coast',
    price: 'EGP 18,400,000',
    beds: 6,
    baths: 7,
    area: 360,
    image: property2Img,
  },
];

const Marketplace = () => {
  return (
    <PageTransition>
      <div className="marketplace-page-wrap">
        {/* Hero */}
        <section className="page-section marketplace-page page-hero-wrapper">
          <div
            className="page-hero-bg"
            style={{
              backgroundImage:
                'linear-gradient(rgba(5,42,53,0.8), rgba(6,58,74,0.75)), url(' + marketplaceBg + ')',
            }}
          />
          <div className="container page-hero-content">
            <h1>The Exchange</h1>
            <p className="page-hero-lead">
              A curated, invitation-only marketplace where verified homes are traded with discretion,
              transparency, and architectural integrity.
            </p>
          </div>
        </section>

        {/* Filter bar + grid */}
        <section className="marketplace-body">
          <div className="container">
            {/* Filter Bar */}
            <div className="marketplace-filter-bar">
              <div className="filter-field">
                <label htmlFor="location">Location</label>
                <input
                  id="location"
                  type="text"
                  placeholder="New Cairo, North Coast..."
                />
              </div>
              <div className="filter-field">
                <label htmlFor="price">Price Range</label>
                <select id="price" defaultValue="">
                  <option value="" disabled>
                    Select range
                  </option>
                  <option value="0-5m">Up to EGP 5M</option>
                  <option value="5-10m">EGP 5M – 10M</option>
                  <option value="10m+">EGP 10M+</option>
                </select>
              </div>
              <div className="filter-field">
                <label htmlFor="type">Property Type</label>
                <select id="type" defaultValue="">
                  <option value="" disabled>
                    Select type
                  </option>
                  <option value="apartment">Apartment</option>
                  <option value="villa">Villa</option>
                  <option value="penthouse">Penthouse</option>
                </select>
              </div>
              <button className="filter-cta">Refine Search</button>
            </div>

            {/* Property Grid */}
            <div className="marketplace-grid">
              {properties.map((property) => (
                <motion.article
                  key={property.id}
                  className="marketplace-card"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
                >
                  <div className="marketplace-card-media">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="marketplace-card-image"
                      loading="lazy"
                    />
                    <div className="marketplace-price-badge casko-font">
                      {property.price}
                    </div>
                  </div>
                  <div className="marketplace-card-body">
                    <h2 className="marketplace-title casko-font">
                      {property.title}
                    </h2>
                    <p className="marketplace-location">{property.location}</p>
                    <div className="marketplace-details-row">
                      <div className="detail-pill">
                        <BedDouble size={16} />
                        <span>{property.beds} Bedrooms</span>
                      </div>
                      <div className="detail-pill">
                        <Bath size={16} />
                        <span>{property.baths} Bathrooms</span>
                      </div>
                      <div className="detail-pill">
                        <Maximize2 size={16} />
                        <span>{property.area} m²</span>
                      </div>
                    </div>
                    <Link
                      to={`/properties/${property.id}`}
                      className="marketplace-cta-btn"
                    >
                      View Details
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* List Unit CTA */}
            <div className="marketplace-list-unit">
              <div className="list-unit-copy">
                <h2 className="casko-font">List Your Unit with Red Consistency</h2>
                <p>
                  Share your residence with our private network of qualified buyers and let our advisors
                  curate every detail of the transaction.
                </p>
              </div>
              <Link to="/list-unit" className="filter-cta list-unit-btn">
                List a Unit
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Marketplace;