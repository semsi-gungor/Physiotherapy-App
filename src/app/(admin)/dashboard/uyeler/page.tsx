"use client";

import { FC } from "react";
import { columns } from "./columns";
import Users from "../../../../dummy-api/users.json";
import DashboardWrapper from "@/components/admin-page/DashboardWrapper/DashboardWrapper";
import { DataTable } from "@/components/data-tables/DataTable/DataTable";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <DashboardWrapper>
      <DataTable columns={columns} data={Users} caption="Üyeler" />
    </DashboardWrapper>
  );
};

export default page;
