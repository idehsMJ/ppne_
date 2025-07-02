import React from 'react';
import clientImages from '../assets/Clients'; // Adjust the path if necessary
import architectImages from '../assets/consultant-architects';

const Clientele = () => {
  return (
    <div className='nav-space'>
      <h1 className="clientele-title" style={{ color: '#941d1f' , marginBottom: '0px' }}>Clientele</h1>

      <h5 className="clientele-subtitle" style={{ color: '#EA484C', marginBottom: '0px' }}>

        Over our decades in the industry,
        </h5> 
        <h5  style={{ color: '#EA484C', marginBottom: '30px'  , fontSize:'1.25rem',fontWeight: '400' }}>we have had the honor to work with some of the most prestigious companies.
        </h5>
      
      <div className="client-logos">
        {clientImages.map((image, index) => (
          <div key={index} className="client-logo-wrapper">
            <img src={image} alt={`Client ${index + 1}`} className="client-logo" />
          </div>
        ))}
      </div>
      
      <h2 className="clientele-title" style={{ color: '#941d1f' , marginBottom: '0px' }}>Our Esteemed Consultants <br /> and Architects</h2>
      <hr />
      
      <div className="client-logos">
        {architectImages.map((image, index) => (
          <div key={index} className="client-logo-wrapper">
            <img src={image} alt={`Architect ${index + 1}`} className="architect-logo" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clientele;
