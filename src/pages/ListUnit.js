import React from 'react';
import PageTransition from '../components/PageTransition';
import ListUnitForm from '../components/ListUnitForm';

const ListUnit = () => {
  return (
    <PageTransition>
      <div className="page-section" style={{ background: 'radial-gradient(circle at 0% 0%, #0d3c4b 0%, #021217 55%, #01090d 100%)' }}>
        <div className="container">
          <div style={{ marginBottom: '28px', textAlign: 'center', color: '#EBF4F6' }}>
            <h1 className="casko-font" style={{ fontSize: '1.6rem', letterSpacing: '0.22rem' }}>
              List Your Unit with Red Consistency
            </h1>
            <p style={{ maxWidth: '640px', margin: '0 auto', opacity: 0.9 }}>
              Share your residence with our private network of qualified buyers. Our advisors will curate every
              detail of your listing, from positioning to presentation.
            </p>
          </div>
          <ListUnitForm />
        </div>
      </div>
    </PageTransition>
  );
};

export default ListUnit;

