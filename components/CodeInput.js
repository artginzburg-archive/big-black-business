import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import ReactNativePinView from "react-native-pin-view";
import { useTheme } from "../hooks";
import window from "../constants/Layout";

export default function CodeInput(props) {
  const {
    setCode,
    enteredPin,
    pinView,
    ...codeInputProps
  } = props;
  const { boxShadow, palette } = useTheme();
  return (
    <ReactNativePinView
      // style={{ marginTop:  * window.height }}
      inputSize={18}
      ref={pinView}
      pinLength={4}
      buttonSize={50}
      inputAreaStyle={{
        marginBottom: 0.1 * window.height,
      }}
      inputViewEmptyStyle={{
        backgroundColor: "#ccc",
      }}
      inputViewFilledStyle={{
        backgroundColor: palette.primary.main,
        ...boxShadow(5),
      }}
      buttonAreaStyle={{
        margin: 0.05 * window.width,
        borderRadius: 20,
      }}
      buttonTextStyle={{
        color: "#000",
        fontFamily: "direct-bold",
      }}
      customLeftButton={
        <Icon name="ios-backspace" size={30} color="#000" />
      }
      {...codeInputProps}
    />
  );
}
