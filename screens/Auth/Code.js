import React, { useEffect, useRef, useState } from "react";
import {
  StatusBar,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import * as SecureStore from "expo-secure-store";
import CodeInput from "../../components/CodeInput";
import useStyles from "./Auth.jss";
import { useUser } from "../../hooks";

function Code(props) {
  const {
    setCode,
    wrongProfile,
  } = props;
  const user = useUser();
  const pinView = useRef(null);
  const [/* showRemoveButton */, setShowRemoveButton] = useState(false);
  const [enteredPin, setEnteredPin] = useState("");
  const [showCompletedButton, setShowCompletedButton] = useState(false);
  const styles = useStyles();
  useEffect(() => {
    if (enteredPin.length > 0) {
      setShowRemoveButton(true);
    } else {
      setShowRemoveButton(false);
    }
    if (enteredPin.length === 4) {
      setShowCompletedButton(true);
    } else {
      setShowCompletedButton(false);
    }
  }, [enteredPin]);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.containerCode}>
        <Text style={styles.titleCode}>Задайте код доступа</Text>
        <CodeInput
          onValueChange={(value) => setEnteredPin(value)}
          setCode={setCode}
          pinView={pinView}
          onButtonPress={(key) => {
            if (key === "custom_left") {
              pinView.current.clear();
            }
            if (key === "custom_right") {
              SecureStore.setItemAsync("CODE", enteredPin).then(() => {
                user.setUser({
                  ...user,
                  auth: {
                    ...user.auth,
                    hasCode: true,
                  },
                });
                props.navigation.navigate("CodeConfirmation");
              });
            }
          }}
          customRightButton={
            showCompletedButton ? (
              <FontAwesome5 name="arrow-circle-right" size={24} color="black" />
            ) : undefined
          }
        />
        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => {
            wrongProfile();
          }}
        >
          <Text style={styles.secondaryButtonText}>
            Не
            {" "}
            {user.personalData.firstName}
            {" "}
            {user.personalData.secondName}
            ?
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
export default Code;
