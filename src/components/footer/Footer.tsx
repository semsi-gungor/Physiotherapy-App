import Link from "next/link";
import classes from "./Footer.module.css";
import InfoList from "./InfoList";
import SocialContainer from "./SocialContainer";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <SocialContainer />
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
