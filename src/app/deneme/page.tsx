import { FC } from "react";
import Image from "next/image";
import Wrapper from "@/components/ui/single-page-wrapper/Wrapper";
import bf from "../../../public/bg-2.jpg";
import wave from "../../../public/layered-waves-haikei.png";

const Page: FC = ({}) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Image
        src={bf}
        quality={100}
        alt="background"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      <Image
        src={wave}
        quality={100}
        alt="background"
        style={{
          objectFit: "cover",
          position: "absolute",
          bottom: "0",
          zIndex: "200",
        }}
      />
    </div>
  );
};

export default Page;
