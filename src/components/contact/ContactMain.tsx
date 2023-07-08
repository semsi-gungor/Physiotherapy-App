import { FC } from "react";
import classes from "./ContactMain.module.css";
import { AiFillPhone, AiFillMail, AiFillEnvironment } from "react-icons/ai";
import ContactItem from "./ContactItem";

const ContactMain: FC = ({}) => {
  return (
    <div className={classes.container}>
      <div className={classes.contactInfoContainer}>
        <ContactItem icon={AiFillPhone} body="+90 538-221-333" />
        <ContactItem icon={AiFillMail} body="thrapy@mail.com" />
        <ContactItem icon={AiFillEnvironment} body="Address" />
      </div>
      <div className={classes.map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d24081.196652458457!2d40.5130548!3d41.0219833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1688822248025!5m2!1str!2str"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactMain;
