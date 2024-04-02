import "../styles/Header.css";
import { Link, Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import { SearchBar } from "./features/SearchBar";
import mediaIcon from "../assets/icons/media-icons/Vector.svg";
import mediaIcon1 from "../assets/icons/media-icons/Vector-1.svg";
import mediaIcon2 from "../assets/icons/media-icons/Vector-2.svg";
import mediaIcon3 from "../assets/icons/media-icons/Vector-3.svg";

import { useContext, useEffect, useState } from "react";
import { dataPovider } from "../context/FunctionalityDataProvider";

export function Header() {
  const [expanded, setExpanded] = useState(true);

  const hideContent = expanded ? "hidden" : "flex";
  const fullScreen = expanded
    ? "h-full justify-center  items-start pt-[150px]"
    : "h-[150px] md:h-[250px] flex-col";
  // :"h-20vh flex-col";

  useEffect(() => {
    const timeout = setTimeout(() => {
      setExpanded(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      <div
        className={`title-header flex  ${fullScreen} pb-8 transition-all ease-in-out duration-1000`}
      >
        <div
          className={`media-icons h-[50px] w-full justify-end items-center gap-2 p-2 ${hideContent} transition-all ease-in-out delay-1000`}
        >
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
        <Link to="/" className="flex items-center justify-center">
          <h1 className="satisfy-regular text-white text-5xl md:text-8xl">
            PLANTIHOGAR
          </h1>
        </Link>
      </div>

      {/* <div className="search-bar-container h-[50px]  bg-fondo"></div> */}

      <div className={`header-main-content flex justify-center ${hideContent}`}>
        {/* <div className={` h-[50px]  items-center ${hideContent}`}>
          <SearchBar />
        </div> */}
        {/* <SearchBar /> */}
        <Outlet />
      </div>

      <Footer />
    </>
  );
}
