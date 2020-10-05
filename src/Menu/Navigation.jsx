import * as React from "react";
import {motion} from "framer-motion";
import {MenuItem} from "./MenuItem";
import {ul} from './menu.module.scss';
import { useSpeech } from "../common/speech/SpeechContext";
import { useHandleClickProgression } from "../common/utils";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Navigation = () => {
  const {
    handleClickProgression: scbarrusClick
  } = useHandleClickProgression('scbarrusClick');
  const {
    handleClickProgression: veilSignClick
  } = useHandleClickProgression('whatIsVeilSignClick');
  const {
    handleClickProgression: nihilistClick
  } = useHandleClickProgression('nihilistClick');
  const {beginConversation} = useSpeech()
  return (
    <motion.ul className={ul} variants={variants}>
      <MenuItem
        onHoverStart={() => beginConversation('whatIsVeilSignHover')}
        onClick={veilSignClick}
      >Veil Sign</MenuItem>
      <MenuItem
        onHoverStart={() => beginConversation('nihilistHover')}
        onClick={nihilistClick}
      >Nihilists</MenuItem>
      <MenuItem
        onHoverStart={() => beginConversation('scbarrusHover')}
        onClick={scbarrusClick}
      >The Fringes</MenuItem>
      <MenuItem
        onHoverStart={() => beginConversation('fringesHover')}
        onClick={scbarrusClick}
      >S.C. Barrus</MenuItem>
    </motion.ul>
  );
};
