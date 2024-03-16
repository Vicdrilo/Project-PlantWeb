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
  //const { data } = useDataApi();
  const grupoFotos = () => {
    if (temaImg === "plantas") {
      return (
        <>
          {data.objects.plants.map((plant) => {
            //const module = await import(`../../assets/plantas/${plant.img}`);
            return (
              <div key={plant.id} className={`w-full h-full`}>
                <Img name={plant.img} />
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
              <img key={material.id} src={material.img} alt={material.name} />
            );
          })}
        </>
      );
    }
  };

  return (
    <>
      <div
        className="img-group-container flex justify-araund cursor-pointer gap-1 h-[250px]"
        onFocus={() => setView(!view)}
      >
        {grupoFotos()}
      </div>
    </>
  );
}

//Función para agrupar fotos de los productos
// function grupoFotos(data, temaImg) {
//   if (temaImg === "plantas") {
//     return (
//       <>
//         {data.objects.plants.map((plant) => {
//           <img src={plant.img} alt={plant.name} />;
//         })}
//       </>
//     );
//   }

//   if (temaImg === "materiales") {
//     return (
//       <>
//         {data.objects.materials.map((material) => {
//           <img src={material.img} alt={material.name} />;
//         })}
//       </>
//     );
//   }
// }
