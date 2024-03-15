import React from 'react';
import './BlogContent.scss';
import { Row, Col } from 'react-bootstrap';

import { WhatsappIcon, FacebookIcon,  EmailIcon } from 'react-share';

import { RichText } from 'prismic-reactjs';
import Container from './Container';
import {FacebookShareButton, EmailShareButton, WhatsappShareButton } from 'react-share';

// HTML Serializer

function BlogContent({ blog }) {
    const currentURL = window.location.href;

    return (
      <div className="blog-content">
        <Container>
          <img src={blog.data.blog_image.url} alt="" />
  
          <div className="blog-content-wrapper">
            <Row>
              <Col md={3}>
                <div className="blog-content-terms">
                  <h3>Share</h3>
                  <div className="social-icons">
                    <div className="social-icon">
                      <FacebookShareButton url={currentURL}>
                        <FacebookIcon/>
                      </FacebookShareButton>
                    </div>
                    <div className="social-icon">
                      <WhatsappShareButton url={currentURL}>
                        <WhatsappIcon/> 
                      </WhatsappShareButton>
                    </div>
                    <div className="social-icon">
                      <EmailShareButton url={currentURL}>
                        <EmailIcon/>
                      </EmailShareButton>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className="blog-content-main">
                  {RichText.render(blog.data.blog_content)}
                </div>
              </Col>
              <Col md={3}>
                <div className="blog-content-terms"></div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
  
  export default BlogContent;
