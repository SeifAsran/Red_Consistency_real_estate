import React, { useEffect, useRef } from 'react';
import './FacilitiesScreen.css';
import HomePlans1 from '../Assets/Images/Home.plans (1).jpg';
import HomePlans2 from '../Assets/Images/Home.plans (2).jpg';
import HomePlans3 from '../Assets/Images/Home.plans (3).jpg';
import HomePlans4 from '../Assets/Images/Home.plans (4).jpg';

const images = [HomePlans1, HomePlans2, HomePlans3, HomePlans4];

const FacilitiesScreen = () => {
  const facilities = [
    {
      title: 'Smart Home',
      desc: 'Experience seamless daily comfort with intuitive smart features that connect your home effortlessly and enhance modern living.',
    },
    {
      title: 'Solar Powered',
      desc: 'Generate clean renewable energy with efficient solar systems designed to lower utility costs while supporting a greener lifestyle.',
    },
    {
      title: 'Swimming Pool',
      desc: 'Relax in a beautifully designed private pool that offers refreshing water, peaceful ambiance, and the perfect space for leisure at home.',
    },
    {
      title: 'Home Security',
      desc: 'Protect your home with advanced security features that offer continuous monitoring, smart alerts, and peace of mind every day.',
    },
  ];

  const rowsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('facility-reveal-active');
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
    <section className="facilities-section py-5">
      <div className="container">
        <h2 className="home-section-title display-5 fw-bold mb-4">Facilities for Lifestyle</h2>
        <div className="d-flex justify-content-end mb-5">
          <button className="btn view-more-btn">View More</button>
        </div>

        {facilities.map((item, idx) => (
          <div
            key={idx}
            ref={(el) => {
              rowsRef.current[idx] = el;
            }}
            className="row g-4 align-items-center mb-4 facility-row"
          >
            {/* Left: Text */}
            <div className="col-lg-6">
              <div className="facility-text-block">
                <h3 className="fw-bold h4 mb-3">{item.title}</h3>
                <p className="text-muted small mb-0">{item.desc}</p>
              </div>
            </div>

            {/* Right: Image */}
            <div className="col-lg-6">
              <div className="facility-img-wrap">
                <img
                  src={images[idx % images.length]}
                  alt={item.title}
                  className="facility-img"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FacilitiesScreen;

