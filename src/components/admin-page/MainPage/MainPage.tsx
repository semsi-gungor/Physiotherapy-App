import { FC } from "react";
import classes from "./MainPage.module.css";
import ChartContainer from "./ChartContainer/ChartContainer";

const MainPage: FC = () => {
  return (
    <div className={classes.container}>
      <ChartContainer />
    </div>
  );
};

export default MainPage;
