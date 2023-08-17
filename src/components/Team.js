import React from 'react'
import Container from './Container'
import { Link } from 'react-router-dom'
import arrow from '../assets/Arrow 2.png'
import {Row, Col} from 'react-bootstrap'
import './Insights.scss'
import sanjay from '../assets/sanjay-patel.webp'
import piyush from '../assets/piyush.webp'
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
                        <Link>
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
                        <BlogCard name="SanjayKumar Patel" occupation="Director" image={sanjay}/>
                    </Col>
                    <Col md={3}>
                        <BlogCard name="Piyush Sunani" occupation="Director" image={piyush}/>
                    </Col>
                    <Col md={3}>
                        <BlogCard name="Piyush Sunani" occupation="Director" image={piyush}/>
                    </Col>
                    <Col md={3}>
                        <BlogCard  name="Piyush Sunani" occupation="Director" image={piyush}/>
                    </Col>
                </Row>
            </div>
        </Container>
    </div>
  )
}

export default Team