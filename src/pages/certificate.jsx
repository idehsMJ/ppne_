import React, { useState, useRef, useEffect } from 'react';
import FBR from '../assets/certificates/fbr.jpg';
import Licence from '../assets/certificates/licence.jpg';
import Member from '../assets/certificates/membership.jpg';
import Pec from '../assets/certificates/pec.jpg';

const Certificate = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const imageRef = useRef(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (imageRef.current && !imageRef.current.contains(event.target)) {
        closeImage();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="section">
        <div className="nav-space bg-white py-8 px-4">
          <div className="certificate-container text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2 clientele-title">Our Certificates</h2>
            <h2 className="text-gray-600 clientele-subtitle">We take pride in our certifications and memberships</h2>
          </div>

          <div className={`full-certificate ${selectedImage ? 'show' : ''}`}>
            {selectedImage && (
              <div className="relative" ref={imageRef}>
                <img src={selectedImage} alt="Full-size certificate" className="w-full h-auto object-cover" />

              </div>
            )}
          </div>

          <div className="certificates-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="certificate-item shadow-md rounded-lg overflow-hidden cursor-pointer transition-transform transform hover:scale-105" onClick={() => handleImageClick(FBR)}>
              <h3 className="text-xl font-semibold text-gray-700 p-4">FBR Certificate</h3>
              <div className="image-container">
                <img src={FBR} alt="FBR Certificate" className="w-full h-auto object-cover" />
              </div>
            </div>

            <div className="certificate-item shadow-md rounded-lg overflow-hidden cursor-pointer transition-transform transform hover:scale-105" onClick={() => handleImageClick(Licence)}>
              <h3 className="text-xl font-semibold text-gray-700 p-4">License to E-Contractor</h3>
              <div className="image-container">
                <img src={Licence} alt="License to E-Contractor" className="w-full h-auto object-cover" />
              </div>
            </div>

            <div className="certificate-item shadow-md rounded-lg overflow-hidden cursor-pointer transition-transform transform hover:scale-105" onClick={() => handleImageClick(Member)}>
              <h3 className="text-xl font-semibold text-gray-700 p-4">Membership Certificate</h3>
              <div className="image-container">
                <img src={Member} alt="Membership Certificate" className="w-full h-auto object-cover" />
              </div>
            </div>

            <div className="certificate-item shadow-md rounded-lg overflow-hidden cursor-pointer transition-transform transform hover:scale-105" onClick={() => handleImageClick(Pec)}>
              <h3 className="text-xl font-semibold text-gray-700 p-4">PEC Liscense</h3>
              <div className="image-container">
                <img src={Pec} alt="PEC Liscense" className="w-full h-auto object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Certificate;
