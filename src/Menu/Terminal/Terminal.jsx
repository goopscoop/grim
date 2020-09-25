import React from 'react';
import {motion,AnimatePresence} from 'framer-motion';
import {container, glitch, glow, scanlines} from './terminal.module.scss';
import {computerwriting} from '../../App.module.scss'
import { useSpeech } from '../../common/speech/SpeechContext';
import { useDevice } from '../../Queries/DeviceContext';

const WelcomeMessage = () => {
  const {allieSpeech} = useSpeech();
  const {prefix} = useDevice();

  return (
    <>
      <motion.div className={`${container} ${prefix}TerminalSize`}>
        <AnimatePresence>
          {
            allieSpeech && (
              // This needs to animate in/out
              <motion.div
                exit={{
                  opacity: 0
                }}
              >
                <div
                  className={`${glitch} ${computerwriting}`}
                  data-text={allieSpeech}
                  >
                  {allieSpeech}
                </div>
                <div className={`${glow} ${computerwriting}`}>
                  {allieSpeech}
                </div>
              </motion.div>
            )
          }
        </AnimatePresence>
      </motion.div>
      <div className={scanlines}></div>
    </>
  );
};

export default WelcomeMessage;