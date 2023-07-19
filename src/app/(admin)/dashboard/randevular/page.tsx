import { FC } from "react";
import DashboardWrapper from "@/components/admin-page/DashboardWrapper/DashboardWrapper";
import { DataTable } from "./DataTable";
import { columns } from "./columns";
import Appointments from "../../../../dummy-api/appointments.json";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div>
      <DashboardWrapper>
        <DataTable columns={columns} data={Appointments} />
      </DashboardWrapper>
    </div>
  );
};

export default page;
