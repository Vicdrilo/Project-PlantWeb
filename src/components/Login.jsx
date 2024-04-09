import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuthUser } from "../context/AuthProvider";
import { useContext, useEffect, useState } from "react";
import "../styles/Login.css";
import { dataPovider } from "../context/FunctionalityDataProvider";

export function Login() {
  //FORM
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //FIREBASE AUTH
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();
  const { setLogged, login } = useAuthUser();
  const { comeFromForum, setComeFromForum } = useContext(dataPovider);

  const handleSubmitLogin = async (formData) => {
    // e.preventDefault();
    try {
      let user = await login(formData);
      console.log(user);
      comeFromForum ? navigate("/foro") : navigate("/");
      setLoginError(false);
      setLogged(user);
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
    <div className="rings w-full h-[100vh] rounded-xl  my-[50px] mt-[20px]">
      <div className="login md:w-1/2 md:h-[550px] md:w-[500px]">
        <h2>Ingreso</h2>
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
          <a href="#" className=" rounded-full w-[150px] px- text-nowrap">
            Forget Password
          </a>
          <Link to="/signup" className=" rounded-full w-1/3">
            Registro
          </Link>
        </div>
        <div className="no-account">
          <Link to="/" className=" rounded-full w-full">
            Continuar sin cuenta
          </Link>
        </div>
      </div>

      {loginError && showModal()}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-xl text-start">Error</h3>
          <p className="py-4 text-start">El correo o contraseña incorrectos.</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Cerrar</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
