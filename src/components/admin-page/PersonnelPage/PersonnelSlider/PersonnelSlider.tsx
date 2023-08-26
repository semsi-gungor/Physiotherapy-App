"use client";

import { FC, useState } from "react";
import classes from "./PersonnelSlider.module.css";
import PersonnelForm from "../PersonnelForm/PersonnelForm";
import PersonnelTable from "../PersonnelTable/PersonnelTable";
import { motion, AnimatePresence } from "framer-motion";

interface PersonnelSliderProps {
  services: {
    id: string;
    serviceId: string;
    title: string;
    body: string;
    definition: string;
    treatments: string[];
    headerImage: string;
    bodyImage: string;
    personnelIDs: string[];
  }[];

  personnels: {
    id: string;
    title: string;
    appointmentCount: number;
    serviceIDs: string[];
    userId: string;
    user: {
      id: string;
      email: string;
      fullName: string;
      password: string;
      dob: string;
      tel: string;
      role: "PERSONNEL" | "ADMIN" | "USER";
    };
    services: {
      title: string;
    }[];
  }[];
}

const PersonnelSlider: FC<PersonnelSliderProps> = ({
  services,
  personnels,
}) => {
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
                Personel Kayıt
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
            <PersonnelTable personnels={personnels} />
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
            <PersonnelForm services={services} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PersonnelSlider;
