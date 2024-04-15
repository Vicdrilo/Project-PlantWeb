import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase-config.js";

const authUser = React.createContext();

export function useAuthUser() {
  return useContext(authUser);
}

export function AuthProvider({ children }) {
  //Uso esta manera por si en algún momento quiero recuperar
  //datos del usuario para mostrarlo en la web
  const [logged, setLogged] = useState(null);
  const [lengthPlantList, setLengthPlantList] = useState(0);

  useEffect(() => {
    logged && setLengthPlantList(logged.plantas.length);
  }, [logged]);

  function signup(user) {
    return createUserWithEmailAndPassword(auth, user.email, user.password);
  }

  function login(user) {
    return signInWithEmailAndPassword(auth, user.email, user.password);
  }
  return (
    <>
      <authUser.Provider
        value={{
          logged,
          setLogged,
          lengthPlantList,
          setLengthPlantList,
          signup,
          login,
        }}
      >
        {children}
      </authUser.Provider>
    </>
  );
}
