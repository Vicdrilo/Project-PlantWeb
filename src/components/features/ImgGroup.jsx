import { useContext, useState } from "react";
import { dataPovider } from "../../context/FunctionalityDataProvider";
import "../../styles/ImgGroup.css";
import { Img } from "./Img";

export function ImgGroup({ type }) {
  //true despliega las fotos para que sean visibles
  //false deja las fotos amontonadas
  const [view, setView] = useState(false);

  const temaImg = type;
  const { data } = useContext(dataPovider);

  return (
    <>
      <div
        className="img-group-container flex justify-araund cursor-pointer gap-1 w-full h-[300px] pb-5"
        onFocus={() => setView(!view)}
      >
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
