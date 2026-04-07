import "./Login.css";
import loginImg from "../../assets/loginimg.png";

function Login() {
  return (
    <section className="shop-login">

      <div className="login-container">

        <div className="login-form">

          <h2>Shop Login</h2>

          <form>

            <div className="form-group">
              <label>Username or Email Address</label>
              <input type="text" />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" />
            </div>

            <div className="remember-row">
                <input type="checkbox" /> Remember Me
            </div>

            <button type="submit" className="login-btn">
              Log In
            </button>

          </form>

          <p className="lost-password">Lost your password?</p>

          <p className="create-account">
            Not registered yet? <span>Create Account</span>
          </p>

        </div>

        <div className="login-image">
          <img src={loginImg} alt="login" />
        </div>

      </div>

    </section>
  );
}

export default Login;