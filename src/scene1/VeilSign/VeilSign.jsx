import React from 'react';
import {motion} from 'framer-motion';
import variants from './variants';
import veilSign from './../media/veil-sign.png';
import { useDevice } from '../../Queries/DeviceContext';
import { useSpeech } from '../../common/speech/SpeechContext';

const VeilSign = () => {
  const {prefix} = useDevice();
  const {beginConversation} = useSpeech();

  const handleOnHover = () => {
    beginConversation('veilSignHover')
  };

  const onClick = () => {
    beginConversation('veilClick1');
  };

  return (
    <>
      <motion.div
        variants={variants}
        onHoverStart={handleOnHover}
        onClick={onClick}  
      >
        <motion.img
          whileHover={`hover`}
          variants={variants}
          initial={`${prefix}Initial`}
          animate={`${prefix}Initial`}
          whileTap={'tap'}
          src={veilSign}
        />
      </motion.div>
    </>
  );
};

export default VeilSign;