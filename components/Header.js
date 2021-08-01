import React from "react";
import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import { makeStyles } from "../hooks";
import window from "../constants/Layout";

const useStyles = () =>
  makeStyles(({ typo, palette, boxShadow }) => ({
    header: {
      backgroundColor: palette.background.paper,
      paddingTop: Constants.statusBarHeight,
      ...boxShadow(7),
    },
    headerInner: {
      paddingVertical: window.height * 0.0125,
    },
    title: {
      textAlign: "center",
      ...typo("body1"),
    },
  }));

export default function Header(props) {
  const { title, transparent, style, titleStyle, light } = props;
  const styles = useStyles();
  return (
    <View
      style={{
        ...styles.header,
        ...(transparent
          ? { backgroundColor: "transparent", elevation: 0 }
          : {}),
        ...style,
      }}
    >
      {/* eslint-disable-next-line react/style-prop-object */}
      <StatusBar style={light ? "light" : "dark"} />
      <View style={styles.headerInner}>
        <Text
          style={{
            ...styles.title,
            ...(light ? { color: "#ffffff" } : {}),
            ...titleStyle,
          }}
        >
          {title}
        </Text>
      </View>
    </View>
  );
}
