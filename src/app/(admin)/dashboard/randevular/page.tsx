import { FC } from "react";
import DashboardWrapper from "@/components/admin-page/DashboardWrapper/DashboardWrapper";
import { columns } from "./columns";
import Appointments from "../../../../dummy-api/appointments.json";
import { DataTable } from "@/components/data-tables/DataTable/DataTable";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div>
      <DashboardWrapper>
        <DataTable columns={columns} data={Appointments} caption="Randevular" />
      </DashboardWrapper>
    </div>
  );
};

export default page;
