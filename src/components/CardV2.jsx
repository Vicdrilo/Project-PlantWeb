import { useContext, useEffect, useState } from "react";
import { dataPovider } from "../context/FunctionalityDataProvider";
import { Img } from "./features/Img";
import "../styles/Card.css";

import desFavIcon from "../assets/icons/fav-icon.svg";
import actFavIcon from "../assets/icons/fav-icon.svg";
import arrowLeft from "../assets/icons/arrow-left-icon.svg";
import arrowLeftLight from "../assets/icons/arrow-left-light-icon.svg";
import arrowRight from "../assets/icons/arrow-right-icon.svg";
import arrowRightLight from "../assets/icons/arrow-right-light-icon.svg";

import {
  doc,
  getCountFromServer,
  getDoc,
  count,
  collection,
  getDocs,
} from "firebase/firestore";
import { useFirestore } from "../context/Firestore";

export function Card({ type }) {
  const temaImg = type;
  const { numCard, handleCard } = useContext(dataPovider);
  const { firestore } = useFirestore();

  console.log(numCard);
  //   const dataForCard = dataArrayForCard(temaImg).numCard;

  // const data = getData(firestore, temaImg, numCard);
  // const num = getLength(firestore, temaImg);

  const [data, setData] = useState(null);
  const [length, setLength] = useState(0);
  console.log("DATOS USEEFFECT: ", data);
  console.log("LENGTH USEEFFECT: ", length);
  useEffect(() => {
    const fetchData = async () => {
      const datos = await getData(firestore, temaImg, numCard, setData);
      setData(datos);
    };

    fetchData();
  }, [firestore, temaImg, numCard]);

  useEffect(() => {
    const fetchLength = async () => {
      const num = await getLength(firestore, temaImg);
      setLength(num);
    };

    fetchLength();
  }, [firestore, temaImg]);

  return (
    <>
      <DataCard dataForCard={data} handleCard={handleCard} data={length} />
    </>
  );
}
async function getData(firestore, temaImg, numCard, setData) {
  console.log(numCard);
  const docuRef = doc(firestore, `/${temaImg}/${numCard}`);
  const data = await getDoc(docuRef);
  const planta = data.data();

  console.log("PLANTA DENTRO GETDATA: ", planta);
  setData(planta);
  // try {
  //   const querySnapshot = await getDocs(collection(firestore, temaImg));
  //   const dataDocument = querySnapshot.docs[numCard].data(); // Accede a los datos usando .docs[numCard]

  //   return dataDocument;
  // } catch (error) {
  //   console.error("Error al obtener los datos:", error);
  // }
}

async function getLength(firestore, temaImg) {
  try {
    const querySnapshot = await getDocs(collection(firestore, temaImg));
    const numberOfDocuments = querySnapshot.size;
    console.log(
      `Número de documentos en la colección "${temaImg}":`,
      numberOfDocuments,
      `typeOf: `,
      typeof numberOfDocuments,
      ". QUERYSNAPSHOT: ",
      querySnapshot
    );

    return numberOfDocuments;
  } catch (error) {
    console.error("Error al contar los documentos:", error);
  }
}

// const dataArrayForCard = async (temaImg) => {
//   const firestore = getFirestore(app);

//   if (temaImg === "plantas") {
//     const docuRef = doc(firestore, "/plantas");
//     const datos = await getDoc(docuRef);
//     const plantas = datos.data();
//     return plantas;
//   }
//   if (temaImg === "materials") {
//     const docuRef = doc(firestore, "/materials");
//     const datos = await getDoc(docuRef);
//     const materials = datos.data();
//     return materials;
//   }
// };

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

  return (
    <>
      <div
        className={`card w-[250px] h-[550px] md:w-[400px] md:h-[750px] glass p-2  bg-white`}
      >
        <figure className="h-2/2 w-full">
          <img
            src={dataForCard.img}
            alt={dataForCard.name}
            className={`rounded-lg mix-blend-multiply w-full h-[300px] md:h-[400px]`}
          />
          {/* <Img
            name={dataForCard.img}
            className="w-full h-[300px] md:h-[400px]"
          /> */}
          <div className="absolute top-3 right-2 fav-star1 animate-bounce rounded-full bg-white p-2 shadow-lg shadow-gray">
            {" "}
            <img src={desFavIcon} alt="" className=" cursor-pointer" />{" "}
          </div>
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
