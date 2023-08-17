import React from 'react'
import AboutLeader from '../components/AboutLeader'
import AboutMain from '../components/AboutMain'
import Breadcrumbs from '../components/Breadcrumbs'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Insights from '../components/Insights'
import Scroll from '../components/Scroll'
import Team from '../components/Team'
import WhyUs from '../components/WhyUs'

function About() {
  return (
    <Scroll>
      <div>
          <Header/>
          <Hero caption="Who we are" title="Get to know us"/>
          <Breadcrumbs page="About Us"/>
          <AboutMain/>
          <AboutLeader/>
          <Team bg='#f5f5f5'/>
          <WhyUs/>
          <Footer/>
      </div>
    </Scroll>
  )
}

export default About