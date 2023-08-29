import React from 'react'
import Container from '../components/Container'
import Header from '../components/Header'
import HomeHero from '../components/HomeHero'
import HomeServices from '../components/HomeServices'
// import Insights from '../components/Insights'
import Title from '../components/Title'
import WhyUs from '../components/WhyUs'
import Footer from '../components/Footer'
import Scroll from '../components/Scroll'
import Insights from '../components/Insights'

function Home() {
  return (
    <Scroll>
        <div data-scroll-section>
          <Header/>
          <HomeHero/>
          <Title title="Select our Services or our Products and see if we're a good fit."/>
          <HomeServices/>
          <WhyUs/>
          {/* <Insights/> */}
          <Footer/>
        </div>
    </Scroll> 
  )
}

export default Home