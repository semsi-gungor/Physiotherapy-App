import { FC } from "react";
import ContactPage from "@/components/contact/ContactPage";
import { Poppins } from "next/font/google";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim - Pyhsical Therapy",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio officiis ratione, accusamus corrupti voluptate cum ducimus.",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const Contact: FC = () => {
  return (
    <div className={poppins.className}>
      <ContactPage />
    </div>
  );
};

export default Contact;
