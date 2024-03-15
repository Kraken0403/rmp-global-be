import React from 'react'
// import BlogHero from '../components/BlogHero'
import Footer from '../components/Footer'
import Header from '../components/Header'
// import Hero from '../components/Hero'
import ServicesHero from '../components/ServicesHero'

import DataAnalytics from '../components/DataAnalytics'

import CursorFollower from '../components/CursorFollower'
import Transitions from '../components/Transitions'

function DataAnalyticsService() {
  return (
    <Transitions>
    <div> 
      <CursorFollower/>
        <Header color='#020e12'/>
        <ServicesHero title="Data Analytics"/>
        <DataAnalytics/>
        {/* <Insights/> */}
        <Footer/>
    </div>
    </Transitions>
  )
}

export default DataAnalyticsService