import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa'; // Import LinkedIn icon

const Contact = () => {
    return (
        <div className='nav-top'>
            <div className='contact-headerImg'>
                <div className='contact-heading'>
                    <h1>Get in touch</h1>
                    <h3>Want to get in touch? We'd love to hear from you. Here's how you can reach us.</h3>
                </div>

                <div className='header-img-parent'>
                    <div className='header-img'></div>
                </div>
            </div>

            <div className='after-header'>
                <div className='phone contact-box'>
                    <div className='phone-icon icon' style={{color:'#c23b22'}}>
                        <FaPhoneAlt size={50} />
                    </div>
                    <div className='phone-info info'>
                        <h3>Talk to Us</h3>
                        <h5>Interested in PP&E? Just pick up the phone to chat with a member of our team.</h5>
                        <br />
                        <h5 style={{color:'#c23b22'}}>021-34313678</h5>
                        <h5 style={{color:'#c23b22'}}>021-34537941</h5>
                        <h5 style={{color:'#c23b22'}}>021-34194098</h5>
                    </div>
                </div>

                <div className='email contact-box' >
                    <div className='email-icon icon' style={{color:'#c23b22'}}>
                        <FaEnvelope size={50} />
                    </div>
                    <div className='email-info info'>
                        <h3>Contact Support</h3>
                        <h5>Sometimes you need help from a real professional. Contact a PP&E support rep. <br />We’re here for you.</h5>
                        <h5 style={{color:'#c23b22'}}>info@ppne.pk</h5>
                        <h5 style={{color:'#c23b22'}} >power_professionals@yahoo.com</h5>
                    </div>
                </div>
            </div>

            {/* Heading for office locations with icon */}
            <div className='office-heading' style={{color:'#c23b22'}}>
                <FaMapMarkerAlt size={30} />
                <h2>Our Office Locations</h2>
            </div>

            {/* First map div */}
            <div className='map-div-parent'>
                <div className='map-div'>
                    <div className='map-container'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7239.979538909893!2d67.053968!3d24.864199!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e858bec6c9b%3A0x4924d4decd3c630c!2sPOWER%20PROFESSIONALS%20%26%20ENGINEERS!5e0!3m2!1sen!2sus!4v1725971820265!5m2!1sen!2sus"
                            width="600"
                            height="450"
                            style={{border:"0"}}
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <div>
                        <div className='office-locations'>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                            
                            <br /><br /><br />
                            <p><strong>Karachi Office:</strong> 94-A, Block-A, Sindhi Muslim Cooperative Housing Society, Karachi</p>
                            
                            <p><strong>Lahore Office:</strong> Office No. 15, 2nd Floor, Empress Tower 46-Empress Road, Lahore</p>
                            
                            <p><strong>Islamabad Office:</strong>Khalid Khan Plaza Gorla, E11, near Anjum Aqeel palace parking, Islamabad</p>
                            <br />
                        </div>
                    </div>
                </div>
            </div>


            {/* <div className='linkedin-profile'>
                <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className='linkedin-link'>
                    <FaLinkedin size={40} />
                    <span>Connect with us on LinkedIn</span>
                </a>
            </div> */}
        </div>
    );
};

export default Contact;
