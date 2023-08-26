import Link from "next/link";
import classes from "./Footer.module.css";
import InfoList from "./InfoList";
import SocialContainer from "./SocialContainer";
import Image from "next/image";
import logo from "../../../public/logo.png";
import { BiMap, BiPhone, BiEnvelope } from "react-icons/bi";
import client from "@/lib/prisma";

export default async function Footer() {
  const services = await client.service.findMany({
    select: {
      id: true,
      title: true,
    },
  });

  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <Link href={"/"}>
          <Image src={logo} width={200} height={70} alt="logo" quality={50} />
        </Link>
        <SocialContainer />
      </div>

      <InfoList header="İletişim Bilgileri">
        <li>
          <p>
            <BiMap />
            Adres
          </p>
        </li>
        <li>
          <p>
            <BiEnvelope />
            Email
          </p>
        </li>
        <li>
          <p>
            <BiPhone />
            Telefon
          </p>
        </li>
      </InfoList>
      <InfoList header="Hizmetlerimiz">
        {services.map((service) => {
          return (
            <li key={service.id}>
              <Link href={`/hizmetlerimiz/${service.id}`}>{service.title}</Link>
            </li>
          );
        })}
      </InfoList>

      <p className={classes.copyright}>© Copyright 2023 </p>
    </footer>
  );
}
