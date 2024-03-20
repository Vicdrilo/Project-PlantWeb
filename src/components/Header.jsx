import "../styles/Header.css";
import { Link, Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import { SearchBar } from "./features/SearchBar";
import whiteSearchIcon from "../assets/icons/white-search-icon.svg";
import { useContext } from "react";
import { dataPovider } from "../context/FunctionalityDataProvider";

export function Header() {
  const { searchView, setSearchView } = useContext(dataPovider);

  const searchBtnStyle = searchView
    ? "" //"rounded-full border-2 border-white px-3"
    : ""; //"rounded-full border-0 border-white px-3";
  return (
    <>
      <div className="title-header flex flex-col items-center justify-center h-[150px] pb-8">
        <div className="search-icon h-[50px] w-full flex justify-end items-start p-2">
          <img
            src={whiteSearchIcon}
            alt=""
            className={searchBtnStyle}
            onClick={() => setSearchView(!searchView)}
          />
        </div>
        <Link to="inicio" className="flex items-center justify-center">
          <h1 className="satisfy-regular text-white text-5xl md:text-8xl">
            Planting a pine
          </h1>
        </Link>
      </div>

      {/* <div className="search-bar-container h-[50px]  bg-fondo"></div> */}

      <div className="header-main-content">
        <div className="h-[50px] flex items-center">
          <SearchBar />
        </div>
        {/* <SearchBar /> */}
        <Outlet />
      </div>

      <Footer />
    </>
  );
}
