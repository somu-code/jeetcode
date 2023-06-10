import { useState } from "react";
import "./Signin.css";
import { AiFillGoogleCircle } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/signin", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        // Authentication successful
        // Redirect or preform any necessary actions
      } else {
        // Authentication failed
        // Handle error appropriately
        console.log("Authentication failed");
      }
    } catch (error) {
      // Handle network or server errors
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="main-card">
        <div className="card">
          <img src="/public/logo.svg" alt="logo" className="card-logo-svg" />
          <h1 className="logo">LeetCode</h1>
          <form className="signin-form" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              id="signin-email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              id="signin-password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
              <button type="submit" className="button">
                Sign In
              </button>
          </form>
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
