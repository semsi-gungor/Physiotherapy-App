"use client";

import { FC, useState } from "react";
import classes from "./ServicesSlider.module.css";
import { motion, AnimatePresence } from "framer-motion";
import ServicesForm from "../ServicesForm/ServicesForm";
import ServicesTable from "../ServicesTable/ServicesTable";

interface ServicesSliderProps {}

const ServicesSlider: FC<ServicesSliderProps> = ({}) => {
  const [isfirstSection, setIsFirstSection] = useState(true);

  return (
    <div className={classes.container}>
      <div className={classes.buttonContainer}>
        <button
          className={classes.button}
          onClick={() => {
            setIsFirstSection(!isfirstSection);
          }}
        >
          <AnimatePresence initial={false}>
            {isfirstSection && (
              <motion.p
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ bounce: 0 }}
              >
                Hizmet Oluştur
              </motion.p>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {!isfirstSection && (
              <motion.p
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 80 }}
                transition={{ bounce: 0 }}
              >
                Geri Dön
              </motion.p>
            )}
          </AnimatePresence>
        </button>
      </div>
      <AnimatePresence initial={false}>
        {isfirstSection && (
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ bounce: 0 }}
            className={classes.section}
          >
            <ServicesTable />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {!isfirstSection && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ bounce: 0 }}
            className={classes.section}
          >
            <ServicesForm />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServicesSlider;
