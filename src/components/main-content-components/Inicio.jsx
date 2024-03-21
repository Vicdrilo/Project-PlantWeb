import { Link } from "react-router-dom";
// import { ImgGroup } from "../ImgGroup";
import { ImgCarousel } from "../ImgGroupCarousel";

export function Inicio() {
  return (
    <div className="inicio-container">
      <div id="plants" className="my-0">
        <Link
          to="/plantas"
          className="flex justify-start text-verde hover:text-verde w-1/4"
        >
          <h1>Plantas</h1>
        </Link>
        {/* <ImgGroup type="plantas" /> */}

        <ImgCarousel type="plantas" />
      </div>

      <div id="materials" className="my-10">
        <Link
          to="/materiales"
          className="flex justify-start text-verde hover:text-verde w-1/4"
        >
          <h1>Materiales</h1>
        </Link>
        {/* <ImgGroup type="materiales" /> */}
        <ImgCarousel type="materiales" />
      </div>
    </div>
  );
}
