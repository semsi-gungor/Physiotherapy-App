import { FC } from "react";
import DashboardWrapper from "@/components/admin-page/DashboardWrapper/DashboardWrapper";
import { columns } from "./columns";
import { DataTable } from "@/components/data-tables/DataTable/DataTable";
import Hizmetler from "../../../../dummy-api/users.json";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <DashboardWrapper>
      <DataTable caption="Hizmetler" columns={columns} data={Hizmetler} />
    </DashboardWrapper>
  );
};

export default page;
