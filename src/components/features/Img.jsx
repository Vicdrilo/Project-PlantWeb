import aloe from "../../assets/plantas/aloe.jpg";
import ficusBonsai from "../../assets/plantas/ficus-bonsai.jpg";
import monstera from "../../assets/plantas/monstera.jpg";
import nepenthes from "../../assets/plantas/nepenthes.jpg";
import strelitzia from "../../assets/plantas/strelitzia-1.jpg";
import suculenta from "../../assets/plantas/suculenta.jpg";
import venus from "../../assets/plantas/venus-flytrap.jpg";

export function Img({ name }) {
  switch (name) {
    case "aloe":
      return <img src={aloe} alt="aloe" className="w-[200px] h-full" />;
    case "ficus-bonsai":
      return (
        <img src={ficusBonsai} alt="ficusBonsai" className="w-[200px] h-full" />
      );
    case "monstera":
      return <img src={monstera} alt="monstera" className="w-[200px] h-full" />;
    case "nepenthes":
      return (
        <img src={nepenthes} alt="nepenthes" className="w-[200px] h-full" />
      );
    case "strelitzia-1":
      return (
        <img src={strelitzia} alt="strelitzia" className="w-[200px] h-full" />
      );
    case "suculenta":
      return (
        <img src={suculenta} alt="suculenta" className="w-[200px] h-full" />
      );
    case "venus-flytrap":
      return <img src={venus} alt="venus" className="w-[200px] h-full" />;
  }
}
