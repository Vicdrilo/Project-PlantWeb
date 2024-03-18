//IMAGENES DE PLANTAS
import aloe from "../../assets/plantas/aloe.jpg";
import ficusBonsai from "../../assets/plantas/ficus-bonsai.jpg";
import monstera from "../../assets/plantas/monstera.jpg";
import nepenthes from "../../assets/plantas/nepenthes.jpg";
import strelitzia from "../../assets/plantas/strelitzia-1.jpg";
import suculenta from "../../assets/plantas/suculenta.jpg";
import venus from "../../assets/plantas/venus-flytrap.jpg";

//IMAGENES DE MATERIALES
import bonsaiPot from "../../assets/materiales/bonsai-pot.jpg";
import mudPot from "../../assets/materiales/mud-pot.jpg";
import plasticPot from "../../assets/materiales/plastic-pot.jpg";
import rainCan from "../../assets/materiales/raining-water-can.jpg";
import can from "../../assets/materiales/water-can.jpg";
import subs3 from "../../assets/materiales/subs-3l.jpg";
import subs5 from "../../assets/materiales/subs-5l.jpg";
import subsBonsai from "../../assets/materiales/subs-bonsai.jpg";

export function Img({ name }) {
  return (
    <>
      {/* <div className="img-container w-[250px] h-[300px]"> */}
      {getImg(name)}
      {/* </div>  */}
    </>
  );
}

function getImg(name) {
  switch (name) {
    //Imagenes de plantas
    case "aloe":
      return (
        // <div className="flex justify-center items-center w-full h-full">
        <img
          src={aloe}
          alt="aloe"
          className="w-[200px] h-[250px] md:hover:w-[250px] md:hover:h-[300px] me-8 transition-all md:grayscale hover:filter-none"
        />
        // </div>
      );
    case "ficus-bonsai":
      return (
        <img
          src={ficusBonsai}
          alt="ficusBonsai"
          className="w-[200px] h-[250px] md:hover:w-[250px] md:hover:h-[300px] me-8 transition-all md:grayscale hover:filter-none"
        />
      );
    case "monstera":
      return (
        <img
          src={monstera}
          alt="monstera"
          className="w-[200px] h-[250px] md:hover:w-[250px] md:hover:h-[300px] me-8 transition-all md:grayscale hover:filter-none"
        />
      );
    case "nepenthes":
      return (
        <img
          src={nepenthes}
          alt="nepenthes"
          className="w-[200px] h-[250px] md:hover:w-[250px] md:hover:h-[300px] me-8 transition-all md:grayscale hover:filter-none"
        />
      );
    case "strelitzia-1":
      return (
        <img
          src={strelitzia}
          alt="strelitzia"
          className="w-[200px] h-[250px] md:hover:w-[250px] md:hover:h-[300px] me-8 transition-all md:grayscale hover:filter-none"
        />
      );
    case "suculenta":
      return (
        <img
          src={suculenta}
          alt="suculenta"
          className="w-[200px] h-[250px] md:hover:w-[250px] md:hover:h-[300px] me-8 transition-all md:grayscale hover:filter-none"
        />
      );
    case "venus-flytrap":
      return (
        <img
          src={venus}
          alt="venus"
          className="w-[200px] h-[250px] md:hover:w-[250px] md:hover:h-[300px] me-8 transition-all md:grayscale hover:filter-none"
        />
      );

    //Imagenes de materiales
    case "bonsai-pot":
      return (
        <img
          src={bonsaiPot}
          alt="aloe"
          className="w-[200px] h-[250px] md:hover:w-[250px] md:hover:h-[300px] me-8 transition-all md:grayscale hover:filter-none"
        />
      );
    case "mud-pot":
      return (
        <img
          src={mudPot}
          alt="ficusBonsai"
          className="w-[200px] h-[250px] md:hover:w-[250px] md:hover:h-[300px] me-8 transition-all md:grayscale hover:filter-none"
        />
      );
    case "plastic-pot":
      return (
        <img
          src={plasticPot}
          alt="monstera"
          className="w-[200px] h-[250px] md:hover:w-[250px] md:hover:h-[300px] me-8 transition-all md:grayscale hover:filter-none"
        />
      );
    case "raining-water-can":
      return (
        <img
          src={rainCan}
          alt="nepenthes"
          className="w-[200px] h-[250px] md:hover:w-[250px] md:hover:h-[300px] me-8 transition-all md:grayscale hover:filter-none"
        />
      );
    case "water-can":
      return (
        <img
          src={can}
          alt="strelitzia"
          className="w-[200px] h-[250px] md:hover:w-[250px] md:hover:h-[300px] me-8 transition-all md:grayscale hover:filter-none"
        />
      );
    case "subs-3l":
      return (
        <img
          src={subs3}
          alt="suculenta"
          className="w-[200px] h-[250px] md:hover:w-[250px] md:hover:h-[300px] me-8 transition-all md:grayscale hover:filter-none"
        />
      );
    case "subs-5l":
      return (
        <img
          src={subs5}
          alt="venus"
          className="w-[200px] h-[250px] md:hover:w-[250px] md:hover:h-[300px] me-8 transition-all md:grayscale hover:filter-none"
        />
      );
    case "subs-bonsai":
      return (
        <img
          src={subsBonsai}
          alt="venus"
          className="w-[200px] h-[250px] md:hover:w-[250px] md:hover:h-[300px] me-8 transition-all md:grayscale hover:filter-none"
        />
      );
  }
}
