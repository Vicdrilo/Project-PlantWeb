import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuthUser } from "../context/AuthProvider";
import { useContext, useEffect, useState } from "react";
import "../styles/Login.css";
import { dataPovider } from "../context/FunctionalityDataProvider";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { app } from "../firebase/firebase-config";

export function Login() {
  const firestore = getFirestore(app);
  //FORM
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //FIREBASE AUTH
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();
  const { setLogged, login, lengthPlantList, setLengthPlantList } =
    useAuthUser();
  const { comeFromForum, setComeFromForum } = useContext(dataPovider);

  async function getUserInfo(uid) {
    const docuRef = doc(firestore, `/usuarios/${uid}`);
    const userInfoCrypted = await getDoc(docuRef);
    const userInfo = userInfoCrypted.data();
    userInfo.id = uid;
    console.log("USERINFO: ", userInfo);
    return userInfo;
  }
  const handleSubmitLogin = async (formData) => {
    try {
      let user = await login(formData);
      console.log("USER AUth: ", user);
      comeFromForum ? navigate("/foro") : navigate("/");
      setLoginError(false);

      const userInfo = await getUserInfo(user.user.uid);
      setLogged(userInfo);
      setLengthPlantList(userInfo.plantas.length);
      setComeFromForum(false);
    } catch (err) {
      if (err.code === "auth/invalid-credential") {
        setLoginError(true);
      }
    }
  };

  useEffect(() => {
    setTimeout(setLoginError(false), 500);
  }, [loginError]);

  const showModal = () => {
    document.getElementById("my_modal_1").showModal();
  };

  return (
    <>
      <div className="fondo-img">
        <div className="opacity">
          <div className="rings w-full h-[100vh] rounded-xl  my-[50px] mt-[20px]">
            <div className="login md:w-1/2 md:h-[550px] md:w-[500px]">
              <h2 className="">Ingreso</h2>
              <form
                onSubmit={handleSubmit((data) => {
                  handleSubmitLogin(data);
                })}
                className="flex flex-col gap-[20px] w-full"
              >
                <div className="inputBx">
                  <input
                    type="email"
                    placeholder="@email"
                    className={`border-2 rounded-xl ${
                      errors.email ? "border-error" : "border-white"
                    }`}
                    {...register("email", {
                      required: { value: true, message: "Campo requerido" },
                      pattern: {
                        value: /^[a-zA-Z0-9._%&*-]+@[[a-zA-Z0-9.-]+\.(com|es)$/,
                        message: "Formato incorrecto",
                      },
                    })}
                  />
                  {errors.email && (
                    <div className="flex justify-start">
                      <span className=" text-[#ff6347] text-lg px-2 ">
                        {errors.email.message}
                      </span>
                    </div>
                  )}
                </div>
                <div className="inputBx">
                  <input
                    type="password"
                    placeholder="Contraseña"
                    className={`border-2 rounded-xl ${
                      errors.password ? "border-error" : "border-white"
                    }`}
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Campo requerido",
                      },
                      minLength: { value: 6, message: "Mínimo 6 carácteres" },
                    })}
                  />
                  {errors.password && (
                    <div className="flex justify-start">
                      <span className=" text-[#ff6347] text-lg px-2 ">
                        {errors.password.message}
                      </span>
                    </div>
                  )}
                </div>
                <div className="inputBx">
                  <input
                    type="submit"
                    value="Iniciar sesión"
                    className={`border-2 rounded-xl`}
                  />
                </div>
              </form>
              <div className="links">
                <a
                  href="#"
                  className=" rounded-full w-[200px] px- text-nowrap bg-verde-claro"
                >
                  Contraseña olvidada
                </a>
                <Link
                  to="/signup"
                  className=" rounded-full w-1/3 bg-verde-claro"
                >
                  Registro
                </Link>
              </div>
              <div className="no-account">
                <Link to="/" className=" rounded-full w-full bg-verde-claro">
                  Continuar sin cuenta
                </Link>
              </div>
            </div>

            {loginError && showModal()}
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-xl text-start">Error</h3>
                <p className="py-4 text-start">
                  El correo o contraseña incorrectos.
                </p>
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn">Cerrar</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </>
  );
}
