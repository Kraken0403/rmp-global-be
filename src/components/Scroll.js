import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.min.css';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { duration } from '@mui/material';

gsap.registerPlugin(ScrollTrigger);

function Scroll({ children, scrollY }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    let scrollInstance;

    const initializeScroll = () => {
      scrollInstance = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        multiplier: 1,
        class: 'ls-reveal',
        mobile: {
          smooth: true
        },
        tablet: {
          smooth: true
        }
      });

      scrollInstance.on('scroll', (args) => {
        const scrollY = args.scroll.y;
       
        // gsap.to('.ah-title h1', {
        //   x: -scrollY,
        //   duration: 0.5
        // })

      });

    };

    const timeoutId = setTimeout(initializeScroll, 300);

    return () => {
      clearTimeout(timeoutId);
      scrollInstance?.destroy();
    };
  }, []);

  return (
    <div ref={scrollRef} id="main" data-scroll-container>
      {children}
    </div>
  );
}

export default Scroll;
