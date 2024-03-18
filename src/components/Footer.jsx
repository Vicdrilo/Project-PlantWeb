import { Link } from "react-router-dom";

export function Footer() {
  return (
    <>
      <div className="flex justify-center flex-nowrap w-full ">
        <div className="inicio-btn">
          <Link to="/inicio">
            <span>
              <i></i>
            </span>
          </Link>
        </div>
        <div className="search-btn">
          <Link to="#">
            <span>
              <i></i>
            </span>
          </Link>
        </div>
        <div className="user-btn">
          <Link to="#">
            <span>
              <i></i>
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
