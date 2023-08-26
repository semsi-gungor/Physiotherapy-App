"use client";

import { FC } from "react";
import classes from "./LoadingDisababler.module.css";
import { CgSpinner } from "react-icons/cg";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  isLoading: boolean;
};

const LoadingDisababler: FC<Props> = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ type: "keyframes", duration: 0.2 }}
          className={classes.container}
        >
          <span className={classes.icon}>
            <CgSpinner />
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingDisababler;
