import React, { useContext, useState } from "react";

const AgendaContext = React.createContext();

/* Contexts
  - Theme: (dark/light/red)
  - Initial Goals: 
      Set in the intro section, to be populated in numered, daily goals section.
  - Segment:
      - status, description,
*/

export const useAgenda = () => {
  return useContext(AgendaContext);
};

export const AgendaProvider = ({ children }) => {

  const initialBlank = {
    daily1: "",
    daily2: "",
    daily3: "",
    daily4: "",
    daily5: "",
    daily6: "",
    daily7: "",
    daily8: "",
  }


  const [theme, setTheme] = useState("dark");
  const [initialGoals, setInitialGoals] = useState(initialBlank) 


  const value = {
    theme,
    setTheme,
    initialGoals,
    setInitialGoals,
  };

  return (
    <AgendaContext.Provider value={value}>{children}</AgendaContext.Provider>
  );
};
