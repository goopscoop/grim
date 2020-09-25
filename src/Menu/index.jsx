import React, { useState, useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import Terminal from './Terminal/Terminal';
import {menuGradiant, nav} from './menu.module.scss';
import { useSpeech } from "../common/speech/SpeechContext";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

const Menu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [timesOpen, setTimesOpen] = useState(0);
  const {
    beginConversation
  } = useSpeech();
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const handleToggle = () => {
    toggleOpen();

    if (isOpen) {
      return;
    }

    switch (timesOpen) {
      case 0:
        beginConversation('terminal1');
        break;
      case 1:
        beginConversation('terminal2');
        break;
      default:
        return;
    }

    setTimesOpen(timesOpen + 1);
  };
  return (
    <motion.nav
      className={nav}
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <motion.div className={menuGradiant} variants={sidebar}>
        <Terminal />
      </motion.div>
      <Navigation />
      <MenuToggle toggle={handleToggle} />
    </motion.nav>
  );
};

export default Menu;