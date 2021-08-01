import { createElement } from "react";
import ThemeContext from "./ThemeContext";
import useTheme from "./useTheme";

export default function ThemeProvider(props) {
  const { children, theme: localTheme } = props;
  const theme = useTheme() || localTheme;
  return createElement(ThemeContext.Provider, {
    value: theme,
  }, children);
}
