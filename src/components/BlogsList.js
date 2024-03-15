import React from 'react';
import BlogCard from './BlogCard'
import Container from './Container';
import {Row, Col} from 'react-bootstrap'
import './BlogsList.scss'

function BlogsList(props) {

  return (
    <div className='blogs-list'>
        <Container>
        {props.isLoading ? (
            <p>Loading...</p>
            ) : (
                <Row>
                  {props.blogData.map(blog => (
                   
                    <Col md={3} className='blogcard-margin'>
                      <a href={`/blogs/${blog.uid}`}>
                           <BlogCard tagTwo={blog.data.tag_two} tagOne={blog.data.tag_one} occupation='' key={blog.id} image={blog.data.blog_image.url} title={blog.data.blog_title[0].text}/>
                        </a>
                    </Col>
                  ))}
                    
                </Row> 
            )
        }
         
        </Container>
        
    </div>
  )
}

export default BlogsList