import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { accessibilityTrend } from "../../data/dashboardData";

function AccessibilityChart() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300">

      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-800">
          Accessibility Score Trend
        </h2>

        <p className="text-slate-500 mt-1">
          WCAG compliance improvements over the last 6 months
        </p>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={accessibilityTrend}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#e5e7eb"
            />

            <XAxis dataKey="month" />

            <YAxis
              domain={[60, 100]}
            />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="score"
              stroke="#2563eb"
              strokeWidth={4}
              dot={{ r: 6 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}

export default AccessibilityChart;