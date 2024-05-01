import React from 'react'
import './HomeHero.scss'
import hero from '../assets/sample2.jpg'
import CustomButton from './CustomButton'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import 'swiper/navigation.css'; // Navigation module
// import 'swiper/pagination.css';
import 'swiper/css/navigation'
import 'swiper/css';

function HomeHero() {
  return (
    <div className='home-hero'>
        <Swiper
            spaceBetween={0}
            slidesPerView={1}
            modules={[Autoplay, Pagination, Navigation]}
            navigation
            pagination = {{clickable: true}}
            arrows = "true"
            >
            <SwiperSlide>
                <div className='hero-slide'>
                    <div className="hero-image">
                        <img data-scroll data-scroll-speed="-1" className='bg-img' src={hero} alt="" />
                    </div>
                    <div className="hero-text">    
                        <h1 className='hero-title' data-scroll >
                            Dedicated Resources <br/>
                            
                        </h1>
                        <p className='hero-para' data-scroll  >
                        Maximize your project's potential with our Dedicated Resource service. Benefit from a committed team member solely focused on your objectivs, ensuring tailored solutions, undivided attention, and maximum efficiency. Elevate your outcomes with personalized support.

                        </p>
                        <div className="cta-btn" data-scroll data-scroll-delay="1" >
                            <Link to="/contact-us" >
                                <CustomButton text="Let's Work Together"/>
                            </Link>
                        </div>
                    </div>
                </div>
                
            </SwiperSlide>
            <SwiperSlide>
                <div className='hero-slide'>
                    <div className="hero-image">
                        <img data-scroll data-scroll-speed="-1" className='bg-img' src={hero} alt="" />
                    </div>
                    <div className="hero-text">    
                        <h1 className='hero-title' data-scroll >
                            Hourly Base
                        </h1>
                        <p className='hero-para' data-scroll   >
                        Experience flexibility and efficiency with our Hourly Base services. Pay for precisely what you need, when you need it, without any long-term commitments. Enjoy transparent pricing and unleash productivity on your terms.
                        </p>
                        <div className="cta-btn" data-scroll data-scroll-delay="1" >
                            <Link to="/contact-us" >
                                <CustomButton text='Book your consultaion'/>
                            </Link>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='hero-slide'>
                    <div className="hero-image">
                        <img className='bg-img' src={hero} alt="" />
                    </div>
                    <div className="hero-text">    
                        <h1 className='hero-title' data-scroll >
                            Project Base
                        </h1>
                        <p className='hero-para' data-scroll   >
                        Turn your vision into reality effortlessly with our Project Base solutions. Seamlessly execute projects from start to finish with our reliable and supportive approach. Experience peace of mind, quality, and success with our project-based model.
                        </p>
                        <div className="cta-btn" data-scroll data-scroll-delay="1" >
                            <Link to="/contact-us" >
                                <CustomButton text='Book your consultaion'/>
                            </Link>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default HomeHero