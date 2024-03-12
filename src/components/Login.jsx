import "../styles/Login.css";

export function Login() {
  return (
    <div className="rings md:border-4">
      <div className="login">
        <h2>Login</h2>
        <div className="inputBx">
          <input type="text" placeholder="Username" />
        </div>
        <div className="inputBx">
          <input type="password" placeholder="Password" />
        </div>
        <div className="inputBx">
          <input type="submit" value="Sign in" />
        </div>
        <div className="links">
          <a
            href="#"
            className="bg-[#013613] rounded-full w-[150px] px- text-nowrap"
          >
            Forget Password
          </a>
          <a href="#" className="bg-[#013613] rounded-full w-1/3">
            Signup
          </a>
        </div>
        <div className="no-account">
          <a href="#" className="bg-[#013613] rounded-full w-full">
            Continue with no account
          </a>
        </div>
      </div>
    </div>
  );
}
