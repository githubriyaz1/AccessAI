import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import { uploadsData } from "../../data/dashboardData";

function UploadsChart() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-800">
          Documents Uploaded
        </h2>

        <p className="text-slate-500 mt-1">
          Monthly uploaded accessibility documents
        </p>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={uploadsData}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="files"
            fill="#3B82F6"
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default UploadsChart;