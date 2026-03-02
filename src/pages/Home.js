import React from 'react';
import PageTransition from '../components/PageTransition';
import HeroScreen from '../components/HeroScreen';
import WhyChooseUs from '../components/WhyChooseUs';
import WhatWeDo from '../components/WhatWeDo';
import PropertyListings from '../components/PropertyListings';
import LocationHighlights from '../components/LocationHighlights';
import Floorplans from '../components/Floorplans';
import GallerySlider from '../components/GallerySlider';
import FacilitiesScreen from '../components/FacilitiesScreen';
import ScheduleTour from '../components/ScheduleTour';
import HomeSection from '../components/HomeSection';
import './Home.css';

const Home = () => {
  return (
    <PageTransition>
      <>
        <HeroScreen />
        <HomeSection className="home-section-wrap home-section-wrap-tight-bottom">
          <WhyChooseUs />
        </HomeSection>
        <HomeSection className="home-section-wrap home-section-wrap-tight-top home-section-wrap-tight-bottom">
          <WhatWeDo />
        </HomeSection>
        <HomeSection className="home-section-wrap home-section-wrap-tight-top home-section-wrap-tight-bottom">
          <PropertyListings />
        </HomeSection>
        <HomeSection className="home-section-wrap home-section-wrap-tight-top">
          <LocationHighlights />
        </HomeSection>
        <HomeSection className="home-section-wrap">
          <Floorplans />
        </HomeSection>
        <HomeSection className="home-section-wrap">
          <GallerySlider />
        </HomeSection>
        <HomeSection className="home-section-wrap">
          <FacilitiesScreen />
        </HomeSection>
        <HomeSection className="home-section-wrap">
          <ScheduleTour />
        </HomeSection>
      </>
    </PageTransition>
  );
};

export default Home;
