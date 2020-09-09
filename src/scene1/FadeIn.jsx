import React, {useState, useEffect} from 'react';
import { motion } from 'framer-motion';

const style = {
  position: 'absolute',
  backgroundColor: 'black',
  left: 0,
  height: '100%',
  width: '100%',
  zIndex: 1001
}

const variants = {
  visible: {
    opacity: 1
  },
  hidden: {
    opacity: 0
  }
};

const FadeIn = () => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHasAnimated(true)
    }, 5000)
  }, [])

  return hasAnimated ? null : (
    <motion.div
      style={style}
      initial='visible'
      animate='hidden'
      variants={variants}
      transition={{duration: 4}}
    />
  )
};

export default FadeIn