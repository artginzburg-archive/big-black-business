import { useContext, useDebugValue } from "react";
import ThemeContext from "./ThemeContext";

export default function useTheme() {
  const theme = useContext(ThemeContext);

  if (process.env.NODE_ENV !== "production") {
    useDebugValue(theme);
  }

  return theme;
}
