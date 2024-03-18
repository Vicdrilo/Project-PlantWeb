import { Link } from "react-router-dom";
import { ImgGroup } from "../features/ImgGroup";

export function Inicio() {
  return (
    <div className="inicio-container">
      <Link
        to="/plantas"
        className="flex justify-start text-verde hover:text-verde w-1/4"
      >
        <h1>Plantas</h1>
      </Link>
      <ImgGroup type="plantas" />

      <hr className="bg-verde h-[2px]" />
      <Link
        to="/materiales"
        className="flex justify-start text-verde hover:text-verde w-1/4"
      >
        <h1>Materiales</h1>
      </Link>
      <ImgGroup type="/materiales" />

      <hr className="bg-verde h-[2px]" />
    </div>
  );
}
