import React from "react";


const dataPovider = React.createContext();

export function LogicalDataProvider({children}){
    
    return(
        <dataPovider.Provider value={}>
            {children}
        </dataPovider.Provider>
    )
}