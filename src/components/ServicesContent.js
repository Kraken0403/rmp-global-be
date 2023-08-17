import React from 'react'
import Container from './Container'
import './ServicesContent.scss'
import sample from '../assets/hero.png'
import { Col, Row } from 'react-bootstrap'

function ServicesContent() {
  return (
    <div className='services-content'>
        <Container>
            <div className="services-content-wrapper">
                <div className="services-img">
                    <img src={sample} alt="" />
                </div>

                <div className="services-main-wrapper">
                    <Row>
                        <Col md={6}>
                            <div className="services-title">
                                <h1>
                                    What is Virtual CFO? 
                                </h1>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="services-content-inner">
                                <p>
                                 With RMPGlobal unparalleled expertise in the domain of Finance, we allow organizations the opportunity to entrust all of their financial requirements to us. At the same time, they can supply one hundred percent of their attention towards their business! Over the years, we have developed a comprehensive suite of services through the Virtual Chief Financial Officer program to handle all of our clients’ finance-related needs. Whether it is the most basic task of bookkeeping or something as advanced as developing financial strategies and related projections for its growth, our team is equipped to handle projects of all scopes
                                </p>

                                <p>
                                As global operations of corporations become more mainstream, having a virtual team that manages one aspect of your business offers you a multitude of benefits such as access to qualified expertise, reduced costs, and pre-existing domain-specific infrastructure. Having a rich experience across the financial spectrum, we are well-qualified to develop partnerships with like-minded organizations and be a part of their growth journeys! 
                                </p>
                            </div>
                        </Col>
                    </Row>

                    <div className="services-features">
                        <div className="feature-boxes">
                            <div className="feature-box">
                                <div className="icon-box">
                                    <h2>
                                        Accounting
                                    </h2>
                                </div>
                                

                                <p>
                                    From bookkeeping operations to balancing accounting sheets, our qualified team takes care of all those requirements, simplifying and enhancing your accounting operations 
                                </p>

                            </div>

                            <div className="feature-box">
                                <h2>
                                Tax & Legal Compliances
                                </h2>

                                <p>
                                With an understanding of tax codes across several countries, we are capable of handling tax and relevant legal compliances for companies that operate globally! 
                                </p>

                            </div>

                            <div className="feature-box">
                                <h2>
                                Finance
                                </h2>

                                <p>
                                We develop detailed and accurate financial projections as well as strategies for investment and raising capital that plays a major role in the growth of any organization. With a team of financial wizards, we ensure that your company has a financial structure that matches your ambition.
                                </p>

                            </div>
                        </div>

                        <div className="feature-boxes">
                            <div className="feature-box">
                                <h2>
                                    Government Incentives
                                </h2>

                                <p>
                                    With various policies that favour businesses, especially in growing economies such as India, it is crucial to have a team that is capable of finding the right policy and incentive for your company! Our team constantly researches upcoming and existing government schemes that enable your company’s growth. 
                                </p>

                            </div>

                            <div className="feature-box">
                                <h2>
                                    Business Strategy
                                </h2>

                                <p>
                                 Our Virtual CFO suite also helps companies in developing growth-oriented strategies that aim to enhance consumer engagement as well as drive down costs and optimizing procedures, leading to a two-pronged improvement approach!
                                </p>

                            </div>

                            <div className="feature-box">
                                <h2>
                                HR Services
                                </h2>

                                <p>
                                A single-window destination for your HR Management services, whether it is documentation or managing payrolls for all your employees, our Virtual CFO offering takes care of it all.
                                </p>

                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default ServicesContent