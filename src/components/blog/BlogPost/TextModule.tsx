import { FC } from "react";

interface TextModuleProps {
  content: string;
  aligment: "left" | "center" | "right";
  color: string;
}

const TextModule: FC<TextModuleProps> = ({ color, content, aligment }) => {
  let alignmentClass = "text-left";

  if (aligment === "center") {
    alignmentClass = "text-center";
  } else if (aligment === "right") {
    alignmentClass = "text-right";
  }

  return (
    <div className="w-full p-8">
      <p className={`text-lg ${alignmentClass} text-[${color}]`}>{content}</p>
    </div>
  );
};

export default TextModule;
