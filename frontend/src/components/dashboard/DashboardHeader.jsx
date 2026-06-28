import {
  Bell,
  Search,
} from "lucide-react";

import ThemeToggle from "../common/ThemeToggle";

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
    <div className="bg-white rounded-3xl shadow-lg p-6 lg:p-8 mb-8">

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

        {/* Left */}

        <div>

          <h1 className="text-4xl font-bold text-slate-800">
            {greeting}, Riyaz 👋
          </h1>

          <p className="text-slate-500 mt-2 text-lg">
            {today}
          </p>

        </div>

        {/* Right */}

        <div className="flex items-center gap-4 flex-wrap">

          <div className="relative">

            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search..."
              className="
              pl-11
              pr-4
              py-3
              rounded-xl
              border
              border-slate-200
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
              w-72
              "
            />

          </div>

          <button
            className="
            w-12
            h-12
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

          <ThemeToggle />

          <div
            className="
            w-12
            h-12
            rounded-full
            bg-blue-600
            text-white
            flex
            items-center
            justify-center
            font-semibold
            text-lg
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