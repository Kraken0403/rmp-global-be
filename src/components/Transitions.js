import React from 'react'
import { motion } from "framer-motion";
import logo from '../assets/logo-2.png'
import ScrollToTop from './ScrollToTop'

function Transitions({children}) {

    const scroll = () => {
        window.scrollTo(0, 0)
    }
  return (
    <>
    <motion.div
    className='page-temp'
     key="page"
    initial= {{scale: 1.03}}
    animate= {{scale: 1}}
    exit= {{scale: 1.03}}
    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
     >
        {children}
    </motion.div>


    <motion.div
        key="modal"
        initial={{y: '0%'} }
        animate={{y: '-100%'}}
        exit={{y: '0%'}}
        onAnimationStart={scroll}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="overlay-1"
    >       
        <div className="trans-logo">
            <img src={logo} alt="" />
        </div>

    </motion.div>
    
    </>
    
  )
}

export default Transitions