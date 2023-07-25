"use cliet";

import { FC, useEffect } from "react";
import classes from "./Toast.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { GrClose } from "react-icons/gr";
import { AiOutlineLoading } from "react-icons/ai";
import { BsCheckCircle, BsXCircle } from "react-icons/bs";

let first = false;

interface ToastProps {
  position?: "top-right" | "top-left" | "bottom-left" | "bottom-right";
  children?: React.ReactNode;
  open: boolean;
  setOpen: (state: boolean) => void;
  title?: string;
  duration?: number;
  isLoading?: boolean;
  isError?: boolean;
  isSuccsess?: boolean;
  pendingMessage?: string;
  errorMessage?: string;
  succsessMessage?: string;
}

const Toast: FC<ToastProps> = ({
  children,
  title,
  open,
  setOpen,
  duration,
  isError,
  isLoading,
  isSuccsess,
  pendingMessage,
  errorMessage,
  succsessMessage,
}) => {
  useEffect(() => {
    if (isSuccsess || isError) {
      const timeout = setTimeout(() => {
        setOpen(false);
      }, duration);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [isError, isLoading, isSuccsess]);

  return (
    <div className={classes.viewport}>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            className={classes.root}
            transition={{ type: "keyframes" }}
          >
            {title && (
              <div>
                <h3 className={classes.title}>{title}</h3>
              </div>
            )}
            {children}
            <AnimatePresence>
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={classes.alert}
                >
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, type: "keyframes" }}
                    className={classes.alertIcon}
                  >
                    <AiOutlineLoading />
                  </motion.span>
                  <p>{pendingMessage}</p>
                </motion.div>
              )}
              {isError && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={classes.alert}
                >
                  <motion.span className={classes.error}>
                    <BsXCircle />
                  </motion.span>
                  <p className={`${classes.error} ${classes.alertIcon}`}>
                    {errorMessage}
                  </p>
                </motion.div>
              )}
              {isSuccsess && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={classes.alert}
                >
                  <motion.span
                    className={`${classes.succses} ${classes.alertIcon}`}
                  >
                    <BsCheckCircle />
                  </motion.span>
                  <p className={classes.succses}>{succsessMessage}</p>
                </motion.div>
              )}
            </AnimatePresence>
            <span
              className={classes.closeButton}
              onClick={() => {
                setOpen(false);
              }}
            >
              <GrClose />
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Toast;
