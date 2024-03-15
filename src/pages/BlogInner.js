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
import { Helmet } from 'react-helmet';

function BlogInner() {

  const { slug } = useParams();
  const [doc] = usePrismicDocumentByUID('blog', slug)

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <>
    {doc ? (
      console.log(doc),
    <Transitions>
          <Helmet>
            <title>{doc.data.blog_title[0].text}</title>
            <meta name="og:title" content={doc.data.blog_title[0].text}/>
            <meta name="og:image" content={doc.data.blog_image.url} data-react-helmet="true"/>
            <meta name="og:description" content={doc.data.blog_description[0].text} data-react-helmet="true"/>
          </Helmet>
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
