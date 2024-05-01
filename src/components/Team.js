import React from 'react'
import Container from './Container'
import { Link } from 'react-router-dom'
import arrow from '../assets/Arrow 2.png'
import {Row, Col} from 'react-bootstrap'
import './Insights.scss'
import sanjay from '../assets/sanjay-patel.webp'
import piyush from '../assets/piyush.webp'
import krunal from '../assets/krunal.jpg'
import nidhi from '../assets/nidhi.jpg'
import akanksha from '../assets/Akanksha Sanchawat_Account Executive.jpg'
import bhavesh from '../assets/Bhavesh Dulera_Admin.jpg'
import dhruti from '../assets/Dhruti Mehta_Account Executive.jpg'
import kaushik from '../assets/Kaushik Chavda_account Executive.jpg'
import parth from '../assets/Parth Gajjar_Account Executive.jpg'
import pooja from '../assets/Pooja Mehta_GST Executive.jpeg'
import pranay from '../assets/Pranay Patel_BDM.jpg'
import rishi from '../assets/Rishi Pawar_GST Executive.jpg'
import tejal from '../assets/Tejal Parmar_account Executive.jpg'
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
                    <Col md={3}>
                        <Link to="https://www.linkedin.com/in/sanjaykumar-patel-excelonip/">
                            <BlogCard title="SanjayKumar Patel" tagOne="Director" image={sanjay}/>
                        </Link>
                    </Col>
                    <Col md={3}>
                        <BlogCard title="Piyush Sunani" tagOne="Director" image={piyush}/>
                    </Col>
                    <Col md={3}>
                        <Link to='https://www.linkedin.com/in/ca-krunal-shah-bb66bb143/'>
                            <BlogCard title="Krunal Shah" tagOne="Consultant" image={krunal}/>
                        </Link>
                    </Col>
                    <Col md={3}>
                        <Link to='https://www.linkedin.com/in/nidhi-ramanuj-5b5605144/'>
                            <BlogCard  title="Nidhi Ramanauj" tagOne="BDM" image={nidhi}/>
                        </Link>
                    </Col>

                   
                </Row>

                <Row>
                    <Col md={3}>
                        <Link to='https://www.linkedin.com/in/akanksha-sanchawat-760578203/'>
                            <BlogCard  title="Akanksha Sanchawat" tagOne="Accountant Executive" image={akanksha}/>
                        </Link>
                    </Col>

                    <Col md={3}>
                        <Link to='#'>
                            <BlogCard  title="Bhavesh Dulera" tagOne="Admin" image={bhavesh}/>
                        </Link>
                    </Col>

                    <Col md={3}>
                        <Link to='#'>
                            <BlogCard  title="Dhruti Mehta" tagOne="Accountant Executive" image={dhruti}/>
                        </Link>
                    </Col>

                    <Col md={3}>
                        <Link to='#'>
                            <BlogCard  title="Kaushik Chavda" tagOne="Accountant Executive" image={kaushik}/>
                        </Link>
                    </Col>
                </Row>

                <Row>
                    <Col md={3}>
                        <Link to='https://www.linkedin.com/in/akanksha-sanchawat-760578203/'>
                            <BlogCard  title="Parth Gajjar" tagOne="Accountant Executive" image={parth}/>
                        </Link>
                    </Col>

                    <Col md={3}>
                        <Link to='https://www.linkedin.com/in/pooja-mehta-0aa380274/'>
                            <BlogCard  title="Pooja Mehta" tagOne="GST Executive" image={pooja}/>
                        </Link>
                    </Col>

                    <Col md={3}>
                        <Link to='#'>
                            <BlogCard  title="Pranay Patel" tagOne="BDM" image={pranay}/>
                        </Link>
                    </Col>

                    <Col md={3}>
                        <Link to='https://www.linkedin.com/in/rishi-pawar-36a41a258/'>
                            <BlogCard  title="Rishi Pawar" tagOne="GST Executive" image={rishi}/>
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col md={3}>
                        <Link to='https://www.linkedin.com/in/tejal-parmar-7465652b4/'>
                            <BlogCard  title="Tejal Parmar" tagOne="Accountant Executive" image={tejal}/>
                        </Link>
                    </Col>
                </Row>
            </div>
        </Container>
    </div>
  )
}

export default Team