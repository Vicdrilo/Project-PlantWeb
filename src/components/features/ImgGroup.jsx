import { useContext, useState } from "react";
import { dataPovider } from "../../context/FunctionalityDataProvider";
import "../../styles/ImgGroup.css";
import { Img } from "./Img";

export function ImgGroup({ type }) {
  //true despliega las fotos para que sean visibles
  //false deja las fotos amontonadas

  const temaImg = type;
  const { data } = useContext(dataPovider);

  return (
    <>
      <div className="img-group-container cursor-pointer flex items-center my-8 overflow-x-scroll overflow-y-hidden">
        {grupoFotos(data, temaImg)}
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
          return <Img name={plant.img} key={plant.id} />;
        })}
      </>
    );
  }

  if (temaImg === "materiales") {
    return (
      <>
        {data.objects.materials.map((material) => {
          return <Img name={material.img} key={material.id} />;
        })}
      </>
    );
  }
}
