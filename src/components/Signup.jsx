import { Link } from "react-router-dom";
import "../styles/Login.css";

export function Signup() {
  return (
    <div className="rings rounded-xl py-[400px] md:py-[300px] md:px-[300px]">
      <div className="login overflow-y-auto">
        <h2>Sign up</h2>
        <div className="inputBx">
          <input type="text" placeholder="Nombre" />
        </div>
        <div className="inputBx">
          <input type="text" placeholder="Apellidos" />
        </div>
        <div className="inputBx">
          <input type="email" placeholder="@email" />
        </div>
        <div className="inputBx">
          <input type="password" placeholder="Contraseña" />
        </div>
        <div className="inputBx">
          <input type="password" placeholder="Repite contraseña" />
        </div>
        <div className="inputBx">
          <input type="submit" value="Sign up" />
        </div>
        <div className="links">
          <Link to="/" className=" rounded-full w-full">
            Continue with no account
          </Link>
          <Link to="/login" className=" rounded-full w-1/3">
            Login
          </Link>
        </div>
        {/* <div className="no-account">
          <Link to="/" className=" rounded-full w-full">
            Continue with no account
          </Link>
        </div> */}
      </div>
    </div>
  );
}
