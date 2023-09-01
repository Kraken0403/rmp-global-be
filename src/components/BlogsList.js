import React, { useState, useEffect } from 'react';
import BlogCard from './BlogCard'
import config from '../config';
import Container from './Container';
import {Row, Col} from 'react-bootstrap'
import './BlogsList.scss'
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import { is } from 'date-fns/locale';

function BlogsList(props) {

  return (
    <div className='blogs-list'>
        <Container>

        {props.isLoading ? (
            <p>Loading...</p>
            ) : (
                <Row>
                  {console.log(props.blogData)}
                  {props.blogData.map(blog => (
                    <Col md={3} className='blogcard-margin'>
                      <Link to={`/blogs/${blog.uid}`}>
                           <BlogCard name='Blog' occupation='' key={blog.id} image={blog.data.blog_image.url} title={blog.data.blog_title[0].text}/>
                        </Link>
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