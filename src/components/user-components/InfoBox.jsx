import { useAuthUser } from "../../context/AuthProvider";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase-config";
import { useNavigate } from "react-router-dom";
import binIcon from "../../assets/icons/bin-icon.svg";
import { connectFirestoreEmulator } from "firebase/firestore";
import { useState } from "react";
import { Img } from "../features/Img";


import arrowLeft from "../../assets/icons/arrow-left-icon.svg";
import arrowLeftLight from "../../assets/icons/arrow-left-light-icon.svg";
import arrowRight from "../../assets/icons/arrow-right-icon.svg";
import arrowRightLight from "../../assets/icons/arrow-right-light-icon.svg";

export function UserInfoBox({ side, user }) {
  /**
   * Crea el contenedor donde aparecera la información relacionada con el
   * usuario, ya sea datos personales visibles o lista favoritos o cualquier
   * otra interacción del usuario que sea almacenable y mostrable.
   *
   * @param side - Boolean. Si es true la imagen se verá en la parte izquierda del contenedor.
   * @param user - Boolean. Si es true la imagen se verá con borde totalmente redondeado y tendrá el botón para desconectarse.
   */
  const { logged, setLogged, signup, login } = useAuthUser();
  const navigate = useNavigate();

  //Responsive de contenedor
  const stylingSmScreenBoxContainer = "w-10/11 gap-5 p-4 justify-between";
  const stylingMdScreenBoxContainer = "md:w-[650px]";

  //Responsive de la imagen
  const stylingSmScreenImg = "h-[100px] w-[100px]";
  const stylingMdScreenImg = "md:w-[200px] md:h-[200px]";

  //if side is true the box distribution will be right
  const boxDistribution = side && "flex-row-reverse";
  //if user is true the img box styling will be different so is the box with the personal data
  const imgBoxStyle = user
    ? `rounded-full self-start  ${stylingSmScreenImg} ${stylingMdScreenImg}`
    : `w-1/2  self-start ${side && "flex justify-end"}`;

  //State control acordeon
  const [numPlant, setNumPlant] = useState(0);
  //handlePlant -> controla el paso de las diapositivas en el acordeón
  const handlePlant = (direction) => {
    if (direction === -1 && numPlant === 0) {
      setNumPlant(logged.plantas.length - 1);
    } else if (direction === 1 && numPlant === logged.plantas.length - 1) {
      setNumPlant(0);
    } else {
      setNumPlant(numPlant + direction);
    }
  };

  const plant = logged.plantas[numPlant];
  console.log("PLANT = logged.plantas[numPlant]: ",plant);
  return (
    <div
        className={`userInfoContainer flex ${boxDistribution} ${stylingSmScreenBoxContainer} ${stylingMdScreenBoxContainer} items-center rounded-2xl shadow-xl border-2 border-verde bg-verde-claro ${!user && "mb-[100px]"}`}
      >
        <div>
          <img src="" alt="" />
        </div>
        <div className={`${imgBoxStyle} `}>
          {console.log("FOTO: ", logged.img_url)}
          {user ? (
            <img
              src={logged.img_url}
              alt="JA!!!"
              className={`rounded-full w-full h-full`}
            />
          ) : (
            <Img name={plant.img} className="w-[150px] h-[200px] md:w-[200px] md:h-[250px] " />
          )}
        </div>
        <div
          className={`info ${
            user ? "md:w-2/3 md:text-2xl" : "w-1/2"
          } flex flex-col self-start  md:text-2xl gap-5`}
        >
          <ul
            className={`${
              side
                ? "flex flex-col justify-start text-start"
                : "flex flex-col justify-end text-start"
            } bg-gradient-to-r from-[#c7edd6] to-[#90e8b2] rounded-xl p-2 text-verde`}
          >
            {user ? <User logged={logged} /> : <Plant plant={plant} />}
          </ul>
          <div className={`${!user && "hidden"} self-end`}>
            <button
              className={`text-sm border-2 border-verde rounded-xl text-verde bg-gradient-to-r from-[#c7edd6] to-[#90e8b2] hover:border-verde `}
              onClick={() => {
                logout(setLogged);
                navigate("/login");
              }}
            >
              Desconectarse
            </button>
          </div>

          <div className={`${user && "hidden"} mt-[50px] self-end`}>
            <button
              className={`text-sm border-2 border-[#db8272] rounded-xl text-verde hover:border-[#fa2702] `}
              onClick={() => {
                logout(setLogged);
                navigate("/login");
              }}
            >
              <img src={binIcon} alt="" />
            </button>
          </div>

          {/* {showSomeInfo()} */}
        </div>
      </div>
  );
}

const logout = (setLogged) => {
  signOut(auth);
  setLogged(null);
};

function User({ logged }) {
  console.log("<User/> ", logged);
  return (
    <>
      <li>{logged.nombre}</li>
      <li>{logged.apellido}</li>
      <li>{logged.email}</li>
    </>
  );
}

function Plant({ plant }) {
  return (
    <>
      <li className="">{plant.name}</li>
      {/* <li>{plant.advices}</li> */}
      <li className="">Dificultad: {plant.ranking}</li>
    </>
  );
}
