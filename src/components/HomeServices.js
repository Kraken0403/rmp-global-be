import React, {useRef, useState, useEffect} from 'react'
import './HomeServices.scss'
import { Row, Col } from 'react-bootstrap'
import Container from './Container'
import { Link } from 'react-router-dom'
import arrow from '../assets/Arrow 2.png'
import ReactCountryFlag from "react-country-flag"

import gsap from 'gsap'

function HomeServices() {
    const services = useRef();
    const products = useRef();
    const outsourcing = useRef();

    const [activeTab, setActiveTab] = useState('outsourcing');

    const checkOrange = (x) => {
        if(x === 'services') {
            gsap.to(services.current, {
                color: '#F75708'
            })
    
            gsap.to(products.current, {
                color: '#020E12'
            })

            gsap.to(outsourcing.current, {
                color: '#020E12'
            })
        }

        if(x === 'outsourcing') {
            gsap.to(services.current, {
                color: '#020E12'
            })

            gsap.to(outsourcing.current, {
                color: '#F75708'
            })
    
            gsap.to(products.current, {
                color: '#020E12'
            })
        }

        else if(x === 'products') {
            gsap.to(services.current, {
                color: '#020E12'
            })
    
            gsap.to(products.current, {
                color: '#F75708'
            })

            gsap.to(outsourcing.current, {
                color: '#020E12'
            })
        }
    }

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        checkOrange(tab);
    };

    useEffect(() => {
        checkOrange();
    },[])

  return (
    <div className='hs'>
        <Container>
            <Row>
                <Col md={2}>
                    <div className="services-menu">
                        <p ref={outsourcing} onClick={() => handleTabClick('outsourcing')}>Outsourcing</p>

                        <p ref={services} onClick={() => handleTabClick('services')}>
                            Services
                        </p>
                        <p ref={products} onClick={() => handleTabClick('products')}>Products</p>
                    </div>
                </Col>
                {/* Services */}
                {activeTab === 'services' && (
                    <>
                    <Col md={5}>
                    <div className="services-list">
                        <div className="services-block">
                            <h2 className="services-title">
                                Virtual CFO
                            </h2>
                            <p className="services-desc">
                                With RMP Global's unparalleled expertise in the domain of Finance, we allow organizations the opportunity to entrust all of their financial requirements to us
                            </p>
                            <div className="normal-link">
                                <Link to="/virtual-cfo" className='link-element'>
                                    <div className="normal-link-wrapper">
                                        <div className="normal-link-wrapper-inner">
                                            <p><Link to="/virtual-cfo" >Explore</Link></p>
                                            <img src={arrow} alt="" />
                                        </div>
                                        
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className="services-block">
                            <h2 className="services-title">
                                Data Labelling
                            </h2>
                            <p className="services-desc">
                                Fuel your AI initiatives with precision through our Data Labelling services. We meticulously annotate and tag your data, enhancing machine learning accuracy. Trust us to provide the labeled datasets you need while you focus on AI innovation.
                            </p>
                            <div className="normal-link">
                                <Link to="/dataLablling-service" className="link-element">
                                    <div className="normal-link-wrapper">
                                        <div className="normal-link-wrapper-inner">
                                            <p><Link >Explore</Link></p>
                                            <img src={arrow} alt="" />
                                        </div>
                                        
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className="services-block">
                            <h2 className="services-title">
                            Tax Compliance
                            </h2>
                            <p className="services-desc">
                            Effortlessly maneuver the intricacies of taxation with our all-encompassing Tax Compliance Services. We guarantee strict compliance with dynamic tax laws, maximize deductions, and meticulously handle tax returns. Delegate your tax obligations to us, enabling uninterrupted focus on your fundamental business endeavors.
                            </p>
                            <div className="normal-link">
                                <Link to="/tax-compliance" className="link-element">
                                    <div className="normal-link-wrapper">
                                        <div className="flags">
                                        <ReactCountryFlag countryCode="US" svg
                                            style={{
                                                width: '22px',
                                                height: '22px',
                                            }}/>

                                        <ReactCountryFlag countryCode="GB" svg
                                            style={{
                                                width: '22px',
                                                height: '22px',
                                            }}/>
                                        </div>
                                        <div className="normal-link-wrapper-inner">
                                            <p><Link >Explore</Link></p>
                                            <img src={arrow} alt="" />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Col>

                <Col md={5}>
                    <div className="services-list">
                        <div className="services-block">
                            <h2 className="services-title">
                                Book Keeping
                            </h2>
                            <p className="services-desc">
                                Enhance your company's fiscal well-being through our professional Bookkeeping Services. Our precise financial record-keeping guarantees accuracy in data, efficient tax preparation, and insightful decision-making. Rely on us to handle your bookkeeping while you concentrate on expanding your digital footprint.
                            </p>
                            <div className="normal-link">
                                <Link to="/book-keeping" className="link-element">
                                    <div className="normal-link-wrapper">
                                        <div className="flags">
                                        <ReactCountryFlag countryCode="US" svg
                                            style={{
                                                width: '22px',
                                                height: '22px',
                                            }}/>

                                        <ReactCountryFlag countryCode="GB" svg
                                            style={{
                                                width: '22px',
                                                height: '22px',
                                            }}/>
                                        </div>
                                        <div className="normal-link-wrapper-inner">
                                            <p>
                                                <Link to="/book-keeping">Explore</Link>
                                            </p>
                                            <img src={arrow} alt="" />
                                        </div>
                                        
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className="services-block">
                            <h2 className="services-title">
                                Data Analytics
                            </h2>
                            <p className="services-desc">
                            Reveal valuable insights and steer data-powered choices with our offerings in Data Analytics - Power BI. Convert unprocessed data into engaging visuals, unveiling business patterns with precision. Empower your enterprise with robust analytics as we unleash the full potential of your data resources.
                            </p>
                            <div className="normal-link">
                                <Link to="/dataanalytics-service" className="link-element">
                                    <div className="normal-link-wrapper">
                                        <div className="normal-link-wrapper-inner">
                                            <p>
                                                <Link to="/dataanalytics-service">Explore</Link>
                                            </p>
                                            <img src={arrow} alt="" />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="services-block">
                            <h2 className="services-title">
                                MIS & Financials 
                            </h2>
                            <p className="services-desc">
                                Empower your business with our advanced MIS & Financial Services, delivering comprehensive insights for informed decision-making. From data analysis to performance evaluation, we provide a holistic financial perspective. Elevate your strategic prowess while we handle the intricacies of financial management.
                            </p>
                            <div className="normal-link">
                                <Link to="/mis-services" className="link-element">
                                    <div className="normal-link-wrapper">
                                        <div className="flags">
                                        <ReactCountryFlag countryCode="US" svg
                                            style={{
                                                width: '22px',
                                                height: '22px',
                                            }}/>

                                        <ReactCountryFlag countryCode="GB" svg
                                            style={{
                                                width: '22px',
                                                height: '22px',
                                            }}/>
                                        </div>
                                        <div className="normal-link-wrapper-inner">
                                            <p><Link to="/mis-services">Explore</Link></p>
                                            <img src={arrow} alt="" />
                                        </div>
                                    
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Col>
                </>
                )}

                {activeTab === 'outsourcing' && (
                    <>
                    <Col md={5}>
                    <div className="services-list">
                        <div className="services-block">
                            <h2 className="services-title">
                            Tax Compliance
                            </h2>
                            <p className="services-desc">
                            Effortlessly maneuver the intricacies of taxation with our all-encompassing Tax Compliance Services. We guarantee strict compliance with dynamic tax laws, maximize deductions, and meticulously handle tax returns. Delegate your tax obligations to us, enabling uninterrupted focus on your fundamental business endeavors.
                            </p>
                            <div className="normal-link">
                                <Link to='/tax-compliance' className='link-element'>
                                    <div className="normal-link-wrapper">
                                            <div className="flags">
                                                <ReactCountryFlag countryCode="US" svg
                                                style={{
                                                    width: '22px',
                                                    height: '22px',
                                                }}/>

                                                <ReactCountryFlag countryCode="GB" svg
                                                style={{
                                                    width: '22px',
                                                    height: '22px',
                                                }}/>
                                            </div>
                                        <div className="normal-link-wrapper-inner">
                                            
                                            <div className="normal-link-wrapper-inner">
                                                <p><Link to="/tax-compliance">Explore</Link></p>
                                                <img src={arrow} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className="services-block">
                            <h2 className="services-title">
                                MIS
                            </h2>
                            <p className="services-desc">
                                Empower your business with our advanced MIS & Financial Services, delivering comprehensive insights for informed decision-making. From data analysis to performance evaluation, we provide a holistic financial perspective. Elevate your strategic prowess while we handle the intricacies of financial management.
                            </p>
                            <div className="normal-link">
                                <Link className="link-element">
                                    <div className="normal-link-wrapper">
                                        <div className="flags">
                                            <ReactCountryFlag countryCode="US" svg
                                                style={{
                                                width: '22px',
                                                height: '22px',
                                                }}/>

                                            <ReactCountryFlag countryCode="GB" svg
                                                style={{
                                                width: '22px',
                                                height: '22px',
                                                }}/>
                                        </div>
                                        <div className="normal-link-wrapper-inner">
                                            <p><Link to="/mis-services">Explore</Link></p>
                                            <img src={arrow} alt="" />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>

                    </div>
                </Col>

                <Col md={5}>
                    <div className="services-list">
                        <div className="services-block">
                            <h2 className="services-title">
                                Book Keeping
                            </h2>
                            <p className="services-desc">
                                Enhance your company's fiscal well-being through our professional Bookkeeping Services. Our precise financial record-keeping guarantees accuracy in data, efficient tax preparation, and insightful decision-making. Rely on us to handle your bookkeeping while you concentrate on expanding your digital footprint.
                            </p>
                            <div className="normal-link">
                                <Link to="/book-keeping" className="link-element">
                                    <div className="normal-link-wrapper">
                                        <div className="flags">
                                        <ReactCountryFlag countryCode="US" svg
                                            style={{
                                                width: '22px',
                                                height: '22px',
                                            }}/>

                                        <ReactCountryFlag countryCode="GB" svg
                                            style={{
                                                width: '22px',
                                                height: '22px',
                                            }}/>
                                        </div>
                                        <div className="normal-link-wrapper-inner">
                                            <p><Link to="/book-keeping">Explore</Link></p>
                                            <img src={arrow} alt="" />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className="services-block">
                            <h2 className="services-title">
                                Financials
                            </h2>
                            <p className="services-desc">
                            In the dynamic world of finance, where accuracy and transparency are paramount, your financial statements are more than just numbers; they are a reflection of your organization's fiscal health and stewardship
                            </p>
                            <div className="normal-link">
                                <Link className="link-element">
                                    <div className="normal-link-wrapper">
                                        <div className="flags">
                                        <ReactCountryFlag countryCode="US" svg
                                            style={{
                                                width: '22px',
                                                height: '22px',
                                            }}/>

                                        <ReactCountryFlag countryCode="GB" svg
                                            style={{
                                                width: '22px',
                                                height: '22px',
                                            }}/>
                                        </div>
                                        <div className="normal-link-wrapper-inner">
                                            <p><Link to="/financial">Explore</Link></p>
                                            <img src={arrow} alt="" />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Col>
                </>
                )}

                {activeTab === 'products' && (
                    <>
                    <Col md={5}>
                    <div className="services-list">
                        <div className="services-block">
                            <h2 className="services-title">
                                Ecom Bi
                            </h2>
                            <p className="services-desc">
                            Ecom Bi simplifies management of ecommerce links of your business firm to make your business work for you. By initiative of Ecom Bi portal, we have developed an easy, economic and elegant software as a modern solution to manage your multichannel business.
                            </p>
                            <div className="normal-link">
                                <Link to="https://ecombi.in/" className="link-element">
                                    <div className="normal-link-wrapper">
                                        <div className="normal-link-wrapper-inner">
                                            <p>Explore</p>
                                            <img src={arrow} alt="" />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className="services-block">
                            <h2 className="services-title">
                                HR Junction
                            </h2>
                            <p className="services-desc">
                                We offer trustworthy companies outsourcing to our clients that satisfy the workforce demands of their businesses.
                            </p>
                            <div className="normal-link">
                                <Link className="link-element" to="https://hrjunction.work/">
                                    <div className="normal-link-wrapper">
                                        <div className="normal-link-wrapper-inner">
                                            <p>Explore</p>
                                            <img src={arrow} alt="" />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Col>

                <Col md={5}>
                    <div className="services-list">
                        <div className="services-block">
                            <h2 className="services-title">
                                AI Extensive
                            </h2>
                            <p className="services-desc">
                                By AiExtensive, we are introducing Ai based solutions for the accountants that is capable of solving laborious works with help of RPA (Robotic Process Automation) technology.
                            </p>
                            <div className="normal-link">
                                <Link className="link-element" to="https://www.aiextensive.com/" >
                                    <div className="normal-link-wrapper">
                                        <div className="normal-link-wrapper-inner">
                                            <p>Explore</p>
                                            <img src={arrow} alt="" />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Col>
                </>
                )}
            </Row>
        </Container>
    </div>
  )
}

export default HomeServices