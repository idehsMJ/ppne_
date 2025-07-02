import React from 'react'
import Elv from '../assets/services/elv.jpg'
import Lv from '../assets/services/lv.jpg'
import Mv from '../assets/services/mv.jpg'


const Services = () => {
    return (
        <>
            <div className='nav-top'>
                <div className='Our-service'>
                    <header className='intro-header'>
                        <h1 className='service-title'>Our Services</h1>
                        <div className='service-description'>
                            <p>When dealing with Extra Low Voltage, Low Voltage, or Medium Voltage systems, surprises should be left out of the equation. Our structured approach ensures 
                                every detail is planned out and executed smoothly, minimizing disruptions and keeping your project on track.</p>
                        </div>
                        <div className='contact-button-container'>
                            <a href="/contact" className='contact-button'>Contact Us!</a>
                        </div>
                    </header>
                </div>
                <section className='intro-section'>
                    <h1 className='section-head'>What to Expect</h1>
                    <div className='section-subhead'>
                        {/* 1 */}
                        <div className='feature-item-wrapper'>
                            <div className='behind'></div>
                            <div className='feature-item'>
                                <h3>Comprehensive Solutions:</h3>
                                <p>From fire alarm systems to complex power cabling, we provide a wide range of electrical installation services tailored to meet your specific needs.</p>
                            </div>
                        </div>
                        {/* 2 */}
                        <div className='feature-item-wrapper'>
                            <div className='behind'></div>
                            <div className='feature-item'>
                                <h3>High-Quality Workmanship:</h3>
                                <p>Our team of skilled professionals ensures that every installation is completed with precision and adherence to international standards.</p>
                            </div>
                        </div>
                        {/* 3 */}
                        <div className='feature-item-wrapper'>
                            <div className='behind'></div>
                            <div className='feature-item'>
                                <h3>Timely Project Completion:</h3>
                                <p>We understand the importance of deadlines and work efficiently to deliver on time, without compromising on quality.</p>
                            </div>
                        </div>
                        {/* 4 */}
                        <div className='feature-item-wrapper'>
                            <div className='behind'></div>
                            <div className='feature-item'>
                                <h3>Safety & Compliance:</h3>
                                <p>We prioritize safety in all our installations, adhering to strict industry standards to ensure a secure environment.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section">
                    <div className="about-container p-4">
                        <h1 className='about-heading'>What Do We Offer...</h1>
                        <p className='section-text'>
                            Premier electrical engineers & contractors with a proven track record of excellence, reliability, and
                            innovation. Delivering exceptional customized service to our valued clients all over Pakistan and abroad.
                        </p>
                        <div className="about-section">
                            <div className="section-image">
                                <img src={Elv} alt="Mission" className="section-img" />
                            </div>
                            <div className="section-content">
                                <h2 className='section-title'>Extra Low Voltage</h2>
                                <p>
                                    <ul>
                                        <li>Fire Alarm (FA) System</li>
                                        <li>IPTV System</li>
                                        <li>Access Control</li>
                                        <li>Video Surveillance</li>
                                        <li>Security Control System</li>
                                        <li>Telephone and Data System</li>
                                        <li>Active System (e.g., Network Switches, Routers)</li>
                                        <li>Passive System (e.g., Structured Cabling)</li>
                                        <li>SMATV (Satellite Master Antenna Television) System</li>
                                        <li>AV (Audio-Visual) System</li>
                                        <li>Nurse Calling System</li>
                                        <li>Public Address System</li>
                                        <li>Building Management System</li>
                                        <li>Lighting Control System</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                        <div className="about-section">
                            <div className="section-content">
                                <h2 className='section-title'>Low Voltage</h2>
                                <p>
                                    <ul>
                                        <li>Distribution Boards (DB)</li>
                                        <li>ATS (Automatic Transfer Switch)</li>
                                        <li>VFD Panels (Variable Frequency Drive)</li>
                                        <li>Isolators</li>
                                        <li>Light Points</li>
                                        <li>Light Fittings</li>
                                        <li>Wiring Devices</li>
                                        <li>Floor Boxes</li>
                                        <li>Power Points</li>
                                        <li>LV Cables & Wires</li>
                                        <li>Cable Glands & Lugs</li>
                                        <li>Cable Trays and Accessories</li>
                                        <li>Earthing System</li>
                                        <li>Lightning Protection System</li>
                                        <li>UPS (Uninterruptible Power Supply)</li>
                                        <li>Central Battery System</li>
                                        <li>Lighting Control System</li>
                                    </ul>
                                </p>

                            </div>
                            <div className="section-image">
                                <img src={Lv} alt="Services" className="section-img" />
                            </div>
                        </div>
                        <div className="about-section">
                            <div className="section-image">
                                <img src={Mv} alt="Values" className="section-img" />
                            </div>
                            <div className="section-content">
                                <h2 className='section-title'>Medium Voltage</h2>
                                <p>
                                    <ul>
                                        <li>Generators</li>
                                        <li>M.V Switchgear</li>
                                        <li>UDS Panels</li>
                                        <li>Transformers</li>
                                        <li>MLTP (Main Low Tension Panel)</li>
                                        <li>MSB (Main Switchboard)</li>
                                        <li>MCC (Motor Control Centers)</li>
                                        <li>Genset Synchronization Panels</li>
                                        <li>Chiller Panels</li>
                                        <li>Bus Duct</li>
                                        <li>MV Cables & Wires</li>
                                        <li>KE Panel</li>
                                    </ul>
                                </p>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Services;

// const Services = () => {
//     return (
//         <>
//             <div className='services nav-top'>
//                 <img src={Sample} alt="services-picture" style={{ height: '500px', width: '100%' }} />
//                 <div className='parent nav-space'>
//                     <div className='heading'>
//                     <h3>Extra Low Voltage</h3>
//                     </div>
//                     <div className='d-flex'>
//                         <div className='img-div'>
//                         <img src={Elv} alt="elv-picture" />
//                         </div>
//                         <div className='info-div'>
//                         <p>
//                             <ul>
//                                 <li>Fire Alarm (FA) System</li>
//                                 <li>IPTV System</li>
//                                 <li>Access Control</li>
//                                 <li>Video Surveillance</li>
//                                 <li>Security Control System</li>
//                                 <li>Telephone and Data System</li>
//                                 <li>Active System (e.g., Network Switches, Routers)</li>
//                                 <li>Passive System (e.g., Structured Cabling)</li>
//                                 <li>SMATV (Satellite Master Antenna Television) System</li>
//                                 <li>AV (Audio-Visual) System</li>
//                                 <li>Nurse Calling System</li>
//                                 <li>Public Address System</li>
//                                 <li>Building Management System</li>
//                                 <li>Lighting Control System</li>
//                             </ul>
//                         </p>
//                         </div>
//                     </div>
//                 </div>
//                 <div>
//                     <div className='heading'>
//                     <h3>Low Voltage</h3>
//                     </div>
//                     <div className='d-flex'>
//                         <div className='info-div'>
//                         <p>
//                             <ul>
//                                 <li>Distribution Boards (DB)</li>
//                                 <li>ATS (Automatic Transfer Switch)</li>
//                                 <li>VFD Panels (Variable Frequency Drive)</li>
//                                 <li>Isolators</li>
//                                 <li>Light Points</li>
//                                 <li>Light Fittings</li>
//                                 <li>Wiring Devices</li>
//                                 <li>Floor Boxes</li>
//                                 <li>Power Points</li>
//                                 <li>LV Cables & Wires</li>
//                                 <li>Cable Glands & Lugs</li>
//                                 <li>Cable Trays and Accessories</li>
//                                 <li>Earthing System</li>
//                                 <li>Lightning Protection System</li>
//                                 <li>UPS (Uninterruptible Power Supply)</li>
//                                 <li>Central Battery System</li>
//                                 <li>Lighting Control System</li>
//                             </ul>
//                         </p>
//                         </div>

//                         <div className='img-div'>
//                         <img src={Lv} alt="lv-picture" />
//                         </div>
//                     </div>
//                 </div>
//                 <div>
//                     <div className='heading'>
//                     <h3>Medium Voltage</h3>
//                     </div>
//                     <div className='d-flex'>
//                         <div className='img-div'>
//                         <img src={Mv} alt="mv-picture" />
//                         </div>

//                         <div className='info-div'>
//                         <p>
//                             <ul>
//                             <li>Generators</li>
//                             <li>M.V Switchgear</li>
//                             <li>UDS Panels</li>
//                             <li>Transformers</li>
//                             <li>MLTP (Main Low Tension Panel)</li>
//                             <li>MSB (Main Switchboard)</li>
//                             <li>MCC (Motor Control Centers)</li>
//                             <li>Genset Synchronization Panels</li>
//                             <li>Chiller Panels</li>
//                             <li>Bus Duct</li>
//                             <li>MV Cables & Wires</li>
//                             <li>KE Panel</li>
//                         </ul>
//                         </p>
//                         </div>
//                     </div>
//                 </div>
//                 {/* <div>
//                     <h3>Extra Low Voltage</h3>
//                     <div class="row align-items-center">
//                         <div class="col-md-4">
//                             <img src={Logo} alt="elv-picture" class="img-fluid" />
//                         </div>
//                         <div class="col-md-8">
//                             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima maiores consectetur numquam id officia itaque sed autem nemo molestiae recusandae, dignissimos, ad corporis neque quis a veniam facilis odit possimus!</p>
//                         </div>
//                     </div>
//                 </div> */}

//             </div>
//         </>
//     )
// }

// export default Services
