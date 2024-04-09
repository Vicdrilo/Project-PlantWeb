import { useAuthUser } from "../../context/AuthProvider";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase-config";
import { useNavigate } from "react-router-dom";
import binIcon from "../../assets/icons/bin-icon.svg";
import { connectFirestoreEmulator } from "firebase/firestore";

export function UserInfoBox({ side, user }) {
  const { logged, setLogged, signup, login } = useAuthUser();
  const navigate = useNavigate();

  //Responsive de contenedor
  const stylingSmScreenBoxContainer = "w-[300px] gap-5 p-4 justify-between";
  const stylingMdScreenBoxContainer = "md:w-[650px]";

  //Responsive de la imagen
  const stylingSmScreenImg = "h-[100px] w-[100px]";
  const stylingMdScreenImg = "md:w-[200px] md:h-[200px]";

  //if side is true the box distribution will be right
  const boxDistribution = side && "flex-row-reverse";
  //if user is true the img box styling will be different so is the box with the personal data
  const imgBoxStyle = user
    ? `rounded-full self-start  ${stylingSmScreenImg} ${stylingMdScreenImg}`
    : `w-1/2 h-[300px]`;
  //if user is true the personal data will appear, otherwise will appear favorite plants list
  const showSomeInfo = () => {
    if (user) {
      return <></>;
    }
  };

  return (
    <>
      <div
        className={`userInfoContainer flex ${boxDistribution} ${stylingSmScreenBoxContainer} ${stylingMdScreenBoxContainer}  items-center rounded-2xl shadow-xl border-2 border-verde bg-verde-claro `}
      >
        <div className={`${imgBoxStyle} `}>
          {console.log("FOTO: ", logged.img_url)}
          <img src={logged.img_url} alt="JA!!!" />
        </div>
        <div
          className={`info ${
            user ? "md:w-2/3 md:text-2xl" : "w-1/2"
          } flex flex-col gap-5`}
        >
          <ul
            className={`${
              side
                ? "flex flex-col justify-start text-start"
                : "flex flex-col justify-end text-start"
            } bg-gradient-to-r from-[#c7edd6] to-[#90e8b2] rounded-xl p-2`}
          >
            {user ? <User /> : <Plant />}
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

          <div className={`${user && "hidden"} mt-[100px] self-end`}>
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
    </>
  );
}

const logout = (setLogged) => {
  signOut(auth);
  setLogged(null);
};

function User() {
  const { logged, setLogged, signup, login } = useAuthUser();
  console.log("<User/> ", logged);
  return (
    <>
      <li>{logged.nombre}</li>
      <li>{logged.apellido}</li>
      <li>{logged.email}</li>
    </>
  );
}

function Plant() {
  const { logged, setLogged, signup, login } = useAuthUser();
  return (
    <>
      <li>Planta</li>
      <li>kjdsaflkdslkfds</li>
      <li>kjfdalkas</li>
    </>
  );
}
