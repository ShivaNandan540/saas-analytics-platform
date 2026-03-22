import { useState, useEffect } from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { FaChartBar, FaCog, FaMoon } from "react-icons/fa";
import { trackEvent } from "./api/api";

function App() {
  const [token, setToken] = useState(null);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("token");
    if (saved) setToken(saved);
  }, []);

  const logout = () => {
  trackEvent("logout"); // 🔥 track logout
  localStorage.removeItem("token");
  setToken(null);
  navigate("/");
};

  if (!token) return <Login setToken={setToken} />;

  return (
    <div style={styles.layout}>

      {/* SIDEBAR */}
      <div style={styles.sidebar}>
        <h2 style={styles.logo}>⚡ SaaS</h2>

        <div style={styles.menu}>
          <div style={styles.menuItem}>
            <FaChartBar /> Dashboard
          </div>
          <div style={styles.menuItem}>
            <FaCog /> Settings
          </div>
        </div>

        <button style={styles.logout} onClick={logout}>
          Logout
        </button>
      </div>

      {/* MAIN */}
      <div style={{
        flex: 1,
        background: darkMode ? "#0f172a" : "#f1f5f9",
        color: darkMode ? "#fff" : "#000",
      }}>
        
        {/* TOPBAR */}
        <div style={styles.topbar}>
          <h3>Dashboard</h3>

          <button style={styles.themeBtn} onClick={() => setDarkMode(!darkMode)}>
            <FaMoon />
          </button>
        </div>

        <Dashboard darkMode={darkMode} />
      </div>
    </div>
  );
}

const styles = {
  layout: {
    display: "flex",
    height: "100vh",
    fontFamily: "Inter, sans-serif",
  },
  sidebar: {
    width: "240px",
    background: "#020617",
    color: "#fff",
    padding: "25px",
    display: "flex",
    flexDirection: "column",
  },
  logo: {
    marginBottom: "30px",
  },
  menu: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  menuItem: {
    padding: "12px",
    borderRadius: "8px",
    cursor: "pointer",
    display: "flex",
    gap: "10px",
    alignItems: "center",
    background: "#0f172a",
  },
  logout: {
    marginTop: "auto",
    padding: "10px",
    background: "#ef4444",
    border: "none",
    color: "#fff",
    borderRadius: "6px",
    cursor: "pointer",
  },
  topbar: {
    padding: "20px 30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #1e293b",
  },
  themeBtn: {
    background: "#1e293b",
    border: "none",
    padding: "10px",
    borderRadius: "8px",
    cursor: "pointer",
    color: "#fff",
  },
};

export default App;