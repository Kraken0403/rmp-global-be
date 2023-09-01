import React, { useState, useEffect } from 'react';
import BlogContent from '../components/BlogContent';
import BlogHero from '../components/BlogHero';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useParams } from 'react-router-dom';
import config from '../config';

import { usePrismicDocumentByUID } from '@prismicio/react'


function BlogInner() {

  
  const { id } = useParams();

  const [doc] = usePrismicDocumentByUID('blog', id)

  console.log(doc)

  useEffect(() => {
    
  }, []);

  return (
    <div>
      <Header color='#020e12' />
      {doc ? (
          <>
            <BlogHero blog={doc}/>
            <BlogContent blog={doc} />
          </>
        ) : (
              <p>Loading...</p>
            )}
        
      
      <Footer />
    </div>
  );
}

export default BlogInner;
