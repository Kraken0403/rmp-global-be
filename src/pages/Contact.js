import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import ContactMain from '../components/ContactMain'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Scroll from '../components/Scroll'
// import 

function Contact() {
  return (
    <Scroll>
      <div>
          <Header/>
          <Hero caption="Contact Us" title="Let's Work Together"/>
          <Breadcrumbs page="Contact Us"/>
          <ContactMain/>
          <Footer/>
      </div>
    </Scroll>
  )
}

export default Contact