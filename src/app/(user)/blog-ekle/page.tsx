import { FC } from "react";
import WriterPage from "@/components/create-post/WriterPage/WriterPage";
import UIContextProvier from "@/context/uiControl";

const Page: FC = () => {
  return (
    <UIContextProvier>
      <WriterPage />
    </UIContextProvier>
  );
};

export default Page;
