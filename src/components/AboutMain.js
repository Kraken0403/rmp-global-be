import React from 'react'
import Container from './Container'
import './AboutMain.scss'
import {Row, Col} from 'react-bootstrap'
import BlogCard from './BlogCard'

function AboutMain() {
  return (
    <div className='about'>
        <Container>
            <div className="about-wrapper">
                <Row>
                    <Col md={6}>
                        <div className="about-title">
                            <h4>
                                About RMP global
                            </h4>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="about-content">
                            <p>
                            We are a group of committed and motivated individuals who continuously strive to add value to our client’s businesses through a wide range of services
                            </p>
                            <p>
                            At RMP Global, we are zealous to partake in endeavors that make a positive difference to our client’s operations and make them stronger, helping us contribute to overall national and societal growth!
                            </p>
                            <p>
                            We firmly believe in the power of technology and leverage its immense potential to serve our customers even better. The backbone of our foundations is a highly qualified and experienced team along with visionary leadership that allows us to curate the finest services for our clients! With over 12 years of experience in this domain, we have a proven track record of excellence that has enabled us to deliver high-performance and qualitative services worldwide! Headquartered in the enterprising city of Ahmedabad, Gujarat, our team is capable of taking on various projects and can seamlessly deliver them at our clients’ desired location!
                            </p>
                        </div>
                    </Col>
                </Row>

                {/* <div className="about-articles">
                    <Row>
                        <Col md={3}>
                            <BlogCard/>
                        </Col>
                        <Col md={3}>
                            <BlogCard/>
                        </Col>
                        <Col md={3}>
                            <BlogCard/>
                        </Col>
                        <Col md={3}>
                            <BlogCard/>
                        </Col>

                    </Row>
                </div> */}
                
            </div>
        
        </Container>
    </div>
  )
}

export default AboutMain