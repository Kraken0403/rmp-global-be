import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.scss'
import Container from './Container'
import ReactCountryFlag from "react-country-flag"
import {Row, Col} from 'react-bootstrap'

function ContactMain() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_gnny3yu', 'template_odkldly', form.current, 'Uvmd-R5coeL6DG68G')
          .then((result) => {
              console.log(result.text);
              alert('Thank you for showing interest in our Services, we will get back to youwithin 24 hours');
              form.current.reset();
            }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <div className='contact'>
        <Container>
            <Row>
                <Col sm={12} md={6}>
                    <div className="contact-wrapper">
                        <h4>
                            Drop in a mail
                        </h4>
                        <p>
                            Just fill out the below and send the message
                        </p>

                        <form className='contact-form' action="/" ref={form} onSubmit={sendEmail}>
                            <div className="input-row">
                                <label htmlFor="full-name">
                                    Full Name
                                </label>
                                <input type="text" name='full-name' />
                            </div>

                            <div className="input-row">
                                <label htmlFor="email">
                                    Email
                                </label>
                                <input type="email" name='email' />
                            </div>

                            <div className="input-row">
                                <label htmlFor="tel">
                                    Phone
                                </label>
                                <input type="tel" name='tel' />
                            </div>

                            <div className="input-row">
                                <label htmlFor="company">
                                    Company(Optional)
                                </label>
                                <input type="text" name='company' />
                            </div>

                            <div className="input-row">
                                <label htmlFor="message">
                                    Message
                                </label>
                                <textarea name="message" id="" cols="30" rows="10" />
                            </div>
                        <input type='submit' className='submit-btn' value='Submit'/>
                        </form>
                    </div>
                </Col>

                <Col sm={12} md={6}>
                    <div className="address-wrapper">
                        <div className="contact-email">
                            <h4>info@rmpglobal.io</h4>
                        </div>

                        <div className="contact-number">
                            <h4>Call Us:</h4>
                            <p>
                                India: +91-9727259636
                            </p>
                        </div>

                        <div className="contact-address">
                            <h4>Address: </h4>
                            <p>
                                B-1110, Ratnaakar Nine Square, Opp. ITC Narmada, Keshavbaug, Satellite, Ahmedabad – 380015
                                Gujarat, India
                            </p>
                        </div>

                        <div className="contact-countries">
                            <h4>Countries We are present in</h4>
                            <div className="country-flags">
                                <ReactCountryFlag countryCode="In" svg
                                style={{
                                    width: '22px',
                                    height: '22px',
                                }}/>
                                <ReactCountryFlag countryCode="US" svg
                                style={{
                                    width: '22px',
                                    height: '22px',
                                }}/>
                                <ReactCountryFlag countryCode="Ca" svg
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
                        </div>

                        <div className="contact-map">
                            {/* <h4>Come find us</h4> */}
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.881180669941!2d72.52721017482443!3d23.028134516121526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8596681fd5e3%3A0xc4c8ff83c397e37d!2sRMPS%20%26%20Co!5e0!3m2!1sen!2sin!4v1694501948306!5m2!1sen!2sin"  style={{border: '0px'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>

                        {/* .contact-map */}
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default ContactMain