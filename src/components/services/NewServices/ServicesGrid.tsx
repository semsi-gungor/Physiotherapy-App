import { FC } from "react";
import { Poppins } from "next/font/google";
import ServiceCard from "./ServiceCard";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

type SerivcesGridProps = {
  services: {
    id: string;
    title: string;
    src: string;
  }[];
};

const ServicesGrid: FC<SerivcesGridProps> = ({ services }) => {
  return (
    <div
      className={` w-full min-h-screen grid place-items-center py-32 ${poppins.className} overflow-hidden`}
    >
      <div className="grid gap-4 p-16 max-w-5xl sm:grid-cols-2 sm:p-8 lg:grid-cols-4 ">
        <h1 className="text-4xl font-bold sm:col-span-2 sm:w-1/2 lg:col-span-3 lg:text-5xl lg:w-2/3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </h1>
        <p className="sm:row-start-2 sm:col-start-2 self-center lg:col-start-1 lg:col-span-2 lg:pr-12 lg:text-lg w-full h-full">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
          officiis ratione, accusamus corrupti voluptate cum ducimus.
        </p>
        {services.map((service, index) => {
          if (index === 3) {
            <div
              key={service.id}
              className="h-auto card  shadow-sm transition hover:shadow-md sm:h-auto lg:col-start-2"
            >
              <ServiceCard
                index={index}
                id={service.id}
                src={service.src}
                title={service.title}
              />
            </div>;
          }
          return (
            <div
              key={service.id}
              className="h-auto card  shadow-sm transition hover:shadow-md sm:h-auto "
            >
              <ServiceCard
                index={index}
                id={service.id}
                src={service.src}
                title={service.title}
              />
            </div>
          );
        })}
        <p className="lg:text-lg lg:col-span-2 lg:self-center lg:text-center lg:p-8">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
      </div>
    </div>
  );
};

export default ServicesGrid;
