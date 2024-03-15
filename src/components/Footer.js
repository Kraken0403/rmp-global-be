import React from 'react'
import Container from './Container'
import CustomButton from './CustomButton'
import {Row, Col} from 'react-bootstrap'
import './Footer.scss'
import { Link } from 'react-router-dom'
import logo from '../assets/rmp-logo.png'

function Footer() {
  return (
    <div className='footer-custom'>
        <Container>
            <div className="footer-main">
                <div className="footer-content">
                    <h1>Try <span>RMP</span> Global</h1>
                    <p>Schedule a free consultation and demo 
                        with our experts
                    </p>
                </div>
                <Link to="/contact-us">
                    <CustomButton text="Contact Us" bg='#020E12' textColor="#f2f2f2"/>
                </Link>
            </div>

                <div className="footer-links">
                    <Row>
                        <Col md={4}>
                            <div className="logo-footer">
                                <img src={logo} alt="" />
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className="footer-links-menu">
                                <h4>Support</h4>
                                <ul>
                                    <li>
                                        Terms and Conditions
                                    </li>
                                    <li>
                                        Privacy Policy
                                    </li>
                                   
                                </ul>
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className="footer-links-menu">
                                <h4>Quick Links</h4>
                                <ul>
                                    <li>
                                        <Link to="/" >
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/about-us">
                                            About Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/contact-us">
                                            Contact Us
                                        </Link>
                                    </li>
                                    
                                </ul>
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className="footer-links-menu">
                                <h4>Contact</h4>
                                <ul>
                                    <li>
                                        +91-9512453532
                                    </li>
                                    <li>
                                        info@rmpglobal.io
                                    </li>
                                    {/* <li>
                                        Service 3
                                    </li>
                                    <li>
                                        Service 4
                                    </li> */}
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </div>
        </Container>
    </div>
  )
}

export default Footer