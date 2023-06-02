function ForgotPassword() {
  return (
    <>
      <div className="main-card">
        <div className="card">
          <img src="/public/logo.svg" alt="logo" className="card-logo-svg" />
          <h1 className="logo">LeetCode</h1>
          <input
            type="email"
            name="email"
            id="signup-email"
            placeholder="E-mail"
          />
          <button className="button">Reset My Password</button>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
