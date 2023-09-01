import React from 'react'
import './BlogHero.scss'
import Container from './Container'
import { format } from 'date-fns';

function BlogHero({blog}) {
  return (
    <div className='blog-hero'>
        <Container>
            <div className="blog-inner">
                <div className="blog-inner-title">
                    <p>Blog</p>
                    <h2>{blog.data.blog_title[0].text}</h2>
                </div>
                <div className="blog-date">
                    {/* <p>{format(new Date(blog.data.attributes.Date), 'MMM dd, yyyy')}</p> */}
                </div>
            </div>
        </Container>
    </div>
  )
}

export default BlogHero