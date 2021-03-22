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
    dailyOne: "",
    dailyTwo: "",
    dailyThree: "",
    dailyFour: "",
    dailyFive: "",
    dailySix: "",
    dailySeven: "",
    dailyEight: "",
  }

  const [theme, setTheme] = useState("dark");
  const [initialGoals, setInitialGoals] = useState(initialBlank) 

  const value = {
    theme,
    setTheme,
  };

  return (
    <AgendaContext.Provider value={value}>{children}</AgendaContext.Provider>
  );
};
