import { useContext } from "react";
import { ThemeContext } from "../Providers/ThemeContext";
export const Paragraph = () => {
  const theme = useContext(ThemeContext);
  console.log("context", theme);

  return (
    <h3 className={theme?.theme}>
      Context provides a way to pass data throught the component tree without
      having to pass props down manually at every level.
    </h3>
  );
};
