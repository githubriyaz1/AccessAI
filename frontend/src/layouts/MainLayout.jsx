import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="min-h-screen bg-slate-100">
      {/* Navbar */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold text-blue-600">
            AccessAI
          </h1>
        </div>
      </header>

      {/* Page Content */}
      <main className="max-w-7xl mx-auto p-6">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500">
        © 2026 AccessAI
      </footer>
    </div>
  );
}

export default MainLayout;