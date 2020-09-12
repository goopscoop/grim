import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import {ul} from './menu.module.scss'

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Navigation = () => (
  <motion.ul className={ul} variants={variants}>
    <MenuItem>S.C. Barrus</MenuItem>
    <MenuItem>Books</MenuItem>
    <MenuItem>What is this site?</MenuItem>
  </motion.ul>
);
