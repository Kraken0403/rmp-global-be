import React from 'react'
import './ServicesContent.scss'
function FeatureBox(props) {
  return (
    <div className="feature-box">
        <div className="icon-box">
            <h2>
                {props.title}
            </h2>
        </div>
        <p>
            {props.content}
        </p>

    </div>
  )
}

export default FeatureBox