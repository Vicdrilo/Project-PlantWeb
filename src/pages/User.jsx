import { UserInfoBox } from "../components/user-components/InfoBox";
import { useAuthUser } from "../context/AuthProvider";

export function User() {
  const [logged] = useAuthUser();

  return (
    <>
      {/* <h1>Perfril de usuario</h1> */}
      <div className="flex flex-col gap-4">
        {/* El componente UserInfoBox tiene dos props:
          side - Si es true la imagen se verá en la parte izquierda del contenedor.
          user - Si es true la imagen se verá con borde totalmente redondeado y tendrá el botón para desconectarse. */}
        <UserInfoBox user />

        {logged.plants.length > 0 && <UserInfoBox side />}
      </div>
    </>
  );
}
