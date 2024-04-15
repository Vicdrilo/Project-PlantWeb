import { useContext } from "react";
import { Img } from "../components/features/Img";
import { useAuthUser } from "../context/AuthProvider";
import { useParams } from "react-router-dom";
import { dataPovider } from "../context/FunctionalityDataProvider";

export function Plant() {
  const { data } = useContext(dataPovider);
  const { plantaId } = useParams();

  // console.log(data.objects.plants);
  // data.objects.plants.map((plant) => {
  //   // console.log(plant.id === parseInt(plantaId));
  //   if (plant.id === parseInt(plantaId)) {
  //     console.log(plant);
  //   }
  // });

  const planta = data.objects.plants.map((plant) => {
    if (plant.id === parseInt(plantaId)) {
      return (
        <>
          <div
            className="w-7/8 md:w-4/5 flex flex-col justify-center items-start gap-2 mt-5 mb-[50vh]"
            key={plant.id}
          >
            <h1 className="text-start">{plant.name}</h1>
            <div className="flex gap-2 pb-2">
              <div className="flex flex-col w-1/3 border-e-[2px] pe-2 border-fondo">
                <Img
                  name={plant.img}
                  className="w-full h-[150px] md:h-[250px]"
                />
                <ul className="text-start">
                  <li className="text-sm md:text-lg text-nowrap">
                    Dificultad: {plant.ranking}/10
                  </li>
                  <li className="text-sm md:text-lg text-nowrap">
                    Votos: {plant.votes}/5
                  </li>
                </ul>
              </div>
              <div className="w-2/3 text-start  md:text-2xl">
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
