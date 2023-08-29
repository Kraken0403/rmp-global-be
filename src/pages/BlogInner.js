import React, { useState, useEffect } from 'react';
import BlogContent from '../components/BlogContent';
import BlogHero from '../components/BlogHero';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useParams } from 'react-router-dom';
import config from '../config';

function BlogInner() {
  const { id } = useParams();

  const [blogData, setBlogData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const bearerToken = config.bearerToken;
    const apiUrl = `https://rmp-strapi.onrender.com/api/blogs/${id}?populate=*`;

    fetch(apiUrl, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${bearerToken}`
      }
    })
    .then(response => response.json())
    .then(data => {
      setBlogData(data);
      setIsLoading(false);
    })
    .catch(error => {
      console.error(error);
      setIsLoading(false);
    });
  }, [id]);

  return (
    <div>
      <Header color='#020e12' />
      {isLoading ? (
        <p>Loading...</p> // Display a loading message or a spinner
      ) : (
        <>
            <BlogHero blog={blogData}/>
            <BlogContent blog={blogData} />

        </>
        
      )}
      <Footer />
    </div>
  );
}

export default BlogInner;
