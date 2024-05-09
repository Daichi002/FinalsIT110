import React, { useState, useEffect } from 'react';
import { Form, Button, NavDropdown, Navbar, Nav, Container, Modal, Col, InputGroup, Row } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logoicon from './Component/LUXE.png';
import './Home.css';
import '@fortawesome/free-solid-svg-icons';
//import "./Userdetail"; 

  




function Home() {                                  
    
    return (
        <div className='Homeback'>              
		
        <header className="header">
            <div className="container header-container">
              
                <div className="header-left">
                    <h1>L.U.X.E</h1>
                    <h3> LUXURY EMPORIUM </h3>
                    <p>
                      A Place Where Art Find Machine <br/> Luxury and Comfort In One
                    </p>
                    <a href="Shop" className="btn">Explore Cars</a>
                </div>

                <div class="header-right">
                    <div class="sq-box">
                        <img src="/BMW/Coupe/m8 nobg.png" alt=" car"/>
                    </div>
                </div>
            </div>
            <div class="sq-box2"></div>
        </header>
    </div>
    );
    
};

export default Home;
