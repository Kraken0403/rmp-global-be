import React, { useEffect } from 'react';
import BlogContent from '../components/BlogContent';
import BlogHero from '../components/BlogHero';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useParams } from 'react-router-dom';
import { usePrismicDocumentByUID } from '@prismicio/react'
import CursorFollower from '../components/CursorFollower'
import Transitions from '../components/Transitions'
import ReactGA from 'react-ga'


function BlogInner() {

  const { slug } = useParams();
  const [doc] = usePrismicDocumentByUID('blog', slug)

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <>
    {doc ? (
    <Transitions>

          <CursorFollower/>
          <Header color='#020e12' />
          <BlogHero blog={doc}/>
          <BlogContent blog={doc} />
          <Footer />
       
        
      </Transitions>  
      ) : (
        <p>Loading...</p>
      )}

    </>
    
  );
}

export default BlogInner;
