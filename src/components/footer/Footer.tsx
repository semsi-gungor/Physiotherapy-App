import Link from "next/link";
import classes from "./Footer.module.css";
import InfoList from "./InfoList";
import SocialContainer from "./SocialContainer";
import Image from "next/image";
import logo from "../../../public/logo.png";

export default function Footer() {
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
          <Link href={"/"}>Adres</Link>
        </li>
        <li>
          <Link href={"/"}>Adres</Link>
        </li>
        <li>
          <Link href={"/"}>Adres</Link>
        </li>
      </InfoList>
      <InfoList header="İletişim Bilgileri">
        <li>
          <Link href={"/"}>Adres</Link>
        </li>
        <li>
          <Link href={"/"}>Adres</Link>
        </li>
        <li>
          <Link href={"/"}>Adres</Link>
        </li>
      </InfoList>

      <p className={classes.copyright}>© Copyright 2023 </p>
    </footer>
  );
}
