"use client";

import { FC, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

interface ImageProps {
  image: string;
  alt: string;
}

const ImageComp: FC<ImageProps> = ({ image, alt }) => {
  const ref = useRef(null);

  const isInView = useInView(ref, { amount: "all" });

  return (
    <motion.div
      ref={ref}
      animate={{ scale: isInView ? 1.1 : 1 }}
      transition={{ duration: 0.4 }}
      className={`w-96 picture rounded-xl shadow-lg flex-shrink-0 relative`}
    >
      <Image
        className="object-cover rounded-xl w-full h-full pointer-events-none"
        src={image}
        alt={alt}
        fill
        quality={50}
      />
    </motion.div>
  );
};

export default ImageComp;
