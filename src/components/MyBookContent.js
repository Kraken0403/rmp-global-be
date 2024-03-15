import React from 'react'
import Container from './Container'
import './ServicesContent.scss'
import sample from '../assets/BookKeeping.jpeg'
import { Col, Row } from 'react-bootstrap'
import FeatureBox from './FeatureBox'

function BookContent() {
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
                                    Bookkeeping Service: Your Foundation for Financial Clarity and Growth
                                </h1>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="services-content-inner">
                                <p>
                                In the dynamic world of business, having accurate and organized financial records is essential for making informed decisions. At RMP Global, we understand that effective bookkeeping is more than just data entry—it's the bedrock upon which successful financial management is built. Our Bookkeeping service is meticulously designed to provide you with clear insights into your financial health, empowering you to navigate your business journey with confidence.
                                </p>

                                {/* <p>
                                As global operations of corporations become more mainstream, having a virtual team that manages one aspect of your business offers you a multitude of benefits such as access to qualified expertise, reduced costs, and pre-existing domain-specific infrastructure. Having a rich experience across the financial spectrum, we are well-qualified to develop partnerships with like-minded organizations and be a part of their growth journeys! 
                                </p> */}
                            </div>
                        </Col>
                    </Row>

                    <div className="services-features">
                        <div className="feature-boxes">
                            <FeatureBox
                            title="Precision and Accuracy"
                            content="Our team of meticulous professionals takes pride in maintaining accurate and up-to-date financial records for your business. Every transaction, expense, and income are diligently recorded and categorized, ensuring that your financial data is reliable and precise"/>

                            <FeatureBox title="Real-Time Insights" 
                            content="With our Bookkeeping service, you gain real-time visibility into your financial position. Timely financial reports, including balance sheets, income statements, and cash flow statements, provide you with a comprehensive overview of your financial performance. These insights allow you to identify trends, spot opportunities, and address challenges promptly" />

                            <FeatureBox title="Strategic Decision-Making"
                                content="Sound decision-making requires a deep understanding of your financial landscape. Our Bookkeeping service equips you with the information needed to assess your business's financial health accurately. Whether you're evaluating potential investments, considering expansion, or refining your operational strategies, our comprehensive financial records provide the foundation for your choices."
                            />
                        </div>

                        <div className="feature-boxes">
        
        
                            <FeatureBox
                            title="Compliance and Audit Preparedness"
                            content="In today's regulatory environment, being prepared for audits and compliance reviews is crucial. Our meticulous bookkeeping ensures that your financial records are always audit-ready. If the need arises, you'll have the necessary documentation to demonstrate your financial accuracy and compliance"
                            />

                        
                            <FeatureBox
                                title="Tailored Solutions"
                                content="Every business is unique, and so are its financial needs. Our Bookkeeping service is tailored to suit your industry, business size, and specific requirements. Whether you're a startup seeking initial financial organization or an established enterprise aiming to enhance your financial efficiency, we have a solution for you."
                            />

                            <FeatureBox
                                title="Transparent Communication"
                                content="Understanding your financial records is key to making informed decisions. Our experts break down complex financial data into understandable insights, ensuring that you're not only organized but also empowered to interpret your financial performance."
                            />

                        </div>


                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default BookContent