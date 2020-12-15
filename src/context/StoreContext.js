import React, { createContext, useContext, useReducer } from "react";

export const AppContext = createContext();

function AppContextProvider({ reducer, initialState, children }) {
  return (
    <AppContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;

export const useStateValue = () => useContext(AppContext)
