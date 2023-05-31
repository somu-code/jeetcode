import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="nav">
        <Link to="/">
          <div className="logo-container">
            <img src="/public/logo.svg" alt="logo" className="logo-svg" />
            <h1 className="logo">LeetCode</h1>
          </div>
        </Link>
        <div className="nav-right">
          <ul className="nav-menu">
            <li>Premium</li>
            <li>Explore</li>
            <li>Product</li>
            <li>Developer</li>
            <li>Sign in</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
