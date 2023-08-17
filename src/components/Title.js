import React from 'react'
import CustomButton from './CustomButton'
import Container from './Container'
import './Title.scss'

function Title(props) {
  return (
    <div className="custom-title">
        <Container>
            <div className="custom-title-wrapper">
                <h2>{props.title}</h2>
                {/* <CustomButton text="All Services" arrowBg="#f2f2f2" bg="#020E12" textColor="#f2f2f2"/> */}
            </div>
        </Container>
    </div>
  )
}

export default Title