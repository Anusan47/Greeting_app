import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import GreetingPage from "../pages/GreetingPage";
import ProtectedRoute from "../components/ProtectedRoute";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import {appUrls} from "../utils/constants";


export default function AppRouter() {
  return (
  <Router>
    <Routes>
      {/* Login page under AuthLayout */}
      <Route element={<AuthLayout />}>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>

      {/* Main app pages */}
      <Route element={<MainLayout />}>
        <Route path={appUrls.home} element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
        <Route path={appUrls.greeting} element={<ProtectedRoute><GreetingPage /></ProtectedRoute>} />
      </Route>
    </Routes>
</Router>

  );
}

