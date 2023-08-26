import { FC } from "react";

interface ListModuleProps {
  content: string;
  listType: "ul" | "ol";
}

const ListModule: FC<ListModuleProps> = ({ content, listType }) => {
  let listItems = content.split("\n");

  let itemsArray = listItems.map((item) => {
    return item.split(".")[1];
  });

  return (
    <div className="w-full p-8">
      <ul
        className={`${
          listType === "ul" ? "list-disc" : "list-decimal"
        } px-4 space-y-2`}
      >
        {itemsArray.map((item, index) => {
          return (
            <li key={index} className="text-sm">
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListModule;
