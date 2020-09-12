import React from 'react';
import {motion} from 'framer-motion';
import {container, glitch, glow, scanlines} from './terminal.module.scss';
import {computerwriting} from '../../App.module.scss'

const WelcomeMessage = () => {
  const style = {
    marginTop: '3em',
    marginLeft: '1em'
  };

  return (
    <>
      <div className={container}>
        <div className={`${glitch} ${computerwriting}`} data-text="Hello Kult, what can I *chrt do for you?">Welcome Kult, what can I *<em>chrrt</em>* do for you?</div>
        <div className={`${glow} ${computerwriting}`}>Hello Kult, what can I *chrrt* do for you?</div>
      </div>
      <div className={scanlines}></div>
    </>
  );
};

export default WelcomeMessage;