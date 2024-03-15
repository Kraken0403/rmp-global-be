import React, { useEffect } from 'react'
import Header from '../components/Header'
import HomeHero from '../components/HomeHero'
import HomeServices from '../components/HomeServices'
import Title from '../components/Title'
import WhyUs from '../components/WhyUs'
import Footer from '../components/Footer'
import Insights from '../components/Insights'
import { useAllPrismicDocumentsByType } from '@prismicio/react'
import CursorFollower from '../components/CursorFollower'
import Transitions from '../components/Transitions'
import ReactGA from 'react-ga';
import { Helmet } from 'react-helmet'

function Home() {
  useEffect(()=> {

    ReactGA.pageview(window.location.pathname);
  }, [])
  const [documents] = useAllPrismicDocumentsByType('blog');

  return (
 
      <Transitions>
        <Helmet>
          <title>Hey Now</title>
        </Helmet>
        <CursorFollower />
        <Header />
        <HomeHero />
        <Title title="Select our Services or our Products and see if we're a good fit." />
        <HomeServices />
        <WhyUs />
        {documents ? (
          <Insights blogData={documents} />
        ) : (
          <p>Loading...</p>
        )}
        <Footer />
      </Transitions>

  )
}

export default Home
