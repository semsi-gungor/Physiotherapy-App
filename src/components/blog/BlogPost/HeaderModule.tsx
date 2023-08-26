import { FC } from "react";

interface HeaderModuleProps {
  content: string;
  aligment: "left" | "center" | "right";
  color: string;
  size: "sm" | "md" | "lg";
}

const HeaderModule: FC<HeaderModuleProps> = ({
  color,
  content,
  aligment,
  size,
}) => {
  let alignmentClass = "text-left";

  if (aligment === "center") {
    alignmentClass = "text-center";
  } else if (aligment === "right") {
    alignmentClass = "text-right";
  }

  return (
    <div className="w-full p-8">
      {size === "lg" && (
        <h1 className={`text-5xl font-bold ${alignmentClass} text-[${color}]`}>
          {content}
        </h1>
      )}
      {size === "md" && (
        <h2 className={`text-4xl font-bold ${alignmentClass} text-[${color}]`}>
          {content}
        </h2>
      )}
      {size === "sm" && (
        <h3 className={`text-3xl font-bold ${alignmentClass} text-[${color}]`}>
          {content}
        </h3>
      )}
    </div>
  );
};

export default HeaderModule;
