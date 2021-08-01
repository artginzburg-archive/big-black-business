import { Entypo, FontAwesome5 } from "@expo/vector-icons";
import * as React from "react";
import { useTheme } from "../hooks";

export default function TabBarIcon(props) {
  const { palette } = useTheme();
  const { name, focused } = props;
  if (name === "user") {
    return (
      <FontAwesome5
        name={name}
        size={20}
        style={{ marginBottom: -5 }}
        color={focused ? palette.primary.main : palette.grey[400]}
      />
    );
  }
  return (
    <Entypo
      name={name}
      size={name === "message" ? 24 : 20}
      style={{ marginBottom: -5 }}
      color={focused ? palette.primary.main : palette.grey[400]}
    />
  );
}
