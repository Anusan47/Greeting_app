import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isAuth = localStorage.getItem("auth"); // check login
  if (!isAuth) {
    return <Navigate to="/" replace />; // redirect to login
  }
  return children; // user is logged in, render the page
}
