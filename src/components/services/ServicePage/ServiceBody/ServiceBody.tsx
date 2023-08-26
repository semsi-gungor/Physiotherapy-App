import { FC } from "react";
import ServiceDefinition from "./ServiceDefinition";
import Image from "next/image";
import TreatmentsList from "./TreatmentsList";
import { Poppins } from "next/font/google";

const font = Poppins({
  weight: ["300", "400", "500", "600", "700", "700"],
  subsets: ["latin"],
});

interface ServiceBodyProps {
  definition: string;
  treatments: string[];
  body: string;
  title: string;
  img: string;
}

const ServiceBody: FC<ServiceBodyProps> = ({
  definition,
  treatments,
  body,
  title,
  img,
}) => {
  return (
    <div className={`w-full flex flex-col ${font.className}`}>
      <div className="w-full py-16 grid place-items-center">
        <p className="text-lg px-4 lg-px-0 lg:text-xl font-semibold max-w-lg text-center">
          {body}
        </p>
      </div>
      <div className="flex flex-col w-full h-auto lg:h-screen md:flex-row">
        <div className="lg:flex-1 flex flex-col justify-center gap-4 px-8">
          <ServiceDefinition definition={definition} title={title} />
          {treatments.length > 0 && <TreatmentsList treatments={treatments} />}
        </div>
        <div className="hidden relative lg:flex-1 lg:block">
          <Image
            src={img}
            alt={title}
            fill
            style={{ objectFit: "cover" }}
            quality={50}
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceBody;
