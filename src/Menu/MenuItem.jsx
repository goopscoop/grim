import * as React from "react";
import { motion } from "framer-motion";

import {menuItem, li} from './menu.module.scss';
import {handwriting} from '../App.module.scss'

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export const MenuItem = ({children}) => {
  const style = {
    fontSize: '3em'
  };
  return (
    <motion.li
      className={li}
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className={`${menuItem} ${handwriting}`} style={style}>
        {'> ' + children}
      </div>
    </motion.li>
  );
};