"use client";

import { FC, useState } from "react";
import { motion } from "framer-motion";
import { BiSolidQuoteRight } from "react-icons/bi";
import {
  BsPersonFillCheck,
  BsChevronRight,
  BsChevronLeft,
} from "react-icons/bs";

const comments = [
  {
    id: "1",
    bg: "bg-blue-500",
  },
  {
    id: "2",
    bg: "bg-red-500",
  },
  {
    id: "3",
    bg: "bg-green-500",
  },
];

const Comments: FC = ({}) => {
  const [index, setIndex] = useState(0);

  return (
    <div className="w-full h-screen flex flex-col gap-8 items-center justify-center ">
      <h2 className="text-3xl font-bold text-[var(--color-6)] md:text-5xl">
        Müşteri Yorumları
      </h2>
      <div className="w-5/6 h-[20rem]  overflow-hidden flex items-center border-r-2 border-l-2 border-gray-300 md:w-[60rem]">
        <motion.div
          animate={{ x: `-${index * 34}%` }}
          transition={{ type: "spring", damping: 10, stiffness: 50 }}
          className="h-3/4 w-auto flex gap-12 md:gap-0 "
        >
          {comments.map((comment, i) => {
            return (
              <motion.div
                key={comment.id}
                animate={{ scale: index === i ? 1.1 : 1 }}
                transition={{ ease: "easeIn" }}
                className={`w-[20rem] ml-[2rem] h-full bg-white flex-shrink-0 border border-gray-300 p-8 rounded-xl flex flex-col gap-4 md:w-[30rem] md:ml-[5rem]`}
              >
                <p className="text-sm md:text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia fugiat sequi adipisci, dolorem officia ad nemo optio
                  suscipit cum itaque impedit error facilis odio incidunt.
                  Placeat qui architecto delectus beatae!
                </p>
                <div className="relative flex gap-4 pt-2 border-t border-gray-300">
                  <span className="text-3xl text-[var(--color-6)] md:text-5xl">
                    <BsPersonFillCheck />
                  </span>
                  <div className="flex w-full items-center justify-between">
                    <div>
                      <p className="font-semibold text-xs md:text-base">
                        John Carpenter
                      </p>
                      <p className="text-xs text-gray-500 md:text-sm">
                        Müşteri
                      </p>
                    </div>
                  </div>
                  <span className="text-3xl text-gray-200 md:text-6xl">
                    <BiSolidQuoteRight />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
      <div className="flex gap-4">
        <div
          onClick={() => {
            setIndex((prev) => {
              if (prev === 0) {
                return comments.length - 1;
              } else {
                return prev - 1;
              }
            });
          }}
          className="cursor-pointer rounded-full w-12 h-12  bg-slate-100 border border-gray-400 flex items-center justify-center text-gray-400 hover:bg-blue-700 hover:text-gray-200"
        >
          <BsChevronLeft />
        </div>
        <div
          onClick={() => {
            setIndex((prev) => {
              if (prev === comments.length - 1) {
                return 0;
              } else {
                return prev + 1;
              }
            });
          }}
          className="cursor-pointer rounded-full w-12 h-12  bg-slate-100 border border-gray-400 flex items-center justify-center transition text-gray-400 
                  hover:bg-blue-700 hover:text-gray-200"
        >
          <BsChevronRight />
        </div>
      </div>
    </div>
  );
};

export default Comments;
