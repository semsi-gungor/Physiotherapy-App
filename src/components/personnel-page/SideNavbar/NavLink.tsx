import { FC } from "react";
import classes from "./NavLink.module.css";
import { IconType } from "react-icons";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface NavLinkProps {
  link: string;
  icon: IconType;
  title: string;
  active: boolean;
  onClick?: () => void;
}

const NavLink: FC<NavLinkProps> = ({
  link,
  icon: Icon,
  title,
  active,
  onClick,
}) => {
  return (
    <li
      className={`${classes.listItem} ${active ? classes.active : ""}`}
      onClick={onClick}
    >
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link href={link} className={classes.linkContainer}>
              <Icon />
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right" sideOffset={20} asChild>
            <p>{title}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </li>
  );
};

export default NavLink;
