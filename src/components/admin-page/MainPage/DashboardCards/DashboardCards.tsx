import { FC } from "react";
import classes from "./DashboardCards.module.css";
import DashboardCard from "./DashboardCard";
import { BsFillPersonFill } from "react-icons/bs";

interface DashboardCardsProps {}

const DashboardCards: FC<DashboardCardsProps> = ({}) => {
  return (
    <div className={classes.container}>
      <DashboardCard
        title="Title"
        icon={BsFillPersonFill}
        body="Lorem ipsum dolor amet."
      />
      <DashboardCard
        title="Title"
        icon={BsFillPersonFill}
        body="Lorem ipsum dolor amet."
      />
      <DashboardCard
        title="Title"
        icon={BsFillPersonFill}
        body="Lorem ipsum dolor amet."
      />
      <DashboardCard
        title="Title"
        icon={BsFillPersonFill}
        body="Lorem ipsum dolor amet."
      />
    </div>
  );
};

export default DashboardCards;
