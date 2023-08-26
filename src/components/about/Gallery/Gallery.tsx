"use client";

import { FC, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import ImageComp from "./Image";

const pictures = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1620050382792-434b5828873d",
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1588286840104-8957b019727f",
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a",
  },
  {
    id: "4",
    image: "https://images.unsplash.com/photo-1623200216581-969d9479cf7d",
  },
];

const Gallery: FC = ({}) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(
      targetRef.current!.scrollWidth -
        targetRef.current!.getBoundingClientRect().width
    );
  }, []);

  return (
    <div className="w-full h-[40vh] flex items-center justify-center pb-24">
      <div className="w-full h-auto md:w-2/3 lg:w-1/2">
        {/*crousel */}
        <motion.div
          ref={targetRef}
          className="overflow-hidden 
        cursor-grab "
        >
          {/*innder  crousel */}
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="min-w-max flex items-center px-8 py-8 gap-8 md:px-24"
            whileTap={{ cursor: "grabbing" }}
          >
            {pictures.map((picture, index) => {
              return (
                <ImageComp
                  key={picture.id}
                  image={picture.image}
                  alt={index.toString()}
                />
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;

/*<div
                  key={picture.id}
                  className=" relative w-[30rem] picture rounded-xl shadow-lg hover:scale-105 transition cursor-pointer"
                >
                  <Image
                    className="object-cover rounded-xl"
                    src={picture.image}
                    fill
                    alt=""
                    quality={75}
                  />
                </div>*/
