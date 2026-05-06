import { chartData } from "../db";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Chart = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md w-1/2 h-1/6">
      <h2 className="text-lg font-bold mb-3">Sales Analytics</h2>

      <LineChart width={600} height={480} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />

        <Line type="monotone" dataKey="sales" stroke="#ec4899" />
        <Line type="monotone" dataKey="orders" stroke="#8b5cf6" />
      </LineChart>
    </div>
  );
};

export default Chart;
