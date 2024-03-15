import React from 'react'
// import BlogHero from '../components/BlogHero'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Insights from '../components/Insights'
// import Hero from '../components/Hero'
import ServicesHero from '../components/ServicesHero'
import TaxContent from '../components/TaxContent'
import DataLabelling from '../components/DataLabelling'
import Transitions from '../components/Transitions'
import CursorFollower from '../components/CursorFollower'

function DataLabellingService() {
  return (
      <Transitions>
        <div> 
          <CursorFollower/>
            <Header color='#020e12'/>
            <ServicesHero title="Data Labelling"/>
            <DataLabelling/>
            {/* <Insights/> */}
            <Footer/>
        </div>
        </Transitions>
  )
}

export default DataLabellingService