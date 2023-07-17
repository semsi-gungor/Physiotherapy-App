import { FC } from "react";
import { User, columns } from "./columns";
import { DataTable } from "./DataTable";
import Users from "../../dummy-api/users.json";
import Wrapper from "@/components/ui/single-page-wrapper/Wrapper";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <Wrapper>
      <DataTable columns={columns} data={Users} />
    </Wrapper>
  );
};

export default page;
