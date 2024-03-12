import { Login } from "../components/Login";

export function Home() {
  return (
    <div className="home-container w-full flex justify-center">
      <div className="inicio-container">
        <Login />
      </div>
    </div>
  );
}
