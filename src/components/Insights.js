import React from 'react'
import Container from './Container'
import { Link } from 'react-router-dom'
import arrow from '../assets/Arrow 2.png'
import {Row, Col} from 'react-bootstrap'
import './Insights.scss'
import BlogsList from './BlogsList'

function Insights(props) {
  return (
    <div className='insights'>
        <Container>
            <div className="inisghts-wrapper">
                <div className="insights-title">
                    <h2>
                        Blogs and Insights
                    </h2>
                </div>

                <div className="insights-content">
                    <p className='insights-content-main'>
                    Your go-to source for all things related to innovation, technology, and the exciting developments happening in our industry. At RMP Global, we are dedicated to pushing the boundaries of what's possible, and this blog is where we share our insights, expertise, and thought leadership with you.
                    </p>

                    <div className="normal-link">
                        <Link to='/blogs'>
                            <div className="normal-link-wrapper">
                                <p>Explore</p>
                                <img src={arrow} alt="" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </Container>
      
        <BlogsList blogData={props.blogData}/>
           
    </div>
  )
}

export default Insights