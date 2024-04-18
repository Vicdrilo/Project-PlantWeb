import { useContext } from "react";
import { Img } from "../components/features/Img";
import { useAuthUser } from "../context/AuthProvider";
import { useNavigate, useParams } from "react-router-dom";
import { dataPovider } from "../context/FunctionalityDataProvider";
import comeBack from "../assets/icons/come-back-arrow.svg";

export function Plant() {
  const { data } = useContext(dataPovider);
  const { plantaId } = useParams();
  const navigate = useNavigate();

  const planta = data.objects.plants.map((plant) => {
    if (plant.id === parseInt(plantaId)) {
      return (
        <>
          <div
            className="w-7/8 md:w-4/5 flex flex-col justify-center items-start gap-2 mt-5 mb-[50vh]"
            key={plant.id}
          >
            <div className="flex justify-start items-center text-sm gap-1">
              <div
                className="rounded-full w-auto h-auto bg-verde"
                onClick={() => navigate("/plantas")}
              >
                <img src={comeBack} alt="comeBack" />
              </div>

              <p className="text-verde">Plantas</p>
            </div>
            <h1 className="text-start text-verde">{plant.name}</h1>
            <div className="flex gap-2 pb-2">
              <div className="flex flex-col w-1/3 border-e-[2px] pe-2 border-fondo">
                <Img
                  name={plant.img}
                  className="w-full h-[150px] md:h-[250px]"
                />
                <ul className="text-start">
                  <li className="text-sm md:text-lg text-verde text-nowrap">
                    Dificultad: {plant.ranking}/10
                  </li>
                  <li className="text-sm md:text-lg text-verde text-nowrap">
                    Votos: {plant.votes}/5
                  </li>
                </ul>
              </div>
              <div className="w-2/3 text-verde text-start  md:text-2xl">
                {plant.advices}
              </div>
            </div>
          </div>
        </>
      );
    }
  });
  return <>{planta}</>;
}
