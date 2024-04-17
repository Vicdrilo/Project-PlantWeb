import { useNavigate } from "react-router-dom";
import { Card } from "../Card";
// import { Card } from "../CardV2";

import comeBack from "../../assets/icons/come-back-arrow.svg";

export function Plantas() {
  const navigate = useNavigate();
  return (
    <div className="plantas-container my-3">
      <div className="flex justify-start items-center text-sm gap-1">
        <div
          className="rounded-full w-auto h-auto bg-verde"
          onClick={() => navigate("/")}
        >
          <img src={comeBack} alt="comeBack" />
        </div>

        <p>Inicio</p>
      </div>
      <h1 className="text-start mb-5 text-verde">Plantas</h1>

      <div className="plantas flex justify-center items-start mb-[100px]">
        <Card type="plantas" />
      </div>
    </div>
  );
}
