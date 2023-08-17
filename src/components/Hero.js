import React from 'react'
import './Hero.scss'
import hero from '../assets/hero-bg.webp'
import Container from './Container'

function Hero(props) {
  return (
    <div className='hero'>
        <img src={hero} alt="" />
        <Container>
            <div className="hero-wrapper">
                <div className="hero-main">
                    <p>{props.caption}</p>
                    <h2>{props.title}</h2>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Hero