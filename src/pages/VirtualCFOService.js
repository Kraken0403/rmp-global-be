import React from 'react'
import CursorFollower from '../components/CursorFollower'
// import BlogHero from '../components/BlogHero'
import Footer from '../components/Footer'
import Header from '../components/Header'
// import Hero from '../components/Hero'
import ServicesHero from '../components/ServicesHero'

import VirtualCFOser from '../components/VirtualCFOser'

function VirtualCFOService() {
  return (
    <div>
      <CursorFollower/>
        <Header color='#020e12'/>
        <ServicesHero title="Tax Compliance"/>
        <VirtualCFOser/>
        {/* <Insights/> */}
        <Footer/>
    </div>
  )
}

export default VirtualCFOService