import React, {useEffect} from 'react'
import AboutLeader from '../components/AboutLeader'
import AboutMain from '../components/AboutMain'
import Breadcrumbs from '../components/Breadcrumbs'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Team from '../components/Team'
import WhyUs from '../components/WhyUs'
import CursorFollower from '../components/CursorFollower'
import Transitions from '../components/Transitions'
// import Transitions from '../components/Transitions'
// import transition from '../components/transition'
import ReactGA from 'react-ga';
// import ReactWhatsapp from 'react-whatsapp'

function About() {
  useEffect(()=> {
    ReactGA.pageview(window.location.pathname);

  }, [])
  return (
          <Transitions>
          {/* <ReactWhatsapp number="+919512453532" message="Hello World!!!" /> */}

            <CursorFollower/>
            <Header/>
            <Hero caption="Who we are" title="Get to know us"/>
            <Breadcrumbs page="About Us"/>
            <AboutMain/>
            <AboutLeader/>
            <Team bg='#f5f5f5'/>
            <WhyUs/>
            <Footer/>
          </Transitions>
  )
}

export default About