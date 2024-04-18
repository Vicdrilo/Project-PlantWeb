import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";
import { useForm } from "react-hook-form";
import { useAuthUser } from "../context/AuthProvider";
import { useEffect, useState } from "react";

import { getFirestore, doc, setDoc } from "firebase/firestore";
import { app } from "../firebase/firebase-config";

export function Signup() {
  const navigate = useNavigate();
  const firestore = getFirestore(app);
  //FORM
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  //FIREBASE AUTH
  const [emailError, setEmailError] = useState(false);
  const { signup } = useAuthUser();
  const showModalOk = () => {
    document.getElementById("my_modal_2").showModal();

    navigate("/login");
  };
  const handleSubmitSignup = async (formData) => {
    try {
      let user = await signup(formData);
      console.log(user);
      setEmailError(false);

      console.log(user.user.uid);
      const docuRef = doc(firestore, `/usuarios/${user.user.uid}`);
      setDoc(docuRef, {
        id: user.user.uid,
        nombre: formData.name,
        apellido: formData.surname,
        email: formData.email,
        // img_url: "https://i.ibb.co/s6CN3Fs/superman.webp",
        img_url: "https://i.ibb.co/64TJc7s/blank-avatar-photo.webp",
        plantas: [],
      });

      showModalOk();
    } catch (err) {
      console.log("ERROR: ", err.code);
      if (err.code === "auth/email-already-in-use") {
        setEmailError(true);
      }
    }
  };

  useEffect(() => {
    setTimeout(setEmailError(false), 500);
  }, [emailError]);

  const showModalError = () => {
    document.getElementById("my_modal_1").showModal();
  };
  return (
    <div className="fondo-img">
      <div className="opacity">
        <div className="rings w-full h-[100vh] rounded-xl py-[300px] md:py-[300px] md:px-[300px] mb-[50px] mt-[20px]">
          <div className="login md:w-1/2">
            <h2>Registro</h2>
            <form
              onSubmit={handleSubmit((datos) => {
                handleSubmitSignup(datos);
                reset();
              })}
              className="flex flex-col gap-[20px] w-full"
            >
              <div className="inputBx">
                <input
                  type="text"
                  placeholder="Nombre"
                  className={`border-2 rounded-xl ${
                    errors.name ? "border-error" : "border-white"
                  }`}
                  {...register("name", {
                    required: { value: true, message: "Campo requerido" },
                    maxLength: {
                      value: 40,
                      message: "Elemento demasiado largo",
                    },
                    pattern: {
                      value: /\b[A-Z][a-zºª]*\b/,
                      message: "Cada palabra debe empezar con mayúscula",
                    },
                  })}
                />
                {errors.name && (
                  <div className="flex justify-start">
                    <span className=" text-[#ff6347] text-lg px-2 ">
                      {errors.name.message}
                    </span>
                  </div>
                )}
              </div>
              <div className="inputBx">
                <input
                  type="text"
                  placeholder="Apellidos"
                  className={`border-2 rounded-xl ${
                    errors.surname ? "border-error" : "border-white"
                  }`}
                  {...register("surname", {
                    required: { value: true, message: "Campo requerido" },
                    maxLength: {
                      value: 40,
                      message: "Elemento demasiado largo",
                    },
                    pattern: {
                      value: /\b[A-Z][a-z]*\b/,
                      message: "Cada palabra debe empezar con mayúscula",
                    },
                  })}
                />
                {errors.surname && (
                  <div className="flex justify-start">
                    <span className=" text-[#ff6347] text-lg px-2 ">
                      {errors.surname.message}
                    </span>
                  </div>
                )}
              </div>
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
                    pattern: {
                      value:
                        /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()\-_=+{};:,<.>]).+$/,
                      message:
                        "Formato incorrecto ([a-z], [A-Z], [0-9], simbolo)",
                    },
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
                  type="password"
                  placeholder="Repite contraseña"
                  className={`border-2 rounded-xl ${
                    errors.passwordRepeated ? "border-error" : "border-white"
                  }`}
                  {...register("passwordRepeated", {
                    required: { value: true, message: "Campo requerido" },
                    validate: (value) => {
                      if (value === watch("password")) {
                        return true;
                      } else {
                        return "Contraseñas no coinciden";
                      }
                    },
                  })}
                />
                {errors.passwordRepeated && (
                  <div className="flex justify-start">
                    <span className=" text-[#ff6347] text-lg px-2 ">
                      {errors.passwordRepeated.message}
                    </span>
                  </div>
                )}
              </div>
              <div className="inputBx">
                <input
                  type="submit"
                  value="Registrar"
                  className={`border-2 rounded-xl`}
                />
              </div>
            </form>
            <div className="links">
              <Link to="/" className=" rounded-full w-full bg-verde-claro">
                Continuar sin cuenta
              </Link>
              <Link
                to="/login"
                className=" rounded-full w-1/3 px-2 bg-verde-claro"
              >
                Ingreso
              </Link>
            </div>
          </div>
          {emailError && showModalError()}
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-xl text-start">Error</h3>
              <p className="py-4 text-start">El correo ya está registrado.</p>
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn">Cerrar</button>
                </form>
              </div>
            </div>
          </dialog>
          <dialog id="my_modal_2" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-xl text-start">Bienvenido!!!</h3>
              <p className="py-4 text-start">Registro correcto.</p>
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
  );
}
