import { useTheme as useThemeContext } from "../context/ThemeContext";

export default function useTheme() {
  const theme = useThemeContext();
  return theme;
}
