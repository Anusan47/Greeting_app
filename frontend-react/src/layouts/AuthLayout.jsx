import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="auth-layout">
      {/* Optional: your header or logo */}
      <Outlet /> {/* THIS RENDERS THE CHILD ROUTE */}
    </div>
  );
}


const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
  }
};

export default AuthLayout;
