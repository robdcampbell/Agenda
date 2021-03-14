import React, { useContext, useState } from "react";

const ThemeContext = React.createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  return <ThemeContext.Prodiver>{children}</ThemeContext.Prodiver>;
};
