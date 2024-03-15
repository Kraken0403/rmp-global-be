import React from 'react'
// import BlogHero from '../components/BlogHero'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Insights from '../components/Insights'
import ServicesContent from '../components/VirtualCFOContent'
// import Hero from '../components/Hero'
import ServicesHero from '../components/ServicesHero'
import VirtualCFOContent from '../components/VirtualCFOContent'
import CursorFollower from '../components/CursorFollower'
import Transitions from '../components/Transitions'
function VirtualCFO() {
  return (
    <Transitions>
    <div>
      <CursorFollower/>
        <Header color='#020e12'/>
        <ServicesHero title='Virtual CFO'/>
        <VirtualCFOContent/>
        {/* <Insights/> */}
        <Footer/>
    </div>
    </Transitions>
  )
}

export default VirtualCFO