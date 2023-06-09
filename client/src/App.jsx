import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import SignIn from "./components/signin/Signin";
import SignUp from "./components/signup/Signup";
import ForgotPassword from "./components/forgot_password/ForgotPassword";
import AfterSignup from "./components/after_signup/AfterSignup";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/signup/after-signup" element={<AfterSignup /> } />
      </Routes>
    </>
  );
}

export default App;
