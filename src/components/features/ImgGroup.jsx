import { useContext, useState } from "react";
import { dataPovider } from "../../context/FunctionalityDataProvider";

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
            return (
              <img
                key={plant.id}
                //src={"../../assets/platnas/" + plant.img}
                src={`../../assets/platnas/${plant.img}`}
                alt={plant.name}
              />
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
      <div className="img-group-container" onFocus={() => setView(!view)}>
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
