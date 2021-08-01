import * as React from "react";
import LottieView from "lottie-react-native";

export default function Loading() {
  return (
    <LottieView
      source={require("../assets/long.json")}
      autoPlay
      loop
      style={{
        width: 350,
        height: 350,
      }}
    />
  );
}
