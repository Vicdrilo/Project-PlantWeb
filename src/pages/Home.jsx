import { Login } from "../components/Login";

export function Home() {
  return (
    <div className="home-container w-full flex flex-col items-center justify-center">
      <h1 className="satisfy-regular text-white text-5xl md:text-8xl">
        Planting a pine
      </h1>
      <div className="inicio-container">
        <Login />
      </div>
    </div>
  );
}
