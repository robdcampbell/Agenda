import React, { useContext, useState } from "react";

const AgendaContext = React.createContext();

/* Contexts
  - Theme (dark/light/red)
  - Segment
      - status, description,
*/

export const useAgenda = () => {
  return useContext(AgendaContext);
};

export const AgendaProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const value = {
    theme,
    setTheme,
  };

  return (
    <AgendaContext.Provider value={value}>{children}</AgendaContext.Provider>
  );
};
