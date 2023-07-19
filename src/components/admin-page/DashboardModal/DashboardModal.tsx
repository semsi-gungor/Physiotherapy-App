"use client";

import { FC, useContext } from "react";
import { adminContext } from "@/context/adminContext";
import classes from "./DashboardModal.module.css";
import { motion, AnimatePresence } from "framer-motion";

interface ModalProps {
  children: React.ReactNode;
}

const DashboardModal: FC<ModalProps> = ({ children }) => {
  const adminCtx = useContext(adminContext);

  return (
    <AnimatePresence>
      {adminCtx.isInputModalShow && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={classes.container}
        >
          <div
            className={classes.shadow}
            onClick={adminCtx.hideInputModal}
          ></div>
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

export default DashboardModal;
