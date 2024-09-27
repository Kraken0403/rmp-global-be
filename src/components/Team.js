import React from 'react'
import Container from './Container'
import { Link } from 'react-router-dom'
import arrow from '../assets/Arrow 2.png'
import {Row, Col} from 'react-bootstrap'
import './Insights.scss'

import nidhi from '../assets/Nidhi Ramanuj.jpg'
import bhavesh from '../assets/Bhesh Dulera.jpg'
import dhruti from '../assets/Dhruti Mehta.jpg'
import sahil from '../assets/Sahil Mandli.jpg'
// import kaushik from '../assets/Kaushik Chavda_account Executive.jpg'
// import parth from '../assets/Parth Gajjar_Account Executive.jpg'
import pooja from '../assets/Pooja Mehta.jpg'
// import pranay from '../assets/Pranay Patel_BDM.jpg'
// import rishi from '../assets/Rishi Pawar_GST Executive.jpg'
import tejal from '../assets/Tejal Parmar.jpg'
import mahesh from '../assets/Mahesh Shah.jpg'
import BlogCard from './BlogCard'

function Team(props) {
  return (
    <div className='insights' style={{backgroundColor: props.bg}}>
        <Container>
            <div className="inisghts-wrapper">
                <div className="insights-title">
                    <h2>
                        Our Team
                    </h2>
                </div>

                <div className="insights-content">
                    <p className='insights-content-main'>
                        Check Out our Team responsible for the operations and success of RMP GLobal and its companies
                    </p>

                    <div className="normal-link">
                        <Link to='/contact-us'>
                            <div className="normal-link-wrapper">
                                <p>Contact Us</p>
                                <img src={arrow} alt="" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="blogs-list" style={{backgroundColor: props.bg}}>
                

                <Row>
                    {/* <Col md={3}>
                        <Link to='https://www.linkedin.com/in/akanksha-sanchawat-760578203/'>
                            <BlogCard  title="Akanksha Sanchawat" tagOne="Accountant Executive" image={akanksha}/>
                        </Link>
                    </Col> */}

                    <Col md={3}>
                        <Link to='https://www.linkedin.com/in/dulera-bhavesh-441960282/'>
                            <BlogCard  title="Bhavesh Dulera" tagOne="Admin" image={bhavesh}/>
                        </Link>
                    </Col>

                    <Col md={3}>
                        <Link to='https://www.linkedin.com/in/dhruti-mehta-4491a02b5/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
                            <BlogCard  title="Dhruti Mehta" tagOne="HR Executive" image={dhruti}/>
                        </Link>
                    </Col>

                    <Col md={3}>
                        <Link to='https://www.linkedin.com/in/pooja-mehta-0aa380274/'>
                            <BlogCard  title="Pooja Mehta" tagOne="Tax manager" image={pooja}/>
                        </Link>
                    </Col>

                    <Col md={3}>
                        <Link to='https://www.linkedin.com/in/tejal-parmar-7465652b4/'>
                            <BlogCard  title="Tejal Parmar" tagOne="Accountant Executive" image={tejal}/>
                        </Link>
                    </Col>

                  
                </Row>
                   
                <Row>
                    <Col md={3}>
                        <Link to='https://www.linkedin.com/in/mahesh-j-shah-7b449920b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
                            <BlogCard  title="Mahesh Shah" tagOne="Tax Executive" image={mahesh}/>
                        </Link>
                    </Col>

                    <Col md={3}>
                        <Link to='https://www.linkedin.com/in/sahil-mandli/?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAEGvZfIBH6WUx66eComolyHNKaZFghZhkJ4'>
                            <BlogCard  title="Sahil Mandli" tagOne="Virtual CFO" image={sahil}/>
                        </Link>
                    </Col>

                    <Col md={3}>
                        <Link to='https://www.linkedin.com/in/nidhi-ramanuj/'>
                            <BlogCard  title="Nidhi Ramanuj" tagOne="Business Expansion Manager" image={nidhi}/>
                        </Link>
                    </Col>
                </Row>
                
            </div>
        </Container>
    </div>
  )
}

export default Team