import React from 'react'
import './BlogContent.scss'
import {Row, Col} from 'react-bootstrap'
import { format } from 'date-fns';
import ReactMarkdown from "react-markdown";
import Container from './Container'
// import remarkGfm from 'remark-gfm'
 // Import react-html-parser

function BlogContent({blog}) {
    console.log(blog.data.attributes.BlogContent)
  return (
    <div className='blog-content'>
        <Container>
        <img src={`https://rmp-strapi.onrender.com/${blog.data.attributes.CoverImg.data.attributes.url}`} alt="" />

        <div className="blog-content-wrapper">
            <Row>
                <Col md={4}>
                    <div className="blog-content-terms">
                        <h2>{format(new Date(blog.data.attributes.Date), 'MMM dd, yyyy')}</h2>
                        <h3>Share</h3>
                    </div>
                </Col>
                <Col md={8}>
                    <div className="blog-content-main" >
                        <ReactMarkdown>
                            {blog.data.attributes.BlogContent}
                        </ReactMarkdown>
                    </div>
                </Col>
            </Row>
        </div>
        </Container>
    </div>
  )
}

export default BlogContent