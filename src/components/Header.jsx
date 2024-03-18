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

      <div className="navbar bg-transparent">
        <ul className="ul list-none flex flex-row justify-center w-full">
          <NavLink
            to="plantas"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <li className="nav-btn hover:bg-fondo border-2 border-white md:text-2xl text-verde text-center w-[100px] md:w-[150px] p-2">
              Plantas
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
            to="consejos"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <li className="nav-btn hover:bg-fondo border-2 border-white md:text-2xl text-verde text-center w-[100px] md:w-[150px] p-2">
              Consejos
            </li>
          </NavLink>
          <NavLink
            to="foro"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <li className="nav-btn hover:bg-fondo border-2 border-white md:text-2xl text-verde text-center w-[100px] md:w-[150px] p-2">
              Foro
            </li>
          </NavLink>
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}
