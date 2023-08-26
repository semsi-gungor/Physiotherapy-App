import { FC } from "react";
import AppointmentPage from "@/components/personnel-page/Appointments/AppointmentPage";
import QueryProvider from "@/components/providers/QueryProvider/QueryProvider";

const Page: FC = ({}) => {
  return (
    <QueryProvider>
      <AppointmentPage />
    </QueryProvider>
  );
};

export default Page;
