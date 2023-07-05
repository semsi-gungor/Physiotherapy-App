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
      <SocialIcon icon={AiOutlineFacebook} link="#" color="#4267B2" />
      <SocialIcon icon={AiOutlineYoutube} link="#" color="#FF0000" />
      <SocialIcon icon={AiOutlineInstagram} link="#" color="#C13584" />
      <SocialIcon icon={AiOutlineWhatsApp} link="#" color="#25D366" />
    </div>
  );
}
