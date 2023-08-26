import { FC } from "react";
import AboutPage from "@/components/about/AboutPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda - Pyhsical Therapy",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore similique fugit laborum quas impedit, adipisci quod velit eveniet alias atque dolorem soluta non voluptatem ipsum. Sint ipsam delectus ex eligendi?",
};

const Page: FC = ({}) => {
  return <AboutPage />;
};

export default Page;
