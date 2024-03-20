import { NavLink } from "react-router-dom";
import plantIcon from "../assets/icons/plant-icon.svg";
import treeIcon from "../assets/icons/tree-icon.svg";
import adviceIcon from "../assets/icons/advice-icon.svg";
import materialIcon from "../assets/icons/material-icon.svg";
import forumIcon from "../assets/icons/forum-icon.svg";

import { useContext } from "react";
import { dataPovider } from "../context/FunctionalityDataProvider";

export function NavBar() {
  const { menu, setMenu } = useContext(dataPovider);

  const hideNavBar = menu ? "" : "";
  return (
    <>
      <div className={`navbar bg-transparent ${hideNavBar} transition-all`}>
        {/* Puede que deba eliminar flex y etc en el tag ul  */}
        <ul className="ul list-none flex flex-col justify-center w-full ">
          <NavLink
            to="plantas"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setMenu(false)}
          >
            <li className="nav-btn border-2 border-white md:text-2xl text-verde text-center w-[200px] md:w-[150px] p-2">
              <img src={plantIcon} alt="" className="w-[24px] h-[24px]" />{" "}
              Plantas
            </li>
          </NavLink>
          <NavLink
            to="materiales"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setMenu(false)}
          >
            <li className="nav-btn border-2 border-white md:text-2xl text-verde text-center w-[200px] md:w-[150px] p-2">
              <img src={materialIcon} alt="" className="w-[24px] h-[24px]" />{" "}
              Materiales
            </li>
          </NavLink>
          <NavLink
            to="consejos"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setMenu(false)}
          >
            <li className="nav-btn border-2 border-white md:text-2xl text-verde text-center w-[200px] md:w-[150px] p-2">
              <img src={adviceIcon} alt="" className="" /> Consejos
            </li>
          </NavLink>
          <NavLink
            to="foro"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setMenu(false)}
          >
            <li className="nav-btn border-2 border-white md:text-2xl text-verde text-center w-[200px] md:w-[150px] p-2">
              <img src={forumIcon} alt="" className="" /> Foro
            </li>
          </NavLink>
        </ul>
      </div>
    </>
  );
}
