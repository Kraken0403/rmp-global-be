import React from 'react'
import './BlogContent.scss'
import {Row, Col} from 'react-bootstrap'

import ReactMarkdown from "react-markdown";
import Container from './Container'
// import remarkGfm from 'remark-gfm'
 // Import react-html-parser

function BlogContent({blog}) {

  return (
    <div className='blog-content'>
        <Container>
        <img src={blog.data.blog_image.url} alt="" />

        <div className="blog-content-wrapper">
            <Row>
                <Col md={4}>
                    <div className="blog-content-terms">
                        {/* <h2>{format(new Date(blog.data.attributes.Date), 'MMM dd, yyyy')}</h2> */}
                        <h3>Share</h3>
                    </div>
                </Col>
                <Col md={8}>
                    <div className="blog-content-main" >
                    {blog.data.blog_content.map((paragraph, index) => (
                        <div className="para-blog" key={index}>
                            {paragraph.text}
                        </div>
                    ))}
                    </div>
                </Col>
            </Row>
        </div>
        </Container>
    </div>
  )
}

export default BlogContent