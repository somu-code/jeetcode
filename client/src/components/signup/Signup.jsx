import { AiFillGoogleCircle } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <>
      <div className="main-card">
        <div className="card">
          <img src="/public/logo.svg" alt="logo" className="card-logo-svg" />
          <h1 className="logo">LeetCode</h1>
          <input type="text" name="username" id="signup-username" placeholder="Username" />
          <input
            type="email"
            name="email"
            id="signup-email"
            placeholder="E-mail"
          />
          <input
            type="password"
            name="password"
            id="signup-password"
            placeholder="Password"
          />
          <input type="password" name="confirm-password" id="confirm-password" placeholder="Confirm Password" />
          <button className="button">Sign Up</button>
          <div className="forgot-password-signup">
            <span className="forgot-password">Have an account?</span>
            <Link to="/signin">
              <span className="signup">Sign In</span>
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

export default SignUp;
