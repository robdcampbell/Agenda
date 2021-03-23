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

  const initialSetValues = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]
  const initialDaily = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
  ]

  const [theme, setTheme] = useState("dark");
  const [initialGoals, setInitialGoals] = useState(initialSetValues) 
  const [dailyGoals, setDailyGoals] = useState(initialDaily) 


  const value = {
    theme,
    setTheme,
    initialGoals,
    setInitialGoals,
    dailyGoals, 
    setDailyGoals
  };

  return (
    <AgendaContext.Provider value={value}>{children}</AgendaContext.Provider>
  );
};
