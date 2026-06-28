import {
  Search,
  Bell,
  Sun,
} from "lucide-react";

function TopBar() {
  const today = new Date();

  const greeting = () => {
    const hour = today.getHours();

    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mb-8 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">

      <div>
        <h1 className="text-3xl lg:text-4xl font-bold text-slate-800">
          {greeting()}, Riyaz 👋
        </h1>

        <p className="text-slate-500 mt-2">
          {today.toDateString()}
        </p>
      </div>

      <div className="flex items-center gap-4 w-full lg:w-auto">

        <div className="relative flex-1 lg:w-72">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search..."
            className="w-full rounded-xl border border-slate-300 pl-11 pr-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>

        <button className="p-3 rounded-xl bg-slate-100 hover:bg-slate-200 transition">
          <Bell size={20} />
        </button>

        <button className="p-3 rounded-xl bg-yellow-100 hover:bg-yellow-200 transition">
          <Sun size={20} />
        </button>

        <img
          src="https://ui-avatars.com/api/?name=Riyaz&background=2563eb&color=fff"
          alt="Profile"
          className="w-11 h-11 rounded-full"
        />

      </div>

    </div>
  );
}

export default TopBar;