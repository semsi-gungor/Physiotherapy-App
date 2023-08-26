import { FC } from "react";
import MainPage from "@/components/admin-page/MainPage/MainPage";
import QueryProvider from "@/components/providers/QueryProvider/QueryProvider";

const Page: FC = async () => {
  return (
    <QueryProvider>
      <MainPage />
    </QueryProvider>
  );
};

export default Page;
