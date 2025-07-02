import React from 'react';
import vendorImages from '../assets/partners-venders'; 
const Vendors = () => {
  return (
    <div className='nav-space'>
      <h1 className="clientele-title" style={{ color: '#941d1f' , marginBottom: '0px' }}>Vendors</h1>
      <h5 className="clientele-subtitle" style={{ color: '#EA484C', marginBottom: '0px' }}>Our Trusted Partners</h5>
      <hr />
      <div className="client-logos">
        {vendorImages.map((image, index) => (
          <div key={index} className="client-logo-wrapper">
            <img src={image} alt={`Vendor ${index + 1}`} className="vendor-logo" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vendors;
