import { FC } from "react";
import ServicesPage from "@/components/services/ServicesPage";
import ServicesGrid from "@/components/services/NewServices/ServicesGrid";
import client from "@/lib/prisma";
import { Metadata } from "next";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Hizmetlerimiz - Pyhsical Therapy",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio officiis ratione, accusamus corrupti voluptate cum ducimus.",
};

interface Props {}

const Page: FC<Props> = async ({}) => {
  const services = await client.service.findMany();

  const servicesGrid = services.map((service) => {
    return {
      id: service.id,
      title: service.title,
      src: service.bodyImage,
    };
  });

  return (
    <div>
      <ServicesPage />
      <ServicesGrid services={servicesGrid} />
    </div>
  );
};

export default Page;
