import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { dataPovider } from "../context/FunctionalityDataProvider";
import { useAuthUser } from "../context/AuthProvider";

export function PrivateRoutes() {
  const { setComeFromForum } = useContext(dataPovider);
  const { logged } = useAuthUser();

  return (
    <>
      {logged ? (
        <Outlet />
      ) : (
        <>
          {setComeFromForum(true)}
          <Navigate to="/login" />
        </>
      )}
    </>
  );
}
