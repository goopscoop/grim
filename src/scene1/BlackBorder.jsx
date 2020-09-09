import React from 'react';
import {motion} from 'framer-motion';
import blackBorder from './media/black-border.png'

const style = {
  position: 'absolute',
  display: 'inline',
  zIndex: 1,
  left: 0,
  top: 0,
  height: '100%',
  width: '100%',
};

const variants = {
  visible: {
    opacity: 1
  },
  hidden: {
    opacity: 0
  }
}

// looks good in all dementions
// to do: load different images based on screen width
const BlackBorder = () => <motion.img
  initial='hidden'
  animate='visible'
  variants={variants}
  src={blackBorder}
  style={style}
  transition={{duration: 1.5}}
/>;

export default BlackBorder;