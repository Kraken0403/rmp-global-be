import React from 'react'
import './AboutLeader.scss'
import rajni from '../assets/rajni.webp'
import Container from './Container'

function AboutLeader() {
  return (
    <div className='about-leader'>
        <Container>
            <div className="al-wrapper">
                <div className="al-img">
                    <img src={rajni} alt="" />
                </div>
                <div className="al-content">
                    <div className="al-content-one">
                        <h2>Leadership Vision</h2>
                        <p>RMP global is the brainchild of <span>Mr Rajnikant Patel</span>, who holds several qualifications including Chartered Accountants, Company Secretary, Forensic Auditor, and Systems Auditor, to name a few. His wide-ranging experience drives the company’s pursuit of perfection and customer satisfaction.</p>
                        <p>He is a firm believer in the power of businesses to transform the nation and society. By helping build more substantial businesses, he believes that he can achieve corporations and societies achieve their goals!</p>
                        <p>“Every step that empowers a business goes on to empower a nation! Let us work together for a better world for everyone!”</p>
                    </div>

                    <div className="al-content-two">
                        <h2>Accreditations</h2>
                        <p>Owing to our persistent commitment towards quality, we have achieved several accreditations over the years which help us follow global standards and also allow us to retain credibility.</p>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default AboutLeader