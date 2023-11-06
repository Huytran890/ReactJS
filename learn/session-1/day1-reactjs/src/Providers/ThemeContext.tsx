import { createContext, useState } from "react";

interface ThemeContext {
  theme?: string;
  toggleTheme?: () => void;
}
export const ThemeContext = createContext<ThemeContext | null>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  // ? Learning useContext new
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const value = {
    theme,
    toggleTheme,
  };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
