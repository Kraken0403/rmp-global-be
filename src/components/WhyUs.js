import React from 'react'
import BasicAccordion from './AccordionExample'
import Container from './Container'
import './whyus.scss'

function WhyUs() {
  return (
    <div className="whyus">
        <Container>
            <div className="whyus-title">
                <h2>
                    Why RMP Global should be your first choice
                </h2>
            </div>

            <div className="whyus-main">
                <div className="whyus-boxes">
                    <div className="whyus-box box-one">
                        <h2>
                            15+ <span></span>
                        </h2>
                        <p>
                        Years of practice in this <br/>industry
                        </p>
                    </div>
                    <div className="whyus-box box-two">
                        <h2>5</h2>
                        <p>Countries we are operating in. <br/> US, UK, Canada, Australia, India</p>
                    </div>
                    <div className="whyus-box box-three">
                        <h2>1/3 <span style={{color:'#fff'}}>rd</span></h2>
                        <p> 
                            Cost of your current Service<br/>Billings
                        </p>
                    </div>
                </div>

                <BasicAccordion/>
            </div>
        </Container>
    </div>  
  )
}

export default WhyUs