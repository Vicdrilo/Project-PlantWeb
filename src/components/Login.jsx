import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "../styles/Login.css";

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className="rings w-full h-[100vh] rounded-xl md:py-[300px] md:px-[300px] my-[50px] mt-[20px]">
      <div className="login md:w-1/2">
        <h2>Ingreso</h2>
        <form
          onSubmit={handleSubmit(() => {
            console.log("error: ", errors);
          })}
          className="flex flex-col gap-[20px] w-full"
        >
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
            <input type="submit" value="Iniciar sesión" />
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
    </div>
  );
}
