import React, {useEffect, useRef, useState} from 'react'
import Container from './Container'
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import gsap from 'gsap'
import logo from '../assets/logo-2.png'
import './Header.scss'
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';

function Header(props) {
    const [menuOpen, setMenuOpen] = useState(true);

    const [isHeaderFixed, setIsHeaderFixed] = useState(false);

    const menuMobile = useRef();
    const header = useRef();
    const servicesItem = useRef();
    const megaMenu = useRef(null);
    const quoteRef = useRef();
    const quoteOverlay = useRef();
    // const closeQuote = useRef();
    
    
    const handleMegaMenu = () => {

        setMenuOpen(!menuOpen);

        if(menuOpen) {
            gsap.to(megaMenu.current, {
                height: 'auto',
                opacity: 1,
                duration: 0.2
            })

            gsap.to(header.current, {
                backgroundColor: '#020E12'
            })
        }

        if(!menuOpen) {
            gsap.to(megaMenu.current, {
                height: '0%',
                opacity: 0,
                duration: 0.2
            })
        }
    }

    const handleMenuToggle = () => {
        gsap.to(menuMobile.current, {
            left: '0px'
        })
      };

      const handleClose = () => {
        gsap.to(menuMobile.current, {
            left: '-100%'
        })
      };


     const openQuote = () => {
        gsap.to(quoteRef.current, {
            right: 0
        })

        gsap.to(quoteOverlay.current, {
            display: 'block'
        })
     }

     const closeQuote =() => {

        gsap.to(quoteOverlay.current, {
            display: 'none'
        })

        gsap.to(quoteRef.current, {
            right: -quoteRef.current.offsetWidth,
        })
        
     }

     useEffect(() => {
        quoteOverlay.current.addEventListener('click', ()=> {
            closeQuote();
        })

        document.querySelector(".quote-form-main").addEventListener("submit", handleSubmit);

        }, [])

        const handleSubmit = (event) => {
            event.preventDefault();

            const myForm = event.target;
            const formData = new FormData(myForm);
            
            fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData).toString(),
            })
                .then(() => alert("Thank you for your submission"))
                .catch((error) => alert(error));
        };

    
  return (
    <div className='header' ref={header}>
            
            <div className="quote-overlay" ref={quoteOverlay}></div>
            <div className="quote-main" ref={quoteRef}>
                <div className="quote-form">
                    <h2>Get a Quote</h2>

                    <div className="quote-close-btn" onClick={closeQuote}>
                        <CloseIcon/>
                    </div>
                    <form name="quote-form" className='quote-form-main' method="POST" data-netlify="true">
                        <div className="input-row">
                            <label htmlFor="q-name">Name:</label>
                            <input type="text" required name='q-name' />
                        </div>

                        <div className="input-row">
                            <label htmlFor="q-email">Email:</label>
                            <input type="email" required name='q-email' />
                        </div>

                        <div className="input-row">
                            <label htmlFor="q-company">Company:</label>
                            <input type="text" required name='q-company' />
                        </div>

                        <div className="input-row">
                            <h4>Services Interested:</h4>
                            <div className="checkboxes">
                                <div>
                                    <label htmlFor="virtual-cfo">
                                        <input type="checkbox" id="virtual-cfo" name="services[]" value="Virtual CFO" />
                                        <span>Virtual CFO</span>
                                    </label>
                                </div>                            
                                <div>
                                    <label htmlFor="tax-compliance">
                                        <input type="checkbox" id="tax-compliance" name="services[]" value="Tax Compliance" />
                                        <span>Tax Compliance</span>
                                    </label>
                                </div>
                                
                                <div>
                                    <label htmlFor="bookkeeping">
                                        <input type="checkbox" id="bookkeeping" name="services[]" value="Bookkeeping" />
                                        <span>Bookkeeping</span>
                                    </label>
                                </div>
                                <div>
                                    <label htmlFor="dataanalytics">
                                        <input type="checkbox" id="dataanalytics" name="services[]" value="Data Analytics" />
                                        <span>Data Analytics</span>
                                    </label>
                                </div>
                                <div>
                                    <label htmlFor="mis">
                                        <input type="checkbox" id="mis" name="services[]" value="MIS" />
                                        <span>MIS</span>
                                    </label>
                                </div>
                                <div>
                                    <label htmlFor="financial">
                                        <input type="checkbox" id="financial" name="services[]" value="Financial" />
                                        <span>Financial</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <input type="submit" className="submit-btn" value="Submit" />
                    </form>

                </div>
            </div>
            
        <Container>
            <div className="navigation">
                <div className="logo">
                    <Link className="link-element" to="/">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="menu">
                    <div className="menu-items">
                        <ul>
                            <li>
                                <p>
                                    <a className="link-element" href="/">
                                        Home
                                    </a>
                                </p>
                            </li>

                            <li>
                                <p className='services-item link-element' onClick={handleMegaMenu}>                   
                                    Offerings
                                </p>
                            </li>
                            <li>
                                <p>
                                    <a className="link-element" href="/about-us">
                                        About Us
                                    </a>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <Link className="link-element" to="/blogs">
                                        Blogs
                                    </Link>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <Link className="link-element" to="/contact-us">
                                        Contact Us
                                    </Link>
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="menu-cta">
                        <Link onClick={openQuote} to="#">
                            <div className="contact-btn">
                                <p>Get Quote</p>
                            </div>
                        </Link>
                        

                        <div className="hamburger" onClick={handleMenuToggle}>
                            <MenuIcon/>
                        </div>
                    </div>
                </div>

                <div ref={megaMenu} className="mega-menu">
                    <Container>
                        <Row>
                            <Col md={4}>
                                <div className="mega-menu-content">
                                    <h4>
                                        Services
                                    </h4>
                                    
                                    <div className="mega-menu-item ">
                                        <Link className='link-element' to="/virtual-cfo">
                                            <p>Virtual CFO</p>
                                        </Link>
                                    </div>

                                    <div className="mega-menu-item">
                                        <Link className='link-element' to="/book-keeping">
                                            <p>Book Keeping</p>
                                        </Link>
                                    </div>

                                    <div className="mega-menu-item ">
                                        <Link className='link-element' to="/tax-compliance">
                                            <p>Tax Compliance</p>
                                        </Link>
                                    </div>

                                    <div className="mega-menu-item ">
                                        <Link className='link-element' to="/mis-services">
                                            <p>MIS</p>
                                        </Link>
                                    </div>

                                    <div className="mega-menu-item ">
                                        <Link className='link-element' to="/financial">
                                            <p>Financial</p>
                                        </Link>
                                    </div>

                                    <div className="mega-menu-item">
                                        <Link className='link-element' to="/datalabelling-service">
                                            <p>Data Labelling</p>
                                        </Link>
                                    </div>

                                    <div className="mega-menu-item ">
                                        <Link className='link-element' to="/dataanalytics-service">
                                            <p>Data Analytics</p>
                                        </Link>
                                    </div>

                                    
                                </div>
                            </Col>

                            <Col md={4}>
                                <div className="mega-menu-content">
                                    <h4>
                                        Outsourcing
                                    </h4>
                                    
                                    <div className="mega-menu-item">
                                        <Link className='link-element' to="/tax-compliance">
                                            <p>Tax Compliance</p>
                                        </Link>
                                    </div>

                                    <div className="mega-menu-item">
                                        <Link className='link-element' to="/book-keeping">
                                            <p>Book Keeping</p>
                                        </Link>
                                    </div>

                
                                    <div className="mega-menu-item">
                                        <Link className='link-element' to="/mis-services">
                                            <p>MIS</p>
                                        </Link>

                                        <Link className='link-element' to="/financial">
                                            <p>Financial</p>
                                        </Link>
                                    </div>
                                </div>
                            </Col>

                            <Col md={4}>
                                <div className="mega-menu-content">
                                    <h4>
                                        Products
                                    </h4>
                                    
                                    <div className="mega-menu-item">
                                        <Link className='link-element' to="https://ecombi.in/">
                                            <p>Ecom Bi</p>
                                        </Link>
                                    </div>

                                    <div className="mega-menu-item">
                                        <Link className='link-element' to="https://www.aiextensive.com/">
                                            <p>AI Extensive</p>
                                        </Link>
                                    </div>

                
                                    <div className="mega-menu-item">
                                        <Link className='link-element' to="https://hrjunction.work/">
                                            <p>HR Junction</p>
                                        </Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            
            <div className="mobile-navigation" ref={menuMobile}>
                <div className="mobile-menu-wrapper">
                    <div className="mobile-menu">
                        <div className="mobile-items">
                            <Link className='link-element' to="/">
                                <p>Home</p>
                            </Link>
                            <Link className='link-element' to="/virtual-cfo">
                                <p>Virtual CFO</p>
                            </Link>
                            <Link className='link-element' to="/tax-compliance">
                                <p>Tax Compliance</p>
                            </Link>
                            <Link className='link-element' to="/datalabelling-service">
                                <p>Data Labelling</p>
                            </Link>
                            <Link className='link-element' to="/dataanalytics-service">
                                <p>Data Analytics</p>
                            </Link>
                            
                            <Link className='link-element' to="/book-keeping">
                                <p>Book Keeping</p>
                            </Link>
                            <Link className='link-element' to="/mis-services">
                                <p>MIS & Financials</p>
                            </Link>
                            <Link className='link-element' to="https://ecombi.in/">
                                <p>Ecom Bi</p>
                            </Link>
                            {/* <p>Services</p> */}
                            <Link className='link-element' to="https://www.aiextensive.com/">
                                <p>AI Extensive</p>
                            </Link>
                            <Link className='link-element' to="https://hrjunction.work/">
                                <p>HR Junction</p>
                            </Link>
                            <Link className='link-element' to="/about-us">
                                <p>About Us</p>
                            </Link>
                            
                            <Link className='link-element' to="/contact-us">
                                <p>Contact Us</p>
                            </Link>
                            {/* <p>Blogs</p> */}
                        </div>

                        <div className="mobile-contact">
                            <p>
                                <span>Address: </span>B-1110, Ratnaakar Nine Square, Opp. ITC Narmada, Keshavbaug, Satellite, Ahmedabad – 380015
                            </p>

                            <p>
                                <span>Phone: </span>+91-9512453532
                            </p>
                        </div>
                    </div>

                    <div className="close" onClick={handleClose}>
                        <CloseIcon/>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Header