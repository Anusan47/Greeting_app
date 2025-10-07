import { NavLink, useNavigate } from "react-router-dom";
import { appUrls } from "../utils/constants";
import { Home, Smile, LogOut } from "lucide-react"; // lightweight icons

function Menu() {
  const navigate = useNavigate();

  const linkStyle = ({ isActive }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    color: isActive ? "#fff" : "#333",
    background: isActive ? "#007bff" : "transparent",
    padding: "12px 16px",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: isActive ? "600" : "500",
    transition: "all 0.3s ease",
  });

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("auth"); // remove login state
    navigate(appUrls.login); // redirect to login page
  };

  return (
    <div
      style={{
        width: "220px",
        background: "#f9fafb",
        padding: "20px",
        borderRight: "1px solid #e5e7eb",
        height: "100vh",
      }}
    >
      <h2
        style={{
          marginBottom: "40px",
          fontSize: "20px",
          fontWeight: "700",
          color: "#111827",
          paddingTop: "10px",
        }}
      >
        Menu
      </h2>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        <li style={{ marginBottom: "20px" }}>
          <NavLink to={appUrls.home} style={linkStyle}>
            <Home size={18} />
            Home
          </NavLink>
        </li>
        <li style={{ marginBottom: "20px" }}>
          <NavLink to={appUrls.greeting} style={linkStyle}>
            <Smile size={18} />
            Greeting
          </NavLink>
        </li>
        <li style={{ marginBottom: "20px" }}>
          {/* Logout link with onClick */}
          <NavLink
            to="/"
            onClick={handleLogout}
            style={linkStyle}
          >
            <LogOut size={18} />
            Logout
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
