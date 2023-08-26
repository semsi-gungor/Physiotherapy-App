"use client";

import { FC, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface BlogPostProps {
  author: string;
  title: string;
  summary: string;
  id: string;
  date: string;
  image: string;
}

const BlogCard: FC<BlogPostProps> = ({
  author,
  title,
  summary,
  id,
  date,
  image,
}) => {
  let array = author.split(" ");
  let lastName = array.splice(array.length - 1);
  let names = array.splice(0, array.length);

  let dateArray = date.split(".");

  const animationVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
  };

  const growAnimationVariants = {
    initial: {
      width: 0,
    },
    animate: {
      width: 100,
    },
  };

  return (
    <div className="w-full h-[42rem] flex flex-col  transition md:flex-row md:h-96">
      <div className="h-full w-full md:w-[40%] flex items-center justify-end gap-4 lg:w-1/2">
        <motion.div
          variants={animationVariants}
          initial="initial"
          whileInView="animate"
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true, amount: 0.8 }}
          className="flex items-center gap-4 md:gap-1 lg:gap-4"
        >
          <p className="md:text-sm lg:text-base">
            {names} <strong>{lastName}</strong>
          </p>
          <div className="w-5 h-5 rounded-full border-2 border-slate-600"></div>
          <div className="md:text-sm lg:text-base">
            <span className="px-2  border-r border-slate-500">
              {dateArray[0]}
            </span>
            <span className="px-2 border-r border-slate-500">
              {dateArray[1]}
            </span>
            <span className="px-2 ">{dateArray[2]}</span>
          </div>
        </motion.div>
        <motion.div
          variants={growAnimationVariants}
          initial="initial"
          whileInView="animate"
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.8 }}
          className="h-[2px] bg-black"
        ></motion.div>
      </div>
      <div className="group p-8 flex-1 flex items-center justify-start gap-4 md:p-0">
        <motion.div
          variants={growAnimationVariants}
          initial="initial"
          whileInView="animate"
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.8 }}
          className="hidden h-[2px] bg-black md:block"
        ></motion.div>
        <Link href={`/blog/${id}`}>
          <motion.div
            variants={animationVariants}
            initial="initial"
            whileInView="animate"
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true, amount: 0.8 }}
            className="h-[30rem] w-96  border border-gray-300 bg-white shadow-sm flex flex-col cursor-pointer md:h-72 md:w-[30rem] md:flex-row"
          >
            <div className=" h-full flex flex-col p-4 items-start justify-between gap-2 md:w-1/2 lg:p-8">
              <h2 className="w-full font-bold text-md group-hover:text-blue-700 md:text-sm lg:text-md">
                {title}
              </h2>
              <p className="font-light text-sm text-gray-600 line-clamp-6 md:text-xs lg:text-sm">
                {summary}
              </p>
              <div>
                <p className="w-full font-semibold text-sm text-md group-hover:text-blue-700 md:text-xs lg:text-sm">
                  Devamını Gör
                </p>
              </div>
            </div>
            <div className="w-full h-full  md:w-1/2 md:h-full relative">
              <Image fill style={{ objectFit: "cover" }} src={image} alt=" " />
            </div>
          </motion.div>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
