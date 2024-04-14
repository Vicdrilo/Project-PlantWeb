import { useAuthUser } from "../../context/AuthProvider";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase-config";
import { useNavigate } from "react-router-dom";
import binIcon from "../../assets/icons/bin-icon.svg";
import { connectFirestoreEmulator } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Img } from "../features/Img";

import arrowLeft from "../../assets/icons/arrow-left-icon.svg";
import arrowLeftLight from "../../assets/icons/arrow-left-light-icon.svg";
import arrowRight from "../../assets/icons/arrow-right-icon.svg";
import arrowRightLight from "../../assets/icons/arrow-right-light-icon.svg";

import { doc, getFirestore, setDoc } from "firebase/firestore";
import { app } from "../../firebase/firebase-config";

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
  const stylingSmScreenBoxContainer = "w-10/11 gap-2 p-2";
  const stylingMdScreenBoxContainer = "md:w-[650px] md:gap-5 md:p-4 md:justify-between";

  //Responsive de la imagen
  const stylingSmScreenImg = "h-[100px] w-[100px]";
  const stylingMdScreenImg = "md:w-[200px] md:h-[200px]";

  //if side is true the box distribution will be right
  const boxDistribution = side && "flex-row-reverse";
  //if user is true the img box styling will be different so is the box with the personal data
  const imgBoxStyle = user
    ? `rounded-full self-start  ${stylingSmScreenImg} ${stylingMdScreenImg}`
    : `w-1/2 self-start ${side && "flex justify-end"}`;

    const [ lengthPlantList, setLengthPlantList ] = useState(logged.plantas.length)
  const estilosPagina = `${
    user && "mt-[50px] md:mt-[100px]"
  } ${lengthPlantList === 0 ? user && "mb-[250px] md:mb-[600px]" :!user && "mb-[100px] md:mb-[200px]" }`

  //State control acordeon
  const [numPlant, setNumPlant] = useState(0);
  
  //handlePlant -> controla el paso de las diapositivas en el acordeón
  const handlePlant = (direction) => {
    if (direction === -1 && numPlant === 0) {
      setNumPlant(lengthPlantList - 1);
    } else if (direction === 1 && numPlant === lengthPlantList - 1) {
      setNumPlant(0);
    } else {
      setNumPlant(numPlant + direction);
    }
  };

  const [ plant, setPlant ] = useState(logged.plantas[numPlant]);
  console.log("PLANT = logged.plantas[numPlant]: ", plant);

  //funcionalidad arrow btns
  const hiddenOnUser = user && "hidden";
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

  //control a la hora de que logged cambie
  useEffect(()=>{
    setPlant(logged.plantas[numPlant]);
    setLengthPlantList(logged.plantas.length)
    console.log("PLANT = logged.plantas[numPlant]: ", plant);
  }, [logged, numPlant, plant, lengthPlantList]);

  useEffect(() => {
    if (logged !== null) {
      const firestore = getFirestore(app);
      const ref = doc(firestore, `/usuarios/${logged.id}`);
      setDoc(ref, logged);
    }
  }, [logged]);

  return (
    <div
      className={`userInfoContainer flex justify-center items-center gap-[10px] md:gap-2 px-2 rounded-2xl shadow-xl border-2 border-verde bg-verde-claro ${estilosPagina}`}
    >
      <div className={`${hiddenOnUser} flex justify-center items-center`}>
        <button
          className={`bg-verde outline-verde ${bgLStyle} prev-btn rounded-md md:rounded-full h-[1.25rem] md:h-[2rem] md:min-h-[2rem] w-[1.25rem]  md:w-[2rem] text-2xl flex justify-center items-center px-[2px] md:p-0`}
          onClick={() => {
            setArrowL(true);
            handlePlant(-1);
          }}
        >
          {arrowL ? (
            <img src={arrowLeft} alt="" />
          ) : (
            <img src={arrowLeftLight} alt="" />
          )}
        </button>
      </div>
      <div
        className={`userInfoContainer flex ${boxDistribution} ${stylingSmScreenBoxContainer} ${stylingMdScreenBoxContainer} items-center`}
      >
        <div className={`${imgBoxStyle} `}>
          {console.log("FOTO: ", logged.img_url)}
          {user ? (
            <img
              src={logged.img_url}
              alt="JA!!!"
              className={`rounded-full w-full h-full`}
            />
          ) : (
            <Img
              name={plant.img}
              className="w-[115px] h-[170px] md:w-[200px] md:h-[250px] "
            />
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

          <div className={`${user && "hidden"} md:mt-[50px] self-end`}>
            <button
              className={`w-[2.3rem] px-2 text-sm border-2 border-[#db8272] rounded-xl text-verde hover:border-[#fa2702] `}
              onClick={() => {
                deleteFromFavoriteList(plant, logged, setLogged);
                
              }}
            >
              <img src={binIcon} alt="" />
            </button>
          </div>
        </div>
        
      </div>
      <div className={`${hiddenOnUser} flex justify-center items-center`}>
          <button
            className={`bg-verde outline-verde ${bgRStyle} prev-btn rounded-md md:rounded-full h-[1.25rem] md:h-[2rem] md:min-h-[2rem] w-[1.25rem]  md:w-[2rem] text-2xl flex justify-center items-center px-[2px] md:p-0`}
            onClick={() => {
              setArrowR(true);
              handlePlant(1);
            }}
          >
            {arrowR ? (
              <img src={arrowRight} alt="" />
            ) : (
              <img src={arrowRightLight} alt="" />
            )}
          </button>
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
      <li className="md:text-3xl">{plant.name}</li>
      {/* <li>{plant.advices}</li> */}
      <li className="">Dificultad: {plant.ranking}/10</li>
      <li className="text-[10px] md:text-lg">Más info...</li>
    </>
  );
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