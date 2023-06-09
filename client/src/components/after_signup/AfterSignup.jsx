import "./AfterSignup.css";
import { Link } from "react-router-dom";

function AfterSignup() {
  return (
    <>
      <h3 className="after-signup-text">
        Thank you for sing up now you can
        <Link to="/signin"> sign in </Link>
        here.
      </h3>
    </>
  );
}

export default AfterSignup;
