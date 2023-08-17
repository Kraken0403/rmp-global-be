import React, {useEffect, useRef, useState} from 'react'
import Container from './Container'
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import gsap from 'gsap'
import logo from '../assets/logo-2.png'
import './Header.scss'
import { Link } from 'react-router-dom';

function Header(props) {
    const [menuOpen, setMenuOpen] = useState(false);

    const [isHeaderFixed, setIsHeaderFixed] = useState(false);

    const menuMobile = useRef();

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
    

  return (
    <div className='header' style={{backgroundColor: props.color}}>
        <Container>
            <div className="navigation">
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="menu">
                    <div className="menu-items">
                        <ul>
                            <li>
                                <p>
                                    <Link to="/">
                                        Home
                                    </Link>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <Link to="/about-us">
                                        About Us
                                    </Link>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <Link to="/blogs">
                                        Blogs
                                    </Link>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <Link to="/contact-us">
                                        Contact Us
                                    </Link>
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="menu-cta">
                        <Link to="/contact-us">
                            <div className="contact-btn">
                                <p>Contact Us</p>
                            </div>
                        </Link>
                        

                        <div className="hamburger" onClick={handleMenuToggle}>
                            <MenuIcon/>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="mobile-navigation" ref={menuMobile}>
                <div className="mobile-menu-wrapper">
                    <div className="mobile-menu">
                        <div className="mobile-items">
                            <Link to="/">
                                <p>Home</p>
                            </Link>
                            {/* <p>Services</p> */}
                            <Link to="/about-us">
                                <p>About Us</p>
                            </Link>
                            <Link to="/contact-us">
                                <p>Contact Us</p>
                            </Link>
                            {/* <p>Blogs</p> */}
                        </div>

                        <div className="mobile-contact">
                            <p>
                                <span>Address: </span>B-1110, Ratnaakar Nine Square, Opp. ITC Narmada, Keshavbaug, Satellite, Ahmedabad – 380015
                            </p>

                            <p>
                                <span>Phone: </span>+91-9727259636
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