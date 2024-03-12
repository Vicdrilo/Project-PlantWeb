import "../styles/Header.css";
import { Link, Outlet } from "react-router-dom";

export function Header() {
  return (
    <>
      <div className="title-header flex items-center justify-center h-[150px] py-8">
        <Link to="inicio">
          <h1 className="satisfy-regular text-white text-5xl md:text-8xl">
            Planting a pine
          </h1>
        </Link>
      </div>
      <div className="navbar bg-white">
        <ul className="ul list-none flex flex-row justify-center w-full">
          <li className="nav-btn hover:bg-fondo border-2 border-fondo md:border-white md:text-2xl text-center w-[150px] p-2">
            Fitoteca
          </li>
          <li className="nav-btn hover:bg-fondo border-2 border-fondo md:border-white md:text-2xl text-center w-[150px] p-2">
            Materiales
          </li>
          <li className="nav-btn hover:bg-fondo border-2 border-fondo md:border-white md:text-2xl text-center w-[150px] p-2">
            Consejos
          </li>
          <li className="nav-btn hover:bg-fondo border-2 border-fondo md:border-white md:text-2xl text-center w-[150px] p-2">
            Foro
          </li>
        </ul>
      </div>
      <div>
        AQUI ESTA OUTLET
        <Outlet />
      </div>
    </>
  );
}
