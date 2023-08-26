export const revalidate = 60;

import { FC } from "react";
import ServicePage from "@/components/services/ServicePage/ServicePage";
import QueryProvider from "@/components/providers/QueryProvider/QueryProvider";
import { Metadata, ResolvingMetadata } from "next";
import client from "@/lib/prisma";
import SessionProvider from "@/components/providers/SessionProvider/SessionProvider";

type PageProps = {
  params: { serviceId: string };
};

export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.serviceId;

  // fetch data
  const service = await client.service.findUnique({
    where: {
      id: id,
    },

    select: {
      body: true,
      title: true,
    },
  });

  return {
    title: service?.title,
    description: service?.body,
  };
}

export async function generateStaticParams() {
  const ids = await client.service.findMany({
    select: {
      id: true,
    },
  });

  return ids.map((id) => {
    return {
      serviceId: id.id,
    };
  });
}

const Page: FC<PageProps> = async ({ params }) => {
  const service = await client.service.findUnique({
    where: {
      id: params.serviceId,
    },
    select: {
      body: true,
      bodyImage: true,
      definition: true,
      headerImage: true,
      title: true,
      treatments: true,
    },
  });

  return (
    <SessionProvider>
      <QueryProvider>
        {service && <ServicePage service={service} />}
      </QueryProvider>
    </SessionProvider>
  );
};

export default Page;
