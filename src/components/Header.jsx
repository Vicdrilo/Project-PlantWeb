import "../styles/Header.css";
import { Outlet } from "react-router-dom";

export function Header() {
  return (
    <>
      <div className="title-header">
        <h1 className="satisfy-regular">Planting a pine</h1>
      </div>
      <div className="navbar bg-white">
        <ul className="ul list-none flex flex-row w-full">
          <li className="nav-btn hover:bg-fondo border-2 border-white text-center">
            Fitoteca
          </li>
          <li className="nav-btn hover:bg-fondo border-2 border-white text-center">
            Materiales
          </li>
          <li className="nav-btn hover:bg-fondo border-2 border-white text-center">
            Consejos
          </li>
          <li className="nav-btn hover:bg-fondo border-2 border-white text-center">
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
