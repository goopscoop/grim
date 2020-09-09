import React from 'react';
import {motion} from 'framer-motion';
import tag from '../media/topBecomes.png'
import { useDevice } from '../../Queries/DeviceContext';
import variants from './variants';

const Tag = () => {
  const {
    isMobile,
    prefix
  } = useDevice();

  return (
    <motion.img
      src={tag}
      variants={variants}
      initial={`${prefix}Initial`}
      animate={`${prefix}Initial`} />
  );
};

export default Tag;