import React, { useContext, useState } from "react";
import data from "../data/Data.json";

export const dataPovider = React.createContext();

export function LogicalDataProvider({ children }) {
  const [menu, setMenu] = useState(false);
  const [user, setUser] = useState(false);

  const [numCard, setNumCard] = useState(0);

  const handleCard = (num, datos) => {
    if (numCard === 0 && num === -1) {
      setNumCard(datos.length + num);
    } else if (numCard + num === datos.length) {
      setNumCard(0);
    } else {
      setNumCard(numCard + num);
    }
  };

  const values = {
    data,
    menu,
    setMenu,
    user,
    setUser,
    numCard,
    handleCard,
  };
  return <dataPovider.Provider value={values}>{children}</dataPovider.Provider>;
}
