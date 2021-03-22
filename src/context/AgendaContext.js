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

  const initialSetValues = {
    daily1: "one",
    daily2: "two",
    daily3: "three",
    daily4: "four",
    daily5: "five",
    daily6: "six",
    daily7: "seven",
    daily8: "eight",
  }

  const [theme, setTheme] = useState("dark");
  const [initialGoals, setInitialGoals] = useState(initialSetValues) 
  const [dailyGoals, setDailyGoals] = useState(initialSetValues) 


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
