import { Outlet, NavLink } from "react-router-dom";
import { useState } from "react";

import {
  LayoutDashboard,
  Upload,
  FileText,
  Accessibility,
  Bot,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <LayoutDashboard size={20} />,
  },
  {
    name: "Upload",
    path: "/dashboard/upload",
    icon: <Upload size={20} />,
  },
  {
    name: "Reports",
    path: "/dashboard/reports",
    icon: <FileText size={20} />,
  },
  {
    name: "Accessibility",
    path: "/dashboard/accessibility",
    icon: <Accessibility size={20} />,
  },
  {
    name: "AI Chat",
    path: "/dashboard/chat",
    icon: <Bot size={20} />,
  },
  {
    name: "Settings",
    path: "/dashboard/settings",
    icon: <Settings size={20} />,
  },
];

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div
      className="
      flex
      min-h-screen
      bg-linear-to-br
      from-slate-100
      via-slate-50
      to-blue-50
      overflow-hidden
      "
    >
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed
          top-0
          left-0
          h-screen
          w-72
          bg-slate-900
          text-white
          flex
          flex-col
          shadow-xl
          z-50
          transition-transform
          duration-300
          lg:translate-x-0
          lg:static
          ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >
        {/* Mobile Close Button */}
        <div className="flex justify-end p-4 lg:hidden">
          <button onClick={() => setSidebarOpen(false)}>
            <X size={28} />
          </button>
        </div>

        <div className="px-8 py-7 border-b border-slate-700">
          <h1 className="text-3xl font-bold text-blue-400">
            AccessAI
          </h1>

          <p className="text-sm text-slate-400 mt-2">
            Accessibility Engineering Platform
          </p>

          <div className="flex items-center gap-2 mt-4">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>

            <span className="text-green-400 text-sm font-medium">
              Online
            </span>
          </div>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === "/dashboard"}
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`
              }
            >
              {item.icon}
              <span className="font-medium">
                {item.name}
              </span>
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-700">
          <button
            className="
            w-full
            flex
            items-center
            justify-center
            gap-3
            rounded-xl
            bg-red-500
            hover:bg-red-600
            py-3
            transition
            "
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">

        {/* Mobile Header */}
        <div className="lg:hidden flex items-center justify-between bg-white shadow-md p-4">
          <button onClick={() => setSidebarOpen(true)}>
            <Menu size={28} />
          </button>

          <h2 className="text-xl font-bold text-slate-800">
            AccessAI
          </h2>

          <div className="w-7"></div>
        </div>

        <main
          className="
          flex-1
          overflow-y-auto
          p-4
          sm:p-6
          lg:p-8
          "
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}