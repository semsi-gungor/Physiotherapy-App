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
}

const Chart: FC<ChartProps> = ({ data, color }) => {
  return (
    <div className={classes.container}>
      <ResponsiveContainer width={"50%"}>
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
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill={color} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
