import React from 'react'
// import BlogHero from '../components/BlogHero'
import Footer from '../components/Footer'
import Header from '../components/Header'
// import Hero from '../components/Hero'
import ServicesHero from '../components/ServicesHero'
import TaxContent from '../components/TaxContent'
import CursorFollower from '../components/CursorFollower'
import Transitions from '../components/Transitions'
import NormalContent from '../components/NormalContent'
function DataSecurity() {
  return (
    <Transitions>
    <div>
      <CursorFollower/>
        <Header color='#020e12'/>
        <ServicesHero title="Data Security"/>
        <NormalContent />
        {/* <TaxContent/> */}
        {/* <Insights/> */}
        <Footer/>
    </div>
    </Transitions>
  )
}

export default DataSecurity