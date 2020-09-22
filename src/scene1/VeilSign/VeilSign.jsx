import React from 'react';
import {motion} from 'framer-motion';
import variants from './variants';
import veilSign from './../media/veil-sign.png';
import { useDevice } from '../../Queries/DeviceContext';
import { useSpeech } from '../../common/SpeechBubble/SpeechContext';

const VeilSign = () => {
  const {prefix} = useDevice();
  const {beginConversation} = useSpeech();

  const handleOnHover = () => {
    beginConversation(['Veil sign...'])
  };

  const onClick = () => {
    beginConversation(['...something from another reality saying hello.', 'I knew it existed.']);
  }

  return (
    <>
      <motion.div
        onHoverStart={handleOnHover}
        onClick={onClick}
      >
        <motion.img
          variants={variants}
          initial={`${prefix}Initial`}
          animate={`${prefix}Initial`}
          src={veilSign}
          />
        <motion.img
          variants={variants}
          initial={`${prefix}Initial`}
          animate={`${prefix}Initial`}
          src={veilSign}
        />
      </motion.div>
    </>
  );
};

export default VeilSign;