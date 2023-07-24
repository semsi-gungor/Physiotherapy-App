import { FC } from "react";
import classes from "./MainPage.module.css";
import ChartContainer from "./ChartContainer/ChartContainer";
import DashboardCards from "./DashboardCards/DashboardCards";

const MainPage: FC = () => {
  return (
    <div className={classes.container}>
      <ChartContainer />
      <DashboardCards />
    </div>
  );
};

export default MainPage;
