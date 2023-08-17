import React from 'react'
import './BlogCard.scss'
import sample from '../assets/sample.png'
import arrow from '../assets/arrow.png'

function BlogCard(props) {
  return (
    <div className="blogcard">
        <div className="blogcard-img">
            <img src={props.image} alt="" />
        </div>

        <div className="blogcard-content">
            <p>{props.title}</p>

            <div className="blogcard-cta">
                <div className="blogcard-info">
                    <h4>{props.name}</h4>
                    <p>{props.occupation}</p>
                </div>

                <div className="arrow-round">
                    <img src={arrow} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogCard