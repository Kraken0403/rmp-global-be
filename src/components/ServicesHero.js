import React from 'react'
import './ServicesHero.scss'
import Container from './Container'

function ServicesHero(props) {
  return (
    <div className='services-hero'>
        <Container>
            <div className="services-inner">
                <div className="services-inner-title">
                    <p>services</p>
                    <h2>{props.title}</h2>
                </div>
                {/* <div className="services-date">
                    <p>Increase your margins by 67%</p>
                </div> */}
            </div>
        </Container>
    </div>
  )
}

export default ServicesHero