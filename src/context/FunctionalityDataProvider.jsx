import React, { useContext, useState } from "react";
import data from "./Data.json";

export const dataPovider = React.createContext();

export function LogicalDataProvider({ children }) {
  const [menu, setMenu] = useState(false);
  const [user, setUser] = useState(false);

  const values = {
    data,
    menu,
    setMenu,
    user,
    setUser,
  };
  return <dataPovider.Provider value={values}>{children}</dataPovider.Provider>;
}
