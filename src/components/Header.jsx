import "../styles/Header.css";
import { Link, NavLink, Outlet } from "react-router-dom";

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
      {/* <div className="navbar bg-white">
        <ul className="ul list-none flex flex-row justify-center w-full">
          <Link to="fitoteca">
            <li className="fitoteca-btn hover:bg-fondo border-2 border-fondo md:border-white md:text-2xl text-verde text-center w-[150px] p-2">
              Fitoteca
            </li>
          </Link>
          <Link to="materiales">
            <li className="nav-btn hover:bg-fondo border-2 border-fondo md:border-white md:text-2xl text-verde text-center w-[150px] p-2">
              Materiales
            </li>
          </Link>
          <Link to="advice">
            <li className="nav-btn hover:bg-fondo border-2 border-fondo md:border-white md:text-2xl text-verde text-center w-[150px] p-2">
              Consejos
            </li>
          </Link>
          <Link to="forum">
            <li className="nav-btn hover:bg-fondo border-2 border-fondo md:border-white md:text-2xl text-verde text-center w-[150px] p-2">
              Foro
            </li>
          </Link>
        </ul>
      </div> */}
      <div className="navbar bg-transparent">
        <ul className="ul list-none flex flex-row justify-center w-full">
          <NavLink
            to="fitoteca"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <li className="nav-btn hover:bg-fondo border-2 border-white md:text-2xl text-verde text-center w-[100px] md:w-[150px] p-2">
              Fitoteca
            </li>
          </NavLink>
          <NavLink
            to="materiales"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <li className="nav-btn hover:bg-fondo border-2 border-white md:text-2xl text-verde text-center w-[100px] md:w-[150px] p-2">
              Materiales
            </li>
          </NavLink>
          <NavLink
            to="advice"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <li className="nav-btn hover:bg-fondo border-2 border-white md:text-2xl text-verde text-center w-[100px] md:w-[150px] p-2">
              Consejos
            </li>
          </NavLink>
          <NavLink
            to="forum"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <li className="nav-btn hover:bg-fondo border-2 border-white md:text-2xl text-verde text-center w-[100px] md:w-[150px] p-2">
              Foro
            </li>
          </NavLink>
        </ul>
      </div>
      <div>
        AQUI ESTA OUTLET
        <Outlet />
      </div>
    </>
  );
}
