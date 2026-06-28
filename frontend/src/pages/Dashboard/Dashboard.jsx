import DashboardHeader from "../../components/dashboard/DashboardHeader";
import StatsGrid from "../../components/dashboard/StatsGrid";
import QuickActions from "../../components/dashboard/QuickActions";
import RecentActivity from "../../components/dashboard/RecentActivity";

import AccessibilityChart from "../../components/charts/AccessibilityChart";
import UploadsChart from "../../components/charts/UploadsChart";
import ScorePieChart from "../../components/charts/ScorePieChart";

import AnimatedPage from "../../components/common/AnimatedPage";

function Dashboard() {
  return (
    <AnimatedPage>
      <div className="space-y-8">
        <DashboardHeader />

        <StatsGrid />

        <QuickActions />

        <RecentActivity />

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <AccessibilityChart />
          <UploadsChart />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <ScorePieChart />

          <div className="bg-white rounded-2xl shadow-md p-6 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-slate-800">
                AI Insights
              </h2>

              <p className="mt-3 text-slate-500">
                AI-generated accessibility recommendations will appear here after backend integration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}

export default Dashboard;