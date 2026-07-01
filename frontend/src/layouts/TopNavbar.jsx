import {
  Bell,
  Search,
  UserCircle,
  LayoutDashboard,
  Upload,
  FileText,
  Accessibility,
  Bot,
  Settings,
} from "lucide-react";

import { useLocation } from "react-router-dom";

function TopNavbar() {
  const location = useLocation();

  const pageMap = {
    "/dashboard": {
      title: "Dashboard",
      subtitle: "Overview of your accessibility workspace",
      icon: <LayoutDashboard size={26} />,
    },

    "/dashboard/upload": {
      title: "Upload Documents",
      subtitle: "Analyze PDFs for accessibility compliance",
      icon: <Upload size={26} />,
    },

    "/dashboard/reports": {
      title: "Reports",
      subtitle: "Generated accessibility reports",
      icon: <FileText size={26} />,
    },

    "/dashboard/accessibility": {
      title: "Accessibility",
      subtitle: "Accessibility analysis and WCAG checks",
      icon: <Accessibility size={26} />,
    },

    "/dashboard/chat": {
      title: "AI Assistant",
      subtitle: "Ask questions about your document",
      icon: <Bot size={26} />,
    },

    "/dashboard/settings": {
      title: "Settings",
      subtitle: "Manage your AccessAI preferences",
      icon: <Settings size={26} />,
    },
  };

  const current =
    pageMap[location.pathname] || pageMap["/dashboard"];

  return (
    <header
      className="
      sticky
      top-0
      z-50
      bg-white/80
      backdrop-blur-xl
      border-b
      border-slate-200
      px-8
      py-5
      mb-8
      "
    >
      <div className="flex items-center justify-between">

        {/* Left */}

        <div className="flex items-center gap-4">

          <div
            className="
            w-14
            h-14
            rounded-2xl
            bg-blue-100
            flex
            items-center
            justify-center
            text-blue-600
            "
          >
            {current.icon}
          </div>

          <div>

            <h1 className="text-3xl font-bold text-slate-800">
              {current.title}
            </h1>

            <p className="text-slate-500 mt-1">
              {current.subtitle}
            </p>

          </div>

        </div>

        {/* Right */}

        <div className="flex items-center gap-4">

          {/* Search */}

          <div className="relative">

            <Search
              size={18}
              className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-slate-400
              "
            />

            <input
              type="text"
              placeholder="Search..."
              className="
              pl-11
              pr-4
              py-3
              rounded-xl
              bg-slate-100
              outline-none
              focus:ring-2
              focus:ring-blue-500
              w-72
              "
            />

          </div>

          {/* Notifications */}

          <button
            className="
            relative
            w-12
            h-12
            rounded-xl
            bg-slate-100
            hover:bg-blue-100
            transition
            flex
            items-center
            justify-center
            "
          >
            <Bell size={20} />

            <span
              className="
              absolute
              top-2
              right-2
              w-2.5
              h-2.5
              rounded-full
              bg-red-500
              "
            />

          </button>

          {/* User */}

          <div
            className="
            flex
            items-center
            gap-3
            bg-slate-100
            px-4
            py-2
            rounded-xl
            "
          >
            <UserCircle
              size={36}
              className="text-blue-600"
            />

            <div>

              <p className="font-semibold">
                Mohamed Riyaz
              </p>

              <p className="text-xs text-slate-500">
                Accessibility Engineer
              </p>

            </div>

          </div>

        </div>

      </div>
    </header>
  );
}

export default TopNavbar;