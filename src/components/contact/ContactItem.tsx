import { FC } from "react";
import classes from "./ContactItem.module.css";
import { IconType } from "react-icons/lib";

interface ContactItemProps {
  icon: IconType;
  body: string;
}

const ContactItem: FC<ContactItemProps> = ({ icon: Icon, body }) => {
  return (
    <div className={classes.container}>
      <div>
        <Icon />
      </div>
      <p>{body}</p>
    </div>
  );
};

export default ContactItem;
