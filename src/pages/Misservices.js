import React from 'react'
import BookContent from '../components/MyBookContent'
// import BlogHero from '../components/BlogHero'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Insights from '../components/Insights'
// import Hero from '../components/Hero'
import ServicesHero from '../components/ServicesHero'
import Mis from '../components/Mis'
import CursorFollower from '../components/CursorFollower'

import Transitions from '../components/Transitions'
function Misservices() {
  return (
    <Transitions>
    <div>
      <CursorFollower/>
        <Header color='#020e12'/>
        <ServicesHero title="MIS"/>
        <Mis/>
        {/* <Insights/> */}
        <Footer/>
    </div>
    </Transitions>
  )
}

export default Misservices