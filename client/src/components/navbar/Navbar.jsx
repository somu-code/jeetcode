import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="main-nav">
        <div className="nav">
          <Link to="/">
            <div className="logo-container">
              <img src="/public/logo.svg" alt="logo" className="logo-svg" />
              <h1 className="logo">LeetCode</h1>
            </div>
          </Link>
          <div className="nav-right">
            <ul className="nav-menu">
              <Link to="/premium">
                <li className="button-hover">Premium</li>
              </Link>
              <Link to="/explore">
                <li className="button-hover">Explore</li>
              </Link>
              <Link to="/product">
                <li className="button-hover">Product</li>
              </Link>
              <Link to="/developer">
                <li className="button-hover">Developer</li>
              </Link>
              <Link to="/signin">
                <li className="button-hover">Sing in</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
