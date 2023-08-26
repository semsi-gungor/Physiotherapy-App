import Image from "next/image";
import { FC } from "react";

interface ImageModuleProps {
  src: string;
  size: "sm" | "md" | "lg";
}

const ImageModule: FC<ImageModuleProps> = ({ src, size }) => {
  let sizeClass = "w-full";

  if (size === "md") {
    sizeClass = "w-3/4";
  } else if (size === "sm") {
    sizeClass = "w-1/2";
  }

  return (
    <div className={`${sizeClass} picture relative`}>
      <Image src={src} alt={""} className="object-cover" fill />
    </div>
  );
};

export default ImageModule;
