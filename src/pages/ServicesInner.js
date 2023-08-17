import React from 'react'
// import BlogHero from '../components/BlogHero'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Insights from '../components/Insights'
import ServicesContent from '../components/ServicesContent'
// import Hero from '../components/Hero'
import ServicesHero from '../components/ServicesHero'

function ServicesInner() {
  return (
    <div>
        <Header color='#020e12'/>
        <ServicesHero/>
        <ServicesContent/>
        <Insights/>
        <Footer/>
    </div>
  )
}

export default ServicesInner