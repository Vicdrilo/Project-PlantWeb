import "../styles/Header.css";
import { Outlet } from "react-router-dom";

export function Header() {
  return (
    <>
      <div className="title-header">
        <h1 className="satisfy-regular text-white">Planting a pine</h1>
      </div>
      <div className="navbar bg-white">
        <ul className="ul list-none">
          <li className="nav-btn hover:bg-fondo border-2 border-white">
            Fitoteca
          </li>
          <li className="nav-btn hover:bg-fondo border-2 border-white">
            Materiales
          </li>
          <li className="nav-btn hover:bg-fondo border-2 border-white">
            Consejos
          </li>
          <li className="nav-btn hover:bg-fondo border-2 border-white">Foro</li>
        </ul>
      </div>
      <Outlet />
    </>
  );
}
