import { FC } from "react";
import QueryProvider from "@/components/providers/QueryProvider/QueryProvider";
import UpcomingAppointments from "@/components/personnel-page/UpcomingAppointments/UpcomingAppointments";

const Page: FC = () => {
  return (
    <QueryProvider>
      <UpcomingAppointments />
    </QueryProvider>
  );
};

export default Page;
