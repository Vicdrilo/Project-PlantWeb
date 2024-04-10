import { Link } from "react-router-dom";

import homeIcon from "../assets/icons/home-icon.svg";
import menuIcon from "../assets/icons/menu-icon.svg";
import closeMenuIcon from "../assets/icons/close-menu-icon.svg";
import userIcon from "../assets/icons/user-icon.svg";

import { useContext } from "react";
import { dataPovider } from "../context/FunctionalityDataProvider";
import { NavBar } from "./NavBar";
import { useAuthUser } from "../context/AuthProvider";

export function Footer() {
  //Ahora en context
  //   const [search, setSearch] = useState(false);
  //   const [user, setUser] = useState(false);
  const { menu, setMenu } = useContext(dataPovider);
  const { logged } = useAuthUser();

  const sizeBar = menu
    ? "border-2 border-gray-light rounded-t-xl" //Se le puede añadir h-[100vh] para que ocupe toda la pantalla
    : "h-[40px] border-2 border-gray-light rounded-t-xl";
  const heightBtns = menu ? "h-[40px] border-b-2 border-gray-light" : "h-full";
  const sizeResult = menu ? "h-full" : "hidden";

  const isLogged =
    logged === null ? (
      <Link
        to="/login"
        className={`w-1/3 border-2  border-gray-light border-y-white border-e-white rounded-tr-xl hover:border-verde flex justify-center items-center cursor-pointer`}
        onClick={() => {
          setMenu(false);
        }}
      >
        <img src={userIcon} alt="" />
      </Link>
    ) : (
      <Link
        to="/user"
        className={`w-1/3 border-2  border-gray-light border-y-white border-e-white rounded-tr-xl hover:border-verde flex justify-center items-center cursor-pointer`}
        onClick={() => {
          setMenu(false);
        }}
      >
        <img src={userIcon} alt="" />
      </Link>
    );
  return (
    <>
      <div
        className={`fixed bottom-0 left-0 right-0 flex flex-col ${sizeBar} rounded-t-xl transition-all ease-in-out duration-1000`}
      >
        <div
          className={` flex justify-center flex-nowrap w-full ${heightBtns} bg-white rounded-t-xl`}
        >
          <Link
            to="/"
            className={`w-1/3 border-2  border-gray-light border-y-white border-s-white rounded-tl-xl hover:border-verde flex justify-center items-center`}
            onClick={() => {
              setMenu(false);
            }}
          >
            <img src={homeIcon} alt="" />
          </Link>

          <div
            className={`w-1/3 border-2  border-white hover:border-verde flex justify-center items-center cursor-pointer`}
            onClick={() => {
              setMenu(!menu);
            }}
          >
            {menu ? (
              <img src={closeMenuIcon} alt="" className="" />
            ) : (
              <img src={menuIcon} alt="" className="" />
            )}
          </div>

          {isLogged}
        </div>
        <div className={`search-result-container ${sizeResult} bg-white`}>
          <NavBar />
        </div>
      </div>
    </>
  );
}
