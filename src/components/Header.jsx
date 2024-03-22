import "../styles/Header.css";
import { Link, Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import { SearchBar } from "./features/SearchBar";
import mediaIcon from "../assets/icons/media-icons/Vector.svg";
import mediaIcon1 from "../assets/icons/media-icons/Vector-1.svg";
import mediaIcon2 from "../assets/icons/media-icons/Vector-2.svg";
import mediaIcon3 from "../assets/icons/media-icons/Vector-3.svg";

import { useContext } from "react";
import { dataPovider } from "../context/FunctionalityDataProvider";

export function Header() {
  return (
    <>
      <div className="title-header flex flex-col items-center justify-center h-[150px] pb-8">
        <div className="media-icons h-[50px] w-full flex justify-end items-center gap-2 p-2">
          <Link to="https://www.instagram.com/ever_green_plants/">
            <img src={mediaIcon} alt="" className="" />
          </Link>
          <Link to="https://www.youtube.com/@KaeruEn">
            <img src={mediaIcon1} alt="" className="" />
          </Link>
          <Link to="tg://resolve?domain=Vicdrilo">
            <img src={mediaIcon2} alt="" className="" />
          </Link>
          <Link to="https://x.com/floresiplantas?s=11&t=A_zPZ6ISCU4W-2bD4WsrMA">
            <img src={mediaIcon3} alt="" className="" />
          </Link>
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
