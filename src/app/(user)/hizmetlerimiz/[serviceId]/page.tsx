import { FC } from "react";
import ServicePage from "@/components/services/ServicePage/ServicePage";

type PageProps = {
  params: { serviceId: string };
};

const Page: FC<PageProps> = ({ params }) => {
  return <ServicePage serviceId={params.serviceId} />;
};

export default Page;
