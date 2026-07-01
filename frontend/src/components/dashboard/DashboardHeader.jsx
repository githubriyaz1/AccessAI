import { Bell } from "lucide-react";

function DashboardHeader() {
  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Good Morning"
      : hour < 17
      ? "Good Afternoon"
      : hour < 21
      ? "Good Evening"
      : "Good Night";

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="bg-white rounded-3xl shadow-lg p-5 sm:p-6 lg:p-8 mb-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        {/* Left */}
        <div className="flex-1 min-w-0">
          <h1 className="text-2xl sm:text-4xl font-bold text-slate-800 wrap-break-word">
            {greeting}, Riyaz 👋
          </h1>

          <p className="text-slate-500 mt-2 text-sm sm:text-lg">
            {today}
          </p>
        </div>

        {/* Right */}
        <div className="flex items-center justify-start md:justify-end gap-3 sm:gap-4">
          <button
            className="
              w-10
              h-10
              sm:w-12
              sm:h-12
              rounded-xl
              bg-slate-100
              hover:bg-slate-200
              transition
              flex
              items-center
              justify-center
            "
          >
            <Bell size={20} />
          </button>

          <div
            className="
              w-10
              h-10
              sm:w-12
              sm:h-12
              rounded-full
              bg-blue-600
              text-white
              flex
              items-center
              justify-center
              font-semibold
              text-base
              sm:text-lg
            "
          >
            RI
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardHeader;