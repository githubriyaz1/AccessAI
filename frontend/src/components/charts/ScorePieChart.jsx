import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

import { scoreDistribution } from "../../data/dashboardData";

const COLORS = ["#16A34A", "#EF4444"];

function ScorePieChart() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-800">
          Accessibility Status
        </h2>

        <p className="text-slate-500 mt-1">
          Current accessibility compliance
        </p>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={scoreDistribution}
            dataKey="value"
            nameKey="name"
            outerRadius={90}
            label
          >
            {scoreDistribution.map((entry, index) => (
              <Cell
                key={entry.name}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />

          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ScorePieChart;