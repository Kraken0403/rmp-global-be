import React from 'react';
import BlogsList from '../components/BlogsList';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import '../components/BlogsList.scss'
import Scroll from '../components/Scroll';
import Breadcrumbs from '../components/Breadcrumbs';
import { useAllPrismicDocumentsByType } from '@prismicio/react'

function Blogs() {
  
  const [documents] = useAllPrismicDocumentsByType('blog');

  return (
    <Scroll>
        <div>
      
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
    </Scroll>
  );
}

export default Blogs;
