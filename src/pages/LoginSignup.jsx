import { Login } from "../components/Login";
import { Signup } from "../components/Signup";

export function LoginSignup({ type }) {
  const login = type === "login" ? <Login /> : <Signup />;

  //   const signup = type === "signup" && <Signup />;

  return (
    <>
      <div className="flex justify-center items-center md:h-2/3">{login}</div>

      {/* {signup} */}
    </>
  );
}
