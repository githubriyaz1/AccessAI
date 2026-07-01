import DashboardHeader from "../../components/dashboard/DashboardHeader";


import AnimatedPage from "../../components/common/AnimatedPage";

function Dashboard() {
  return (
    <AnimatedPage>
      <div className="space-y-8">
        <DashboardHeader />

        

        

        

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

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