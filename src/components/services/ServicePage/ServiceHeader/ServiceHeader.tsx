import { FC } from "react";
import classes from "./ServiceHeader.module.css";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: ["600", "700", "800"], subsets: ["latin"] });

interface ServiceHeaderProps {
  img: string;
  title: string;
}

const ServiceHeader: FC<ServiceHeaderProps> = ({ img, title }) => {
  return (
    <div className="w-full h-screen relative">
      <div className={classes.container}>
        <Image
          src={img}
          alt={title}
          style={{
            objectFit: "cover",
          }}
          fill
          quality={50}
        />
      </div>
      <div className="w-[90%] md:w-2/3 lg:w-1/2 h-[15vh] bg-white rounded-3xl shadow-lg absolute -translate-y-1/2 left-1/2 -translate-x-1/2 grid place-items-center">
        <h1
          className={`text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 ${poppins.className} ${classes.slideIn}`}
        >
          {title}
        </h1>
      </div>
    </div>
  );
};

export default ServiceHeader;
