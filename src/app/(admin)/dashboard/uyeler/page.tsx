"use client";

import { FC, useContext } from "react";
import { adminContext } from "@/context/adminContext";
import AdminContextProvier from "@/context/adminContext";
import { columns } from "./columns";
import { DataTable } from "./DataTable";
import Users from "../../../../dummy-api/users.json";
import DashboardWrapper from "@/components/admin-page/DashboardWrapper/DashboardWrapper";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <AdminContextProvier>
      <DashboardWrapper>
        <DataTable columns={columns} data={Users} />
      </DashboardWrapper>
    </AdminContextProvier>
  );
};

export default page;
