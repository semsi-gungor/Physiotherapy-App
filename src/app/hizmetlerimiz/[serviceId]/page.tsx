import { FC } from "react";
import Wrapper from "@/components/ui/single-page-wrapper/Wrapper";

type PageProps = {
  params: { serviceId: string };
};

const Page: FC<PageProps> = ({ params }) => {
  return <Wrapper>{params.serviceId}</Wrapper>;
};

export default Page;
