import * as React from "react";
import { View, Text, Image, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import * as Progress from "react-native-progress";
import window from "../constants/Layout";
import { makeStyles, useTheme } from "../hooks";
import { rgbToHex } from "@material-ui/core";

const useStyles = () =>
  makeStyles(({ boxShadow, palette, shape }) => ({
    cardContainer: {
      width: 0.75 * window.width,
      marginLeft: 0 * window.width,
      backgroundColor: palette.background.paper,
      borderRadius: shape.borderRadius,
      display: "flex",
      flexDirection: "column",
      height: 0.5 * window.width,
      marginVertical: 0.03 * window.height,
      overflow: "hidden",
      // borderColor: "#4800ff",
      // borderWidth 0.25,
      ...boxShadow(7),
    },
    header: {
      // borderRadius: ,
      borderTopRightRadius: shape.borderRadius - 0.5,
      borderTopLeftRadius: shape.borderRadius - 0.5,
      // overflow: "hidden",
      // borderWidth: 0,
      width: "100.1%",
      height: 0.04 * window.height + 1,
    },
    cardContent: {
      paddingHorizontal: "10%",
      paddingVertical: "10%",
      display: "flex",
      flex: 1,
      borderRadius: shape.borderRadius * 2,
    },
    cardTitle: {
      fontSize: 12,
      fontFamily: "direct-bold",
      flex: 8,
      textAlign: "left",
      color: "#000000",
    },
    loanTitle: {
      fontSize: 10,
      fontFamily: "direct-bold",
      color: "#000000",
    },
    loanDuration: {
      fontSize: 16,
      color: "#000000",
      fontFamily: "direct-bold",
      lineHeight: 26,
    },
    floatingLogo: {
      position: "absolute",
      top: -window.height * 0.0275,
      // right: 0.175 * window.width,
      right: 20,
      borderRadius: 50,
      padding: 5,
      backgroundColor: "#fff",
      ...boxShadow(10),
    },
  }));

function CreditCard(props) {
  const styles = useStyles();
  const { palette } = useTheme();
  const { loan } = props;
  return (
    <View style={styles.cardContainer}>
      <ImageBackground
        source={{ uri: "https://i.ytimg.com/vi/nQ3hlPCmZV8/maxresdefault.jpg" }}
        style={{
          width: "100%",
          height: "100%",
          background:
            "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) )",
        }}
      >
        <LinearGradient
          colors={["rgb(51, 5, 3)", "rgba(0, 0, 0, 0.6)"]}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            height: "100%",
            opacity: 1,
          }}
        />
        <View style={styles.cardContent}>
          <Text>Inside</Text>
        </View>
      </ImageBackground>
    </View>
  );
}
export default CreditCard;
