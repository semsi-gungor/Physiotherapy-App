"use client";

import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface ServiceCardProps {
  id: string;
  src: string;
  title: string;
  index: number;
}

const ServiceCard: FC<ServiceCardProps> = ({ id, src, title, index }) => {
  let type = index % 4;

  if (type === 1) {
    return (
      <Link href={`/hizmetlerimiz/${id}`}>
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -100 },
            pop: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          whileInView="pop"
          viewport={{ amount: 0.5, once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full h-full cursor-pointer"
        >
          <div className="w-full h-[80%] relative">
            <Image alt={title} src={src} fill objectFit="cover" quality={60} />
          </div>
          <div className="w-full h-[20%] flex items-center justify-center bg-white">
            <p className="font-semibold uppercase text-lg">{title}</p>
          </div>
        </motion.div>
      </Link>
    );
  } else if (type === 2) {
    return (
      <Link href={`/hizmetlerimiz/${id}`}>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 100 },
            pop: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="pop"
          viewport={{ amount: 0.5, once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full h-full cursor-pointer"
        >
          <div className="w-full h-[80%] relative">
            <Image alt={title} src={src} fill objectFit="cover" quality={60} />
          </div>
          <div className="w-full h-[20%] flex items-center justify-center bg-white">
            <p className="font-semibold uppercase text-lg">{title}</p>
          </div>
        </motion.div>
      </Link>
    );
  } else if (type === 3) {
    return (
      <Link href={`/hizmetlerimiz/${id}`}>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -100 },
            pop: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="pop"
          viewport={{ amount: 0.5, once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full h-full cursor-pointer"
        >
          <div className="w-full h-[80%] relative">
            <Image alt={title} src={src} fill objectFit="cover" quality={60} />
          </div>
          <div className="w-full h-[20%] flex items-center justify-center bg-white">
            <p className="font-semibold uppercase text-lg">{title}</p>
          </div>
        </motion.div>
      </Link>
    );
  }

  return (
    <Link href={`/hizmetlerimiz/${id}`}>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: 100 },
          pop: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        whileInView="pop"
        viewport={{ amount: 0.5, once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="w-full h-full cursor-pointer"
      >
        <div className="w-full h-[80%] relative">
          <Image alt={title} src={src} fill objectFit="cover" quality={60} />
        </div>
        <div className="w-full h-[20%] flex items-center justify-center bg-white">
          <p className="font-semibold uppercase text-lg">{title}</p>
        </div>
      </motion.div>
    </Link>
  );
};

export default ServiceCard;
