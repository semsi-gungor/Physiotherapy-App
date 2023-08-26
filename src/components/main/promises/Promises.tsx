"use client";

import { Poppins } from "next/font/google";
import { FC, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  BsFillCalendar2CheckFill,
  BsPersonVcardFill,
  BsFillClipboard2CheckFill,
  BsHSquareFill,
  BsHeartPulseFill,
  BsHouseHeartFill,
} from "react-icons/bs";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const Promises: FC = ({}) => {
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const isInViewFirst = useInView(firstRef, { once: true, amount: 1 });
  const isInViewSecond = useInView(secondRef, { once: true, amount: 1 });

  return (
    <div className="min-h-screen flex flex-col gap-16 p-8 items-center justify-center lg:h-screen">
      <h2 className="text-3xl font-bold text-[var(--color-6)] md:text-5xl">
        Biz neler vaat ediyoruz?
      </h2>

      <div className="w-full flex flex-col gap-4">
        <motion.div
          initial={{ height: 0 }}
          animate={{
            height: isInViewFirst ? "auto" : 0,
          }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="w-full flex flex-col gap-8 md:flex-row md:justify-center"
        >
          <div className="w-full h-full flex flex-col bg-zinc-700 rounded-md md:w-1/2 md:max-w-sm">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: isInViewFirst ? 1 : 0,
                transition: { duration: 0.5, delay: 1 },
              }}
              className=" flex items-center px-4 pt-4 gap-4"
            >
              <span className="text-lg bg-zinc-100 p-2 rounded-md">
                <BsFillCalendar2CheckFill />
              </span>
              <p className="text-base font-semibold text-zinc-300">
                Kişiye Özel Plan
              </p>
            </motion.div>
            <motion.p
              ref={firstRef}
              initial={{ opacity: 0 }}
              animate={{
                opacity: isInViewFirst ? 1 : 0,
                transition: { duration: 0.5, delay: 1 },
              }}
              className="text-sm p-4 text-zinc-300"
            >
              Kişiye Özel Fizik Tedavi Programı Kişiye özel antrenman programı,
              kişiye özel klinik pilates ve arkadaşınızla ya da eşinizle
              birlikte düet pilates. Tedavi seanslarımız tamamen kişiye özel
              olarak planlanmaktadır.
            </motion.p>
          </div>
          <div className="w-full h-full flex flex-col bg-zinc-700 rounded-md md:w-1/2 md:max-w-sm">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: isInViewFirst ? 1 : 0,
                transition: { duration: 0.5, delay: 1 },
              }}
              className=" flex items-center px-4 pt-4 gap-4"
            >
              <span className="text-lg bg-zinc-100 p-2 rounded-md">
                <BsFillCalendar2CheckFill />
              </span>
              <p className="text-base font-semibold text-zinc-300">
                Kişiye Özel Plan
              </p>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{
                opacity: isInViewFirst ? 1 : 0,
                transition: { duration: 0.5, delay: 1 },
              }}
              className="text-sm p-4 text-zinc-300"
            >
              Kişiye Özel Fizik Tedavi Programı Kişiye özel antrenman programı,
              kişiye özel klinik pilates ve arkadaşınızla ya da eşinizle
              birlikte düet pilates. Tedavi seanslarımız tamamen kişiye özel
              olarak planlanmaktadır.
            </motion.p>
          </div>
        </motion.div>
        <motion.div
          initial={{ height: 0 }}
          animate={{
            height: isInViewSecond ? "auto" : 0,
          }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="w-full flex flex-col gap-8 md:flex-row md:justify-center"
        >
          <div className="w-full h-full flex flex-col bg-zinc-700 rounded-md md:w-1/2 md:max-w-sm">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: isInViewSecond ? 1 : 0,
                transition: { duration: 0.5, delay: 2 },
              }}
              className=" flex items-center px-4 pt-4 gap-4"
            >
              <span className="text-lg bg-zinc-100 p-2 rounded-md">
                <BsFillCalendar2CheckFill />
              </span>
              <p className="text-base font-semibold text-zinc-300">
                Kişiye Özel Plan
              </p>
            </motion.div>
            <motion.p
              ref={secondRef}
              initial={{ opacity: 0 }}
              animate={{
                opacity: isInViewSecond ? 1 : 0,
                transition: { duration: 0.5, delay: 2 },
              }}
              className="text-sm p-4 text-zinc-300"
            >
              Kişiye Özel Fizik Tedavi Programı Kişiye özel antrenman programı,
              kişiye özel klinik pilates ve arkadaşınızla ya da eşinizle
              birlikte düet pilates. Tedavi seanslarımız tamamen kişiye özel
              olarak planlanmaktadır.
            </motion.p>
          </div>
          <div className="w-full h-full flex flex-col bg-zinc-700 rounded-md md:w-1/2 md:max-w-sm">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: isInViewSecond ? 1 : 0,
                transition: { duration: 0.5, delay: 2 },
              }}
              className=" flex items-center px-4 pt-4 gap-4"
            >
              <span className="text-lg bg-zinc-100 p-2 rounded-md">
                <BsFillCalendar2CheckFill />
              </span>
              <p className="text-base font-semibold text-zinc-300">
                Kişiye Özel Plan
              </p>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{
                opacity: isInViewSecond ? 1 : 0,
                transition: { duration: 0.5, delay: 2 },
              }}
              className="text-sm p-4 text-zinc-300"
            >
              Kişiye Özel Fizik Tedavi Programı Kişiye özel antrenman programı,
              kişiye özel klinik pilates ve arkadaşınızla ya da eşinizle
              birlikte düet pilates. Tedavi seanslarımız tamamen kişiye özel
              olarak planlanmaktadır.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Promises;
