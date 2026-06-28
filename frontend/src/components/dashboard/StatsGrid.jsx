import DashboardCard from "./DashboardCard";

function StatsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
      <DashboardCard
        title="Documents"
        value="25"
        color="#2563EB"
      />

      <DashboardCard
        title="Reports"
        value="18"
        color="#7C3AED"
      />

      <DashboardCard
        title="Accessibility Score"
        value="91%"
        color="#16A34A"
      />

      <DashboardCard
        title="AI Chats"
        value="72"
        color="#EA580C"
      />
    </div>
  );
}

export default StatsGrid;