"use client";

import { FC } from "react";
import { Poppins } from "next/font/google";
import { motion } from "framer-motion";
import classes from "./AboutHeader.module.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["700"] });

const AboutHeader: FC = ({}) => {
  return (
    <div className="w-full h-screen relative">
      <motion.div
        id="orange"
        layout
        className={`w-[35rem] h-[35rem] bg-orange-200 rounded-full absolute left-1/4 -translate-x-1/3 blur-2xl ${classes.orange}`}
      ></motion.div>
      <motion.div
        id="purple"
        layout
        className={`w-96 h-96 bg-purple-200 rounded-full absolute left-2/3 -translate-x-1/3 bottom-1/4 translate-y-1/3 blur-2xl ${classes.purple}`}
      ></motion.div>
      <h1
        className={`text-6xl font-bold ${poppins.className} absolute top-1/2 left-1/2 -translate-x-1/2 leading-tight tracking-tight text-slate-700 text-center w-full -translate-y-1/2 `}
      >
        Pyhsical Therapy <br />
        <span className="text-gray-500 ">Egzersiz ve Danışmanlık Merkezi</span>
      </h1>
    </div>
  );
};

export default AboutHeader;
