import React, {useState, useEffect} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {speechBubble, clickText} from './speechbubble.module.scss';
import { useDevice } from '../../Queries/DeviceContext';
import variants from './variants';
import { useSpeech } from './SpeechContext';

const textProps = {
  initial:'hide',
  animate:'show',
  exit:'hide',
  variants: {
    show: {
      opacity: 1,
      duration: 1.3
    },
    hide: {
      opacity: 0,
      duration: 0.25
    }
  },
  style: {
    margin: 0
  }
};

const SpeechBubble = () => {
  const {
    prefix
  } = useDevice();
  const {
    show,
    currentSpeech,
    hideMessage
  } = useSpeech();

  const handleClick = () => {
    hideMessage();
  };

  return (
    <AnimatePresence>
      {
        show && (
        <motion.blockquote
          className={speechBubble}
          variants={variants}
          initial='initial'
          whileHover='hover'
          whileTap='tap'
          exit='exit'
          animate={`${prefix}Animate`}
          transition={{duration: 0.5}}
          onClick={handleClick}
        >
          <motion.p
            {...textProps}
          >
            {currentSpeech}
          </motion.p>
          <motion.span
            {...textProps}
            className={clickText}>Click or Spacebar to dismiss</motion.span>
        </motion.blockquote>)
      }
    </AnimatePresence>
  );
};

export default SpeechBubble;