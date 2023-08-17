import React, { useState, useEffect } from 'react';
import BlogCard from './BlogCard'
import config from '../config';
import Container from './Container';
import {Row, Col} from 'react-bootstrap'
import './BlogsList.scss'
import { format } from 'date-fns';

import { Link } from 'react-router-dom';

function BlogsList() {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const bearerToken = config.bearerToken;
    const apiUrl = 'https://rmp-strapi.onrender.com/api/blogs?populate=*';

    fetch(apiUrl, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${bearerToken}`
      }
    })
    .then(response => response.json())
    .then(data => {
      setData(data.data);
      console.log(data.data)
  
      setIsLoading(false); 
    })
    .catch(error => {
      console.error(error);
      setIsLoading(false); 
    });
  }, []);

  return (
    <div className='blogs-list'>
        <Container>
           
        {isLoading ? (
            <p>Loading...</p>
            ) : (
                <Row>
                    {
                        data.map(blog=>(
                            <Col md={3} className="blogcard-margin" key={blog.id}>
                                <Link to={`/blogs/${blog.id}`}>
                                    <BlogCard name='Blog' occupation={format(new Date(blog.attributes.Date), 'MMM dd, yyyy')} key={blog.id} image={`https://rmp-strapi.onrender.com${blog.attributes.CoverImg.data.attributes.url}`} 
                                    title={blog.attributes.BlogTitle}/>
                                </Link>
                                
                            </Col>   
                        ))
                    }
                </Row> 
            )
        }
         
        </Container>
        
    </div>
  )
}

export default BlogsList