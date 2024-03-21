import { useContext } from "react";
import { Img } from "./features/Img";
import { dataPovider } from "../context/FunctionalityDataProvider";
import { Link } from "react-router-dom";
import arrowRightIcon from "../assets/icons/arrow-right-icon.svg";
import "../styles/ImgGroupCarousel.css";

export function ImgCarousel({ type }) {
  const temaImg = type;
  const { data } = useContext(dataPovider);
  return (
    <>
      <div className="carousel carousel-end pe-1">
        {grupoFotos(data, temaImg)}
        <div className="carousel-item h-[250px] w-[20px]">
          <Link
            to={`/${temaImg}`}
            className="flex justify-center itmes-center bg-fondo hover:bg-verde-claro btnSeeMore text-verde hover:text-verde"
          >
            <img src={arrowRightIcon} alt="" className="" />
          </Link>
        </div>
      </div>
    </>
  );
}
//Función para agrupar fotos de los productos
function grupoFotos(data, temaImg) {
  if (temaImg === "plantas") {
    return (
      <>
        {data.objects.plants.map((plant) => {
          return (
            <div
              className="carousel-item items-center m-2 border-2 border-verde-claro shadow-md shadow-gray rounded-lg"
              key={plant.id}
            >
              <Img name={plant.img} className="w-[250px] h-full" />
            </div>
          );
        })}
      </>
    );
  }

  if (temaImg === "materiales") {
    return (
      <>
        {data.objects.materials.map((material) => {
          return (
            <div
              className="carousel-item items-center m-2 border-2 border-verde-claro shadow-md shadow-gray rounded-lg"
              key={material.id}
            >
              <Img name={material.img} className="w-[250px] h-full" />
            </div>
          );
        })}
      </>
    );
  }
}
