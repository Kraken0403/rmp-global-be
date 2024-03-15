import React from 'react'
import './BlogHero.scss'
import Container from './Container'

function BlogHero({blog}) {
  return (
    <div className='blog-hero'>
        <Container>
            <div className="blog-wrapper">
                <div className="blog-inner">
                    <div className="blog-inner-title">
                        <p>Blog</p>
                        <h2>{blog.data.blog_title[0].text}</h2>
                    </div>
                    <div className="blog-date">
                        {/* <p>{format(new Date(blog.data.attributes.Date), 'MMM dd, yyyy')}</p> */}
                    </div>
                </div>

                <div className="blog-tags">
                    <div className="blog-tag">
                        <h4>Taxation</h4>
                    </div>

                    <div className="blog-tag">
                        <h4>AI</h4>
                    </div>

                    <div className="blog-tag">
                        <h4>Future</h4>
                    </div>
                </div>
            </div>
            
        </Container>
    </div>
  )
}

export default BlogHero