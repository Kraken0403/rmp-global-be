import React from 'react';
import BlogsList from '../components/BlogsList';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import '../components/BlogsList.scss'
import Scroll from '../components/Scroll';
import Breadcrumbs from '../components/Breadcrumbs';

function Blogs() {

  return (
    <Scroll>
        <div>
            <Header/>
            <Hero caption="Our Blogs" title="Check out our Blogs"/>
            <Breadcrumbs page="blogs"/>
            <div className="blogs-list-wrapper-main">
                <BlogsList/>
            </div>
            <Footer/>
        </div>
    </Scroll>
  );
}

export default Blogs;
