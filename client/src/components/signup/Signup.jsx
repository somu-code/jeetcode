import { useState } from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

function SignUp() {
  const textStyle = {
    color: "red",
    textAlign: "center",
  };

  const [showTag, setShowTag] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formData.password != formData.confirmPassword) {
      setShowTag(true);
    } else {
      setShowTag(false);

      try {
        const response = await fetch("http://localhost:3000/signup", {
          method: "POST",
          headers: {
            "content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          console.log(formData);
        } else {
          console.log("Sign up failed");
        }
      } catch (error) {
        console.error("Error", error);
      }
    }
  };

  return (
    <>
      <div className="main-card">
        <div className="card">
          <img src="/public/logo.svg" alt="logo" className="card-logo-svg" />
          <h1 className="logo">LeetCode</h1>
          <form onSubmit={handleSubmit} className="signin-form">
            <input
              type="text"
              name="username"
              id="signup-username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              id="signup-email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              id="signup-password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />

            {showTag ? (
              <p className="password-do-not-match" style={textStyle}>
                The passwords you entered do not match.
              </p>
            ) : null}
            <button type="submit" className="button">
              Sign Up
            </button>
          </form>
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
