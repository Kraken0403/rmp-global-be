import React from 'react'
import './Breadcrumbs.scss'

function Breadcrumbs(props) {
  return (
    <div className='breadcrumbs'>
        <p>
            <span>Home&nbsp;&nbsp; / </span> &nbsp; &nbsp; {props.page}
        </p>
    </div>
  )
}

export default Breadcrumbs