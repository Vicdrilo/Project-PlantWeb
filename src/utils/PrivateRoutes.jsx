import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { dataPovider } from "../context/FunctionalityDataProvider";

export function PrivateRoutes() {
  const { logged, setLogged } = useContext(dataPovider);

  return <>{logged ? <Outlet /> : <Navigate to="/login" />}</>;
}
