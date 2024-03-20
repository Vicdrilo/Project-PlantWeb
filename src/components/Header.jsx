import "../styles/Header.css";
import { Link, Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import { NavBar } from "./NavBar";

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
      {/* <NavBar /> */}
      <div className="header-main-content">
        <Outlet />
      </div>

      <Footer />
    </>
  );
}
