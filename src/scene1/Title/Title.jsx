import React from 'react';
import {motion} from 'framer-motion';
import variants from './variants';
import title from '../media/title.png';
import {useDevice} from '../../Queries/DeviceContext';
import {useSpeech} from '../../common/speech/SpeechContext';
import { useHandleClickProgression } from '../../common/utils';

const Title = () => {
  const {
    prefix,
  } = useDevice();
  const {handleClickProgression} = useHandleClickProgression('titleClick')
  const {beginConversation} = useSpeech();

  // TODO: make images smaller so I'm not hovering without actually hovering
  // ??? Can a png not be square? ie fit the image perfectly?
  return <motion.img
    onHoverStart={() => beginConversation('titleHover')}
    onClick={() => handleClickProgression()}
    src={title}
    variants={variants}
    initial={`${prefix}Hidden`}
    animate={`${prefix}Animate`}
    whileHover={`${prefix}Hover`}
    whileTap={`${prefix}Tap`}
    transition={{duration: 2}}
  />;
}

export default Title;