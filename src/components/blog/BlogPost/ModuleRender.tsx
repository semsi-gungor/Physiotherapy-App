import { FC } from "react";
import HeaderModule from "./HeaderModule";
import TextModule from "./TextModule";
import ImageModule from "./ImageModule";
import QuoteModule from "./QuoteModule";
import ListModule from "./ListModule";

interface ModuleRenderProps {
  module: {
    id: string;
    content: string;
    type: "text" | "header" | "list" | "quote" | "image";
    color: string | null;
    size: "sm" | "md" | "lg" | null;
    alignment: "left" | "center" | "right" | null;
    listType: "ul" | "ol" | null;
    blogPostId: string;
  };
}

const ModuleRender: FC<ModuleRenderProps> = ({ module }) => {
  return (
    <>
      {module.type === "header" && (
        <HeaderModule
          aligment={module.alignment!}
          color={module.color!}
          content={module.content}
          size={module.size!}
        />
      )}
      {module.type === "text" && (
        <TextModule
          aligment={module.alignment!}
          color={module.color!}
          content={module.content}
        />
      )}
      {module.type === "image" && (
        <ImageModule src={module.content} size={module.size!} />
      )}
      {module.type === "quote" && (
        <QuoteModule content={module.content} color={module.color!} />
      )}
      {module.type === "list" && (
        <ListModule content={module.content} listType={module.listType!} />
      )}
    </>
  );
};

export default ModuleRender;
