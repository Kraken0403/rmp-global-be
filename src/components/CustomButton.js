import React from 'react'
import './CustomButton.scss'
import arrow from '../assets/arrow.png'

function CustomButton(props) {
  return (
    <div className='custom-button' style={{backgroundColor: props.bg}}>
        <div className="custom-button-text">
            <p style={{color: props.textColor}}>{props.text}</p>
        </div>
        {/* <div className="custom-button-arrow" style={{backgroundColor: props.arrowBg}}>
            <img className='arrow' src={arrow} alt="" />
        </div> */}
    </div>
  )
}

export default CustomButton