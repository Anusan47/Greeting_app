import React from "react";
import { Outlet } from "react-router-dom";
import Menu from "../components/Menu";
function MainLayout() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Left Side: Menu */}
      <Menu />

      {/* Right Side: Dynamic Route Content */}
      <div style={{ flex: 1, padding: "20px" }}>
        <Outlet />
      </div>
    </div>
  );
}
export default MainLayout;