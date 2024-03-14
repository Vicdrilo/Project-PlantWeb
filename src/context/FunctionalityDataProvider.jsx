import React, { useContext } from "react";
import data from "./Data.json";

export const dataPovider = React.createContext();

export function LogicalDataProvider({ children }) {
  return (
    <dataPovider.Provider value={{ data }}>{children}</dataPovider.Provider>
  );
}
