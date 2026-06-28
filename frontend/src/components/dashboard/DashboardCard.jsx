import { TrendingUp } from "lucide-react";

function DashboardCard({
  title,
  value,
  color,
}) {
  return (
    <div
      className="
      bg-white
      rounded-2xl
      shadow-md
      hover:shadow-xl
      hover:-translate-y-1
      transition-all
      duration-300
      p-6
      border-l-4
      "
      style={{ borderColor: color }}
    >
      <p className="text-slate-500 text-sm">
        {title}
      </p>

      <h2 className="text-4xl font-bold mt-4 text-slate-800">
        {value}
      </h2>

      <div className="flex items-center gap-2 mt-5 text-green-600 text-sm">

        <TrendingUp size={16} />

        <span>+12% this week</span>

      </div>
    </div>
  );
}

export default DashboardCard;