import React, {useEffect} from 'react'
import MyBookContent from '../components/MyBookContent'
// import BlogHero from '../components/BlogHero'
import Footer from '../components/Footer'
import Header from '../components/Header'
// import Hero from '../components/Hero'
import ServicesHero from '../components/ServicesHero'
import CursorFollower from '../components/CursorFollower'
import Transitions from '../components/Transitions'
import ReactGA from 'react-ga'

function BookKeeping() {

  useEffect(()=>{
    ReactGA.pageview(window.location.pathname);
  }, [])

  return (
      
    <Transitions>
      <div>
          <CursorFollower/>

          <Header color='#020e12'/>
          <ServicesHero title="BookKeeping"/>
          <MyBookContent/>
          {/* <Insights/> */}
          <Footer/>
      </div>
    </Transitions>
  )
}

export default BookKeeping