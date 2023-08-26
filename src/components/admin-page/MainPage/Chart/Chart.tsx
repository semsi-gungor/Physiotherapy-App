import { FC } from "react";
import classes from "./Chart.module.css";
import {
  BarChart,
  ResponsiveContainer,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

interface ChartProps {
  data: { name: string; value: number }[];
  color: string;
  title: string;
}

const Chart: FC<ChartProps> = ({ data, color, title }) => {
  return (
    <div className={classes.container}>
      <h2 className={classes.title}>{title}</h2>
      <ResponsiveContainer width={"100%"} className={classes.chart}>
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="4 4" />
          <XAxis dataKey="name" angle={-25} />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill={color} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
