"use client";

import { FC, useContext } from "react";
import { uiContext } from "@/context/uiControl";
import classes from "./Modal.module.css";
import { motion, AnimatePresence } from "framer-motion";

interface ModalProps {
  children: React.ReactNode;
}

const Modal: FC<ModalProps> = ({ children }) => {
  const uiCtx = useContext(uiContext);

  return (
    <AnimatePresence>
      {uiCtx.isInputModalShow && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={classes.container}
        >
          <div className={classes.shadow} onClick={uiCtx.hideInputModal}></div>
          <motion.div
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            className={classes.children}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
