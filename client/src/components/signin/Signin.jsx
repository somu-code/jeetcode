import "./Signin.css";
import { AiFillGoogleCircle } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <>
      <div className="main-card">
        <div className="card">
          <img src="/public/logo.svg" alt="logo" className="card-logo-svg" />
          <h1 className="logo">LeetCode</h1>
          <input
            type="email"
            name="email"
            id="signin-email"
            placeholder="E-mail"
          />
          <input
            type="password"
            name="password"
            id="signin-password"
            placeholder="Password"
          />
          <button className="button">Sign In</button>
          <div className="forgot-password-signup">
            <Link to="/forgot-password">
              <span className="forgot-password">Forgot Password?</span>
            </Link>
            <Link to="/signup">
              <span className="signup">Sign Up</span>
            </Link>
          </div>
          <div className="open-auth">
            <p>or you can sign in with</p>
            <div className="icons">
              <AiFillGoogleCircle className="icon" />
              <AiFillGithub className="icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
