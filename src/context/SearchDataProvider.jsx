import React, { useState } from "react";

export const searchDataProvider = React.createContext();

export function SearchDataProvider({ children }) {
  //Estado de los resultados al buscar el input escrito
  const [results, setResults] = useState([]);
  const values = { results, setResults };
  return (
    <searchDataProvider.Provider value={values}>
      {children}
    </searchDataProvider.Provider>
  );
}
