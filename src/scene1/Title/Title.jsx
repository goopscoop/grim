import React from 'react';
import { motion } from 'framer-motion';
import variants from './variants';
import title from '../media/title.png';
import { useDevice } from '../../Queries/DeviceContext';

const Title = () => {
  const {
    prefix,
  } = useDevice();

  const handleOnClick = () => {

  };

  return <motion.img
    src={title}
    variants={variants}
    initial={`${prefix}Hidden`}
    animate={`${prefix}Animate`}
    whileHover={`${prefix}Hover`}
    whileTap={`${prefix}Tap`}
    onClick={handleOnClick}
    transition={{duration: 2}}
  />;
}

export default Title;