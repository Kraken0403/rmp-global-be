import React from 'react'
// import BlogHero from '../components/BlogHero'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Insights from '../components/Insights'
// import Hero from '../components/Hero'
import ServicesHero from '../components/ServicesHero'
import TaxContent from '../components/TaxContent'
import FinancialStatement from '../components/FinancialStatement '
import Scroll from '../components/Scroll'
import CursorFollower from '../components/CursorFollower'
import Transitions from '../components/Transitions'
function Financial() {
  return (

    <Transitions>
      <div>
        <CursorFollower/>
          <Header color='#020e12'/>
          <ServicesHero title="Financial"/>
          <FinancialStatement/>
          {/* <Insights/> */}
          <Footer/>
      </div>
    </Transitions>
  )
}

export default Financial