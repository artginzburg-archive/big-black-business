import { StyleSheet } from "react-native";
import useTheme from "./useTheme";

export default function makeStyles(useStyles) {
  const theme = useTheme();
  return StyleSheet.create(useStyles(theme));
}
