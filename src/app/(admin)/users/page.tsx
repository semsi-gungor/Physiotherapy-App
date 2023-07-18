"use client";

import { FC, useState } from "react";
import { User, columns } from "./columns";
import { DataTable } from "./DataTable";
import Users from "../../../dummy-api/users.json";
import DashboardWrapper from "@/components/admin-page/DashboardWrapper/DashboardWrapper";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  const [pageInfo, setPageInfo] = useState({ currentPage: 0, pageCount: 0 });

  return (
    <DashboardWrapper>
      <DataTable columns={columns} data={Users} />
    </DashboardWrapper>
  );
};

export default page;
