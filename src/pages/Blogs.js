import React, {useEffect} from 'react';
import BlogsList from '../components/BlogsList';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import '../components/BlogsList.scss'
import Breadcrumbs from '../components/Breadcrumbs';
import { useAllPrismicDocumentsByType } from '@prismicio/react'
import CursorFollower from '../components/CursorFollower'
import Transitions from '../components/Transitions'
import ReactGA from 'react-ga'
import { Helmet } from 'react-helmet'

function Blogs() {  
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  })
  
  const [documents] = useAllPrismicDocumentsByType('blog');
  return (

    <Transitions>
      <Helmet>
        <title>RMP Global Blogs</title>
      </Helmet>
        <div>
          <CursorFollower/>
            <Header/>
            <Hero caption="Our Blogs" title="Check out our Blogs"/>
            <Breadcrumbs page="blogs"/>
            <div className="blogs-list-wrapper-main">
              {documents ? (
                  <BlogsList blogData={documents} />
                ) : (
                  <p>Loading...</p>
                )}
            </div>
            <Footer/>
        </div>
      </Transitions>
 
  );
}

export default Blogs;
