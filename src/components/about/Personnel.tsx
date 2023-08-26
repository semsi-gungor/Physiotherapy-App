"use client";

import { motion } from "framer-motion";
import { FC } from "react";
import Image from "next/image";

interface PersonnelProps {
  index: number;
  name: string;
  title: string;
  id: string;
}

const Personnel: FC<PersonnelProps> = ({ index, name, title, id }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.9 },
        pop: {
          opacity: 1,
          scale: 1,
        },
      }}
      initial="hidden"
      whileInView="pop"
      viewport={{ amount: 1, once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      key={id}
      className="h-full card flex flex-col gap- sm:h-auto sm:card sm:max-w-[15rem] lg:max-w-[20rem] "
    >
      <div className="w-52 square rounded-full relative">
        <Image
          className="object-cover rounded-full object-top"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
          fill
          alt=""
        />
      </div>

      <div className="flex flex-col items-center justify-center w-full">
        <motion.p
          variants={{
            hidden: { x: 100, opacity: 0 },
            pop: {
              opacity: 1,
              x: 0,
            },
          }}
          initial="hidden"
          whileInView="pop"
          viewport={{ amount: 1, once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.8 }}
          className="text-lg font-bold"
        >
          {name}
        </motion.p>
        <motion.p
          variants={{
            hidden: { x: 100, opacity: 0 },
            pop: {
              opacity: 1,
              x: 0,
            },
          }}
          initial="hidden"
          whileInView="pop"
          viewport={{ amount: 1, once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 + 1 }}
          className="text-sm text-gray-700"
        >
          {title}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Personnel;
