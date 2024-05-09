import React, { useState, useEffect } from 'react';
import { NavDropdown, Container, Card, Button, Row, Col } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './About.css';

function About() {

  return (
    <div className="header_f Homeback" >

        <h1 style={{ marginTop: '100px', fontFamily: "'Allura', cursive"}}>About Us</h1>
        <pre><h3> 
        {`
        Welcome to L.U.X.E: Luxury Emporium, 
        where passion meets precision, and innovation is our driving force. 
        Get to know the visionaries behind this exhilarating venture:
        `}
        </h3></pre>
        <div className="Wrapper" >
              <h1>Our Team</h1>
              <div className="team">
                <div className="team_member">
                  <div className="team_img">
                    <img src="Hnna.jpg" alt="Team_image"/>
                  </div>
                  <h3>HANNAH MAE BARAN MANAYA </h3>
                  <p class="role">Project Manager</p>
                  <p>The astute Project Manager steering our project with an eagle eye for detail and a commitment to excellence, and she ensures that L.U.X.E stands at the intersection of technology and luxury, redefining the way you explore and acquire high-end sports cars.</p>
                </div>
                <div className="team_member">
                  <div className="team_img">
                    <img src="jeo.jpg" alt="Team_image"/>
                  </div>
                  <h3>JEO JUVENTUD</h3>
                  <p class="role">Director</p>
                  <p>The visionary Director who guides L.U.X.E with a commitment to excellence. With a deep appreciation for the artistry of automobiles, he shapes the platform into a haven where the finest vehicles seamlessly blend with cutting-edge to technology, offering you an unmatched experience.</p></div>
                <div className="team_member">
                  <div className="team_img">
                    <img src="me1 .png" alt="Team_image"/>
                  </div>
                  <h3>BRIX JAY A. NUCOS</h3>
                  <p class="role">DEVELOPER</p>
                  <p>Behind every line of code, there's a developer who brings the vision to life. Meet our coding virtuoso, who infuses the system with functionality and elegance and ensures that your journey through L.U.X.E is as smooth as the sleek sports cars it showcases.</p>
                </div>
              </div>
              <pre><h3 style={{textAlign: 'center'}}> 
                {`   
  Together, we are the driving force propelling L.U.X.E towards greatness. 
  Join us on this exhilarating journey as we redefine luxury 
  and comfort in the world of high-performance automobiles.

                `}
        </h3></pre><h3>
              </h3>

    <div style={{ marginTop: '100px',marginRight: '600px', fontFamily: "'Allura', cursive"}}>
      <h2 style={{fontFamily: "'Allura', cursive"}}> MISSION</h2>
      <pre><h5> 
        {`
        To create a seamless platform, L.U.X.E, 
        where the fusion of art and machine meets luxury and comfort.
        `}
        </h5></pre>
      </div>
      <div style={{ marginTop: '50px',marginLeft: '600px', fontFamily: "'Allura', cursive"}}>
      <h2 style={{fontFamily: "'Allura', cursive"}}> VISION</h2>
      <pre><h5> 
        {`
        To be the premier destination for enthusiasts seeking high-end sports cars, 
        providing a user-friendly experience and exceptional customer service.
        `}
        </h5></pre>
      </div>
      <div style={{ marginTop: '100px',marginRight: '300px', fontFamily: "'Allura', cursive"}}>
      <h2 style={{fontFamily: "'Allura', cursive"}}> PURPOSE</h2>
      <pre><h5> 
        {`
        L.U.X.E aims to serve as a reliable distributor and middleman for renowned car companies, 
        offering a curated selection of luxury sports cars and ensuring a secure and enjoyable shopping experience for our users.
        `}
        </h5></pre>
      </div>

            </div>	
        
    </div>
  );
}

export default About;
