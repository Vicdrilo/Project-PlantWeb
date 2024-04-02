import { Link } from "react-router-dom";
import "../styles/Login.css";

export function Login() {
  return (
    <div className="rings rounded-xl md:py-[300px] md:px-[300px]">
      <div className="login">
        <h2>Login</h2>
        <div className="inputBx">
          <input type="email" placeholder="@email" />
        </div>
        <div className="inputBx">
          <input type="password" placeholder="Password" />
        </div>
        <div className="inputBx">
          <input type="submit" value="Log in" />
        </div>
        <div className="links">
          <a href="#" className=" rounded-full w-[150px] px- text-nowrap">
            Forget Password
          </a>
          <Link to="/signup" className=" rounded-full w-1/3">
            Signup
          </Link>
        </div>
        <div className="no-account">
          <Link to="/" className=" rounded-full w-full">
            Continue with no account
          </Link>
        </div>
      </div>
    </div>
  );
}
