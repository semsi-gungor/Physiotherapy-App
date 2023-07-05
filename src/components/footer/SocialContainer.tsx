"use client";

import classes from "./SocialContainer.module.css";
import {
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiOutlineWhatsApp,
  AiOutlineFacebook,
} from "react-icons/ai";
import SocialIcon from "./SocialIcon";

export default function SocialContainer() {
  return (
    <div className={classes.container}>
      <SocialIcon icon={AiOutlineFacebook} />
      <SocialIcon icon={AiOutlineYoutube} />
      <SocialIcon icon={AiOutlineInstagram} />
      <SocialIcon icon={AiOutlineWhatsApp} />
    </div>
  );
}
