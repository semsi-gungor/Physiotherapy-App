import { FC } from "react";
import WriterPage from "@/components/create-post/WriterPage/WriterPage";
import UIContextProvier from "@/context/uiControl";
import BlogContextProvider from "@/context/blogContext";
import QueryProvider from "@/components/providers/QueryProvider/QueryProvider";
import BlogPage from "@/components/personnel-page/Blog/BlogPage";

interface Props {}

const Page: FC<Props> = ({}) => {
  return (
    <BlogContextProvider>
      <UIContextProvier>
        <QueryProvider>
          <BlogPage />
        </QueryProvider>
      </UIContextProvier>
    </BlogContextProvider>
  );
};

export default Page;
