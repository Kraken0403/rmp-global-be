import React from 'react'
import Container from './Container'
import { Link } from 'react-router-dom'
import arrow from '../assets/Arrow 2.png'
import {Row, Col} from 'react-bootstrap'
import './Insights.scss'
import BlogCard from './BlogCard'
import BlogsList from './BlogsList'

function Insights() {
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut sagittis libero. Sed dignissim vitae risus et imperdiet. Duis facilisis massa ac orci aliquet interdum. Ut non leo ornare, hendrerit diam nec, euismod nisl. Suspendisse potenti. Morbi eu mauris ultrices, feugiat tortor a, ornare quam. Morbi id efficitur massa, eu malesuada tellus.
                    </p>

                    <div className="normal-link">
                        <Link>
                            <div className="normal-link-wrapper">
                                <p>Explore</p>
                                <img src={arrow} alt="" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </Container>
      
        <BlogsList/>
           
    </div>
  )
}

export default Insights