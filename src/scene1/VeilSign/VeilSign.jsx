import React from 'react';
import {motion} from 'framer-motion';
import variants from './variants';
import veilSign from './../media/veil-sign.png';
import { useDevice } from '../../Queries/DeviceContext';

const VeilSign = () => {
  const {
    prefix,
  } = useDevice();

  return (
    <>
      <motion.img
        variants={variants}
        initial={`${prefix}Initial`}
        src={veilSign}
     />
      <motion.img
        variants={variants}
        initial={`${prefix}Initial`}
        src={veilSign}
     />
    </>
  );
};

export default VeilSign;