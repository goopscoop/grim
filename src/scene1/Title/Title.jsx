import React from 'react';
import { motion } from 'framer-motion';
import variants from './variants';
import title from '../media/title.png';
import { useDevice } from '../../Queries/DeviceContext';
import { useSpeech } from '../../common/speech/SpeechContext';

const Title = () => {
  const {
    prefix,
  } = useDevice();
  const {beginConversation} = useSpeech();

  const handleOnClick = () => {

  };
  // TODO: make images smaller so I'm not hovering without actually hovering
  // ??? Can a png not be square? ie fit the image perfectly?
  return <motion.img
    onHoverStart={() => beginConversation('titleHover')}
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