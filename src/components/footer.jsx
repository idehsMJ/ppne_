import React from 'react';
import { BoxIconElement } from 'boxicons';
import { BiColor } from 'react-icons/bi';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <h4 className="footer-heading">Address</h4>
              <ul className="list-unstyled">
                <li><strong>Karachi Office:</strong> <br /> <i style={{color:'#a8a4a1'}}>94-A, Block-A, Sindhi Muslim Cooperative Housing Society, Karachi</i></li>
                <li><strong>Lahore Office:</strong> <br /><i style={{color:'#a8a4a1'}}>Office No. 15, 2nd Floor, Empress Tower, 46-Empress Road, Lahore</i></li>
                <li><strong>Islamabad Office:</strong> <br /><i style={{color:'#a8a4a1'}}>Khalid Khan Plaza Gorla, E11,  near Anjum  Aqeel palace parking, Islamabad</i></li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6">
              <h4 className="footer-heading">Contact</h4>
              <ul className="list-unstyled">
                <li><h6 style={{color:'#f8f4f0'}}><strong>Telephone: </strong></h6><p>021-34313678 <br /><a href="/contact">More numbers...</a></p></li>
                {/* <li><strong>LinkedIn: </strong><p><a href="https://www.linkedin.com/company/power-professionals-&-engineers" target="_blank" rel="noopener noreferrer">PPNE</a></p></li> */}
                <li><h6 style={{color:'#f8f4f0'}}><strong>Email: </strong></h6><p>info@ppne.pk</p></li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6">
              <h4 className="footer-heading">Socials</h4>
              <ul className="list-social">
                <li className='social-item'><a href="https://www.linkedin.com/company/power-professionals-&-engineers" target='_blank'><box-icon className="social-logo" type='logo' name='linkedin-square'></box-icon></a></li>
                <li className='social-item'><a href="https://www.facebook.com/PPNE.pk" target='_blank'><box-icon name='facebook' type='logo' ></box-icon></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <hr />
          <p className="text-center text-secondary">PP&E - PowerProfessionals & Engineers and Consultants (PVT.) Ltd. 2024.</p>
          <p className="text-center text-white">All rights reserved</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
