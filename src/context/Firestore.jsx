import { getFirestore, doc, getDoc } from "firebase/firestore";
import { app } from "../firebase-config";
import React, { useContext } from "react";

const dataBase = React.createContext();

export function useFirestore() {
  return useContext(dataBase);
}

export function Firestore({ children }) {
  const firestore = getFirestore(app);

  return (
    <>
      <dataBase.Provider value={{ firestore }}>{children}</dataBase.Provider>
    </>
  );
}
