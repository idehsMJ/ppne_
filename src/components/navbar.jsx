import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/ppne logo animation.gif';

const Navbar = () => {
  return (
    <div className='nav-div'>
      <nav className="navbar navbar-expand-lg" style={{ paddingLeft: '48px', paddingRight: '48px', position:'fixed' }}>

        <div className="container-fluid flex items-center justify-between">
          <div className="flex items-center">
            <a href="/"><img src={Logo} alt="ppne-logo" className="d-inline-block align-top" style={{ height: '50px' }} /></a>
            <a className="navbar-brand ms-3 " href="/" style={{color:'#c23b22'}}>PP&E</a>
          </div>
          <button className="navbar-toggler" style={{backgroundColor:'#f8f4f0 '}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/clientele">Clientele & Architects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/vendors">Vendors & Partners</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/certificate">Certificates</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
