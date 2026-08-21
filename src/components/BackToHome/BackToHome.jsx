import { Link, useLocation } from "react-router-dom";
import "./BackToHome.css";

function BackToHome() {
  const location = useLocation();

  // Don't show on Home page
  if (location.pathname === "/") {
    return null;
  }

  return (
    <Link to="/" className="back-to-home">
      ← HOME
    </Link>
  );
}

export default BackToHome;