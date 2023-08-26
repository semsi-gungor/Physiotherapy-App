import { FC } from "react";
import Messages from "@/components/personnel-page/Messages/Messages";
import QueryProvider from "@/components/providers/QueryProvider/QueryProvider";

const Page: FC = ({}) => {
  return (
    <QueryProvider>
      <Messages />
    </QueryProvider>
  );
};

export default Page;
