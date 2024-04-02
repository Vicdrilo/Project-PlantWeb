import { Link } from "react-router-dom";
import "../styles/Login.css";
import { useForm } from "react-hook-form";

export function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();
  return (
    <div className="rings w-full h-[100vh] rounded-xl py-[300px] md:py-[300px] md:px-[300px] mb-[50px] mt-[20px]">
      <div className="login md:w-1/2">
        <h2>Registro</h2>
        <form
          onSubmit={handleSubmit((datos) => {
            console.log("Datos: ", datos);
            reset();
          })}
          className="flex flex-col gap-[20px] w-full"
        >
          <div className="inputBx">
            <input
              type="text"
              placeholder="Nombre"
              {...register("name", {
                required: { value: true, message: "Campo requerido" },
                maxLength: { value: 40, message: "Elemento demasiado largo" },
                pattern: {
                  value: /\b[A-Z][a-zºª]*\b/,
                  message: "Cada palabra debe empezar con mayúscula",
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
              type="text"
              placeholder="Apellidos"
              {...register("surname", {
                required: { value: true, message: "Campo requerido" },
                maxLength: { value: 40, message: "Elemento demasiado largo" },
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
              {...register("password", {
                required: {
                  value: true,
                  message: "Campo requerido",
                },
                minLength: { value: 6, message: "Mínimo 6 carácteres" },
                pattern: {
                  value:
                    /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()\-_=+{};:,<.>]).+$/,
                  message: "Formato incorrecto",
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
            <input type="submit" value="Registrar" />
          </div>
        </form>
        <div className="links">
          <Link to="/" className=" rounded-full w-full">
            Continuar sin cuenta
          </Link>
          <Link to="/login" className=" rounded-full w-1/3">
            Ingreso
          </Link>
        </div>
        {/* <div className="no-account">
          <Link to="/" className=" rounded-full w-full">
            Continue with no account
          </Link>
        </div> */}
      </div>
    </div>
  );
}
