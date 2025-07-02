import React from 'react';
import missionImage from '../assets/engineer.jpg'; 
import servicesImage from '../assets/indus.jpeg';
import valuesImage from '../assets/siut.jpg';

const About = () => {
  return (
    <>
    <div className="about-container p-4">
      <h1 className='about-heading'>Who We Are...</h1>
      <p className='about-intro'>
        Premier electrical engineers & contractors with a proven track record of excellence, reliability, and 
        innovation. Delivering exceptional customized service to our valued clients all over Pakistan and abroad.
      </p>
      <div className="about-section">
        <div className="section-image">
          <img src={missionImage} alt="Mission" className="section-img" />
        </div>
        <div className="section-content">
          <h2 className='section-title'>Our Mission</h2>
          <p>
            At PowerProfessionals & Egineers our mission is to provide outstanding, customized electrical solutions that meet the diverse needs of our clients. 
            We are dedicated to ensuring the highest standards of safety, efficiency, and quality in every project we undertake. 
            Whether it’s a residential, commercial, or industrial project, our goal is to exceed client expectations through 
            meticulous planning, innovative technology, and unparalleled expertise.
          </p>
        </div>
      </div>
      <div className="about-section">
        <div className="section-content">
          <h2 className='section-title'>Our Services</h2>
          <ul className='service-list'>
            <li><strong>Electrical Engineering:</strong> From design and consultation to implementation and maintenance, we offer a full spectrum of electrical engineering services tailored to your specific requirements.</li>
            <li><strong>Contracting:</strong> Our contracting services cover all aspects of electrical installation, repair, and upgrades, ensuring that projects are completed on time and within budget.</li>
            <li><strong>Custom Solutions:</strong> We specialize in creating bespoke electrical systems that address unique challenges and meet the precise needs of our clients.</li>
            <li><strong>Maintenance & Support:</strong> Our team provides comprehensive maintenance and support services to keep your systems running smoothly and efficiently.</li>
          </ul>
        </div>
        <div className="section-image">
          <img src={servicesImage} alt="Services" className="section-img" />
        </div>
      </div>
      <div className="about-section">
        <div className="section-image">
          <img src={valuesImage} alt="Values" className="section-img" />
        </div>
        <div className="section-content">
          <h2 className='section-title'>Our Values</h2>
          <ul className='values-list'>
            <li><strong>Integrity:</strong> We conduct our business with honesty and transparency, building trust with our clients and partners.</li>
            <li><strong>Excellence:</strong> We strive for the highest quality in every aspect of our work, from the initial consultation to the final execution.</li>
            <li><strong>Innovation:</strong> We embrace new ideas and technologies to provide the most effective and forward-thinking solutions.</li>
            <li><strong>Reliability:</strong> Our clients can count on us to deliver on our promises, ensuring that projects are completed efficiently and effectively.</li>
          </ul>
        </div>
      </div>
    </div>
    </>
  );
}

export default About;
