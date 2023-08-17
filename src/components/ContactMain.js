import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.scss'
import Container from './Container'
import {Row, Col} from 'react-bootstrap'

function ContactMain() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_gnny3yu', 'template_odkldly', form.current, 'Uvmd-R5coeL6DG68G')
          .then((result) => {
              console.log(result.text);
              alert('We Will Get Back To You in 24 Hours');
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
                            <h4>info@rmpglobal.co.in</h4>
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
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default ContactMain