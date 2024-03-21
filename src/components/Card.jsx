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

export function Card({ type }) {
  const temaImg = type;
  const { data, numCard, handleCard } = useContext(dataPovider);

  console.log(numCard);
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
      <div className={`card w-[250px] h-[550px] glass p-2  bg-white`}>
        <figure className="h-2/2 w-full">
          <Img name={dataForCard.img} className="w-full h-[300px]" />
          <div className="absolute top-3 right-2 fav-star1 animate-bounce rounded-full bg-white p-2 shadow-lg shadow-gray">
            {" "}
            <img src={desFavIcon} alt="" className=" cursor-pointer" />{" "}
          </div>
        </figure>
        <div className="h-1/3 p-2 card-body text-start">
          <h2 className="card-title text-2xl">{dataForCard.name}</h2>
          <p className="h-2/3 overflow-y-auto text-md">{dataForCard.advices}</p>
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
