import React from 'react';
import { motion } from 'framer-motion';

const transition = (OgComponent) => {
  return () => {
    return (
      <>
        <OgComponent />
        <motion.div
        key='mounting'
          className='slide-in'
          initial={{ scaleX: 1 }}
          animate={{ scaleX:  0}} // Change to scaleY: 1 to make it visible initially
          exit={{ scaleX: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div
        key='unmounting'
          className='slide-out'
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0 }} // Change to scaleY: 0 to make it invisible when exiting
          exit={{ scaleX: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
      </>
    );
  };
};

export default transition;
