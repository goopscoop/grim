import React from 'react';
import {motion} from 'framer-motion';
import {container, speechBubble, bubble, pointer, blurred} from './speechbubble.module.scss';



const SpeechBubble = ({text}) => {
  return (
    <motion.blockquote className={speechBubble}>
      <p>{text}</p>
    </motion.blockquote>
  );
};

export default SpeechBubble;