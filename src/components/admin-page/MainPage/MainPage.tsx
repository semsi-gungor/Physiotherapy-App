import { FC } from "react";
import classes from "./MainPage.module.css";
import ChartContainer from "./ChartContainer/ChartContainer";
import DashboardCards from "./DashboardCards/DashboardCards";
import RecentContainer from "./RecentContainer/RecentContainer";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const MainPage: FC = () => {
  return (
    <div className={`${classes.container} ${poppins.className}`}>
      <ChartContainer />
      <DashboardCards />
      <RecentContainer />
    </div>
  );
};

export default MainPage;
