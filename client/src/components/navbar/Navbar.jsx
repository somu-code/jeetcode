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
            <li>
              <Link to="premium">Premium</Link>
            </li>
            <li>
              <Link to="explore">Explore</Link>
            </li>
            <li>
              <Link to="product">Product</Link>
            </li>
            <li>
              <Link to="developer">Developer</Link>
            </li>
            <li>
              <Link to="/login">Sign in</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
