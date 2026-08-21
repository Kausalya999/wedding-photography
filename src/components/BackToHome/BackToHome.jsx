import { Link } from "react-router-dom";
import "./BackToHome.css";

function BackToHome() {
  return (
    <Link to="/" className="back-to-home">
      ← HOME
    </Link>
  );
}

export default BackToHome;