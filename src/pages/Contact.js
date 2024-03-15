import React, { useEffect } from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import ContactMain from '../components/ContactMain'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import CursorFollower from '../components/CursorFollower'
import Transitions from '../components/Transitions'
import ReactGA from 'react-ga'
// import 

function Contact() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, [])
  return (
      <Transitions>
        <div>
          <CursorFollower/>
            <Header/>
            <Hero caption="Contact Us" title="Let's Work Together"/>
            <Breadcrumbs page="Contact Us"/>
            <ContactMain/>
            <Footer/>
        </div>
      </Transitions>
  )
}

export default Contact