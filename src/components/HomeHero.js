import React from 'react'
import './HomeHero.scss'
import hero from '../assets/sample2.jpg'
import CustomButton from './CustomButton'
import { Link } from 'react-router-dom'

function HomeHero() {
  return (
    <div className='home-hero'>
        <div className="hero-image">
            <img data-scroll data-scroll-speed="-1" className='bg-img' src={hero} alt="" />
        </div>
        <div className="hero-text">    
            <h1 className='hero-title'>
                Improve your margins <br/>
                upto 67% of your Billings
            </h1>
            <p className='hero-para'>
                Your life and business goals are unique. You have your own vision, values and ambitions. Your financial plan should be a reflection of this. Let's begin the journey to a brighter tomorrow, today.
            </p>
            <div className="cta-btn">
                <Link to="/contact-us">
                    <CustomButton text='Book your consultaion'/>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default HomeHero