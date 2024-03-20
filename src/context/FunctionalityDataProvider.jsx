import React, { useContext, useState } from "react";
import data from "./Data.json";

export const dataPovider = React.createContext();

export function LogicalDataProvider({ children }) {
  const [menu, setMenu] = useState(false);
  const [user, setUser] = useState(false);

  const [searchView, setSearchView] = useState(false);
  const [searchWord, setSearchWord] = useState("");

  const handleSearch = () => {};

  const values = {
    data,
    menu,
    setMenu,
    user,
    setUser,
    searchView,
    setSearchView,
  };
  return <dataPovider.Provider value={values}>{children}</dataPovider.Provider>;
}
