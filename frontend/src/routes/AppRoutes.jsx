import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";

import Landing from "../pages/Landing";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../pages/Dashboard/Dashboard";

import Upload from "../pages/Upload/Upload";
import NotFound from "../pages/NotFound/NotFound";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Layout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* Dashboard Layout */}
        <Route path="/dashboard" element={<DashboardLayout />}>
    <Route index element={<Dashboard />} />

    <Route
        path="upload"
        element={<Upload />}
    />
</Route>

        {/* 404 */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;