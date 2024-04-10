import { useContext, useEffect, useState } from "react";
import { dataPovider } from "../context/FunctionalityDataProvider";
import { Img } from "./features/Img";
import "../styles/Card.css";

import desFavIcon from "../assets/icons/fav-icon.svg";
import actFavIcon from "../assets/icons/fav-active-icon.svg";
import arrowLeft from "../assets/icons/arrow-left-icon.svg";
import arrowLeftLight from "../assets/icons/arrow-left-light-icon.svg";
import arrowRight from "../assets/icons/arrow-right-icon.svg";
import arrowRightLight from "../assets/icons/arrow-right-light-icon.svg";

import { useAuthUser } from "../context/AuthProvider";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
import { useFirestore } from "../context/Firestore";
import { app } from "../firebase/firebase-config";

export function Card({ type }) {
  const temaImg = type;
  const { data, numCard, handleCard } = useContext(dataPovider);

  const dataForCard = dataArrayForCard(data, temaImg)[numCard];

  return (
    <>
      <DataCard
        dataForCard={dataForCard}
        handleCard={handleCard}
        data={dataArrayForCard(data, temaImg)}
      />
    </>
  );
}

const dataArrayForCard = (data, temaImg) => {
  if (temaImg === "plantas") {
    return data.objects.plants;
  }
  if (temaImg === "materials") {
    return data.objects.materials;
  }
};

//COMPONENTE DONDE SE TRABAJA LA INFORMACIÓN QUE SE MOSTRARÁ EN LA CARD
function DataCard({ dataForCard, handleCard, data }) {
  const btnStyle = "bg-verde hover:bg-verde text-verde-claro ";
  const [arrowL, setArrowL] = useState(false);
  const [arrowR, setArrowR] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setArrowL(false);
      setArrowR(false);
    }, 50);
  }, [arrowL, arrowR]);
  const bgRStyle = arrowR ? "bg-verde-claro" : "";
  const bgLStyle = arrowL ? "bg-verde-claro" : "";

  const { logged, setLogged } = useAuthUser();

  useEffect(() => {
    if (logged !== null) {
      const firestore = getFirestore(app);
      const ref = doc(firestore, `/usuarios/${logged.id}`);
      setDoc(ref, logged);
    }
  }, [logged]);

  const favoriteDisable =
    logged !== null && logged.plantas.includes(dataForCard) ? (
      <div
        className={`absolute top-3 right-2 fav-star1 rounded-full bg-white p-2 shadow-lg shadow-gray`}
        onClick={() => deleteFromFavoriteList(dataForCard, logged, setLogged)}
      >
        {" "}
        <img src={actFavIcon} alt="" className=" cursor-pointer" />{" "}
      </div>
    ) : logged === null ? (
      ""
    ) : (
      <div
        className={`absolute top-3 right-2 fav-star1 animate-bounce rounded-full bg-white p-2 shadow-lg shadow-gray`}
        onClick={() => {
          addToFavoriteList(dataForCard, logged, setLogged);
        }}
      >
        {" "}
        <img src={desFavIcon} alt="" className=" cursor-pointer" />{" "}
      </div>
    );

  return (
    <>
      <div
        className={`card w-[250px] h-[550px] md:w-[400px] md:h-[750px] glass p-2  bg-white`}
      >
        <figure className="h-2/2 w-full">
          <Img
            name={dataForCard.img}
            className="w-full h-[300px] md:h-[400px]"
          />
          {favoriteDisable}
        </figure>
        <div className="h-1/3 p-2 card-body text-start">
          <h2 className="card-title text-2xl text-verde">{dataForCard.name}</h2>
          <p className="h-2/3 overflow-y-auto text-md text-verde">
            {dataForCard.advices}
          </p>
          <div className="card-actions flex justify-between ">
            <div className="direction-btns flex justify-center items-center h-full gap-2">
              <button
                className={`bg-verde outline-verde ${bgLStyle} prev-btn rounded-full h-[2rem] min-h-[2rem] w-[2rem] text-2xl flex justify-center items-center p-0`}
                onClick={() => {
                  setArrowL(true);
                  handleCard(-1, data);
                }}
              >
                {arrowL ? (
                  <img src={arrowLeft} alt="" />
                ) : (
                  <img src={arrowLeftLight} alt="" />
                )}
              </button>
              <button
                className={`bg-verde outline-verde ${bgRStyle} prev-btn rounded-full  h-[2rem] min-h-[2rem]  w-[2rem] text-2xl flex justify-center items-center  p-0`}
                onClick={() => {
                  setArrowR(true);
                  handleCard(1, data);
                }}
              >
                {arrowR ? (
                  <img src={arrowRight} alt="" />
                ) : (
                  <img src={arrowRightLight} alt="" />
                )}
              </button>
            </div>

            <button className={`btn ${btnStyle}`}>Aprende más!</button>
          </div>
        </div>
      </div>
    </>
  );
}

function addToFavoriteList(plant, logged, setLogged) {
  let nuevoArray = [...logged.plantas];
  nuevoArray.push(plant);

  setLogged({
    id: logged.id,
    nombre: logged.nombre,
    apellido: logged.apellido,
    email: logged.email,
    img_url: logged.img_url,
    plantas: nuevoArray,
  });
}
function deleteFromFavoriteList(plant, logged, setLogged) {
  let nuevoArray = [...logged.plantas];
  nuevoArray = nuevoArray.filter((planta) => planta !== plant);

  setLogged({
    id: logged.id,
    nombre: logged.nombre,
    apellido: logged.apellido,
    email: logged.email,
    img_url: logged.img_url,
    plantas: nuevoArray,
  });
}

// const docuRef = doc(firestore, `/usuarios/${logged.id}`);
// logged.plantas.push(plant);

// await setDoc(docuRef, {
//   id: logged.id,
//   nombre: logged.name,
//   apellido: logged.surname,
//   email: logged.email,
//   img_url: logged.img,
//   plantas: logged.plantas,
// });
// setLogged({
//   id: logged.id,
//   nombre: logged.name,
//   apellido: logged.surname,
//   email: logged.email,
//   img_url: logged.img,
//   plantas: logged.plantas,
// });
