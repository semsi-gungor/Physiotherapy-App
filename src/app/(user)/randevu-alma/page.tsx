import { FC } from "react";
import AppointmentPage from "@/components/appointment/AppointmentPage";
import QueryProvider from "@/components/providers/QueryProvider/QueryProvider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Randevu Al - Pyhsical Therapy",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio officiis ratione, accusamus corrupti voluptate cum ducimus.",
};

const Page: FC = ({}) => {
  return (
    <QueryProvider>
      <AppointmentPage />
    </QueryProvider>
  );
};

export default Page;
