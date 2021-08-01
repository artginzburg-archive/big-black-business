import React, { useEffect, useRef, useState } from "react";
import { StatusBar, Text, View, TouchableOpacity } from "react-native";
import * as SecureStore from "expo-secure-store";
import * as LocalAuthentication from "expo-local-authentication";
import Modal from "react-native-modal";
import Svg, { Path } from "react-native-svg";
import CodeInput from "../../components/CodeInput";
import window from "../../constants/Layout";
import useStyles from "./Auth.jss";
import { useUser, useTheme } from "../../hooks";

function CodeConfirmation(props) {
  const pinView = useRef(null);
  const [enteredPin, setEnteredPin] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [faceId, setFaceId] = useState(false);
  const [, /* wrongCode */ setWrongCode] = useState(false);
  const styles = useStyles();
  const { palette } = useTheme();

  const user = useUser() || {};

  const pinConfirmed = () => {
    LocalAuthentication.supportedAuthenticationTypesAsync().then((value) => {
      if (value[0] === 2) {
        setFaceId(true);
        setModalVisible(true);
      } else if (value[0] === 1) {
        setModalVisible(true);
      } else {
        props.confirmCode();
      }
    });
  };

  useEffect(() => {
    if (enteredPin.length === 4) {
      SecureStore.getItemAsync("CODE").then((value) => {
        if (enteredPin === value) {
          pinConfirmed();
        } else {
          setWrongCode(true);
          pinView.current.clear();
          pinView.current.clear();
          pinView.current.clear();
          pinView.current.clear();
          setWrongCode(false);
        }
      });
    }
  }, [enteredPin, pinConfirmed]);
  return (
    <>
      <StatusBar barStyle='dark-content' />
      <View style={styles.containerCode}>
        <Text style={styles.titleCode}>Введите код</Text>
        <CodeInput
          onValueChange={(value) => setEnteredPin(value)}
          pinView={pinView}
          onButtonPress={(key) => {
            if (key === "custom_left") {
              pinView.current.clear();
            }
          }}
        />
        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => {
            props.forgotCode();
          }}
        >
          <Text style={styles.registerButtonText}>Забыли код?</Text>
        </TouchableOpacity>
      </View>
      <Modal
        testID='modal'
        isVisible={modalVisible}
        onSwipeComplete={() => {
          setModalVisible(false);
        }}
        swipeDirection={["up", "left", "right", "down"]}
        style={styles.view}
      >
        <View style={styles.modal}>
          <Svg
            width={0.12 * window.height}
            height={0.12 * window.height}
            fill={palette.primary.main}
            viewBox='0 0 100 100'
            {...props}
          >
            {faceId ? (
              <>
                <Path d='M44.266 58.962c4.267 0 7.739-3.472 7.739-7.739V36.319a2.006 2.006 0 10-4.012 0v14.904a3.73 3.73 0 01-3.726 3.726 2.006 2.006 0 00-.001 4.013zM27.499 37.759v5.732a2.436 2.436 0 004.872 0v-5.732a2.436 2.436 0 00-4.872 0zm42.563 8.169a2.436 2.436 0 002.436-2.436V37.76a2.436 2.436 0 00-4.872 0v5.732a2.436 2.436 0 002.436 2.436zm-2.877 22.973a2.005 2.005 0 00-2.825-.26c-8.643 7.184-21.19 7.184-29.833 0a2.005 2.005 0 10-2.564 3.085 27.295 27.295 0 0017.482 6.314 27.302 27.302 0 0017.482-6.314c.85-.708.967-1.973.258-2.825zM7.007 37.675a2.006 2.006 0 002.006-2.006V25.652c0-9.174 7.464-16.638 16.638-16.638h10.018a2.006 2.006 0 100-4.012H25.651C14.264 5.002 5 14.266 5 25.653V35.67a2.007 2.007 0 002.007 2.005zm85.986 24.65a2.006 2.006 0 00-2.006 2.006v10.018c0 9.174-7.464 16.638-16.638 16.638H64.331a2.006 2.006 0 100 4.012h10.018C85.736 94.999 95 85.735 95 74.348V64.331a2.007 2.007 0 00-2.007-2.006zM35.669 90.987H25.651c-9.174 0-16.638-7.464-16.638-16.638V64.331a2.006 2.006 0 10-4.012 0v10.018C5.001 85.736 14.265 95 25.652 95H35.67a2.006 2.006 0 10-.001-4.013zm38.68-85.986H64.331a2.006 2.006 0 100 4.012h10.018c9.174 0 16.638 7.464 16.638 16.638v10.017a2.006 2.006 0 104.012 0V25.652c0-11.387-9.264-20.651-20.65-20.651z' />
              </>
            ) : (
              <>
                <Path d='M7 60.8c-.7 0-1.3-.5-1.5-1.2-.8-3.3-1.1-6.7-1.1-10 0-9.7 3-18.9 8.7-26.7.5-.7 1.4-.8 2.1-.3.7.5.8 1.4.3 2.1-5.3 7.3-8.1 15.9-8.1 25 0 3.2.4 6.3 1.1 9.4.2.8-.3 1.6-1.1 1.8-.2-.1-.3-.1-.4-.1zm11.2-40.1c-.4 0-.7-.1-1-.4-.6-.6-.6-1.5 0-2.1 1.6-1.6 3.3-3.2 5.1-4.5.7-.5 1.6-.4 2.1.3s.4 1.6-.3 2.1c-1.7 1.3-3.3 2.7-4.7 4.2-.5.3-.8.4-1.2.4zm75.5 30.4c-.8 0-1.5-.7-1.5-1.5 0-23.4-19-42.4-42.4-42.4-6.9 0-13.8 1.7-19.8 5-.7.4-1.6.1-2-.6-.4-.7-.1-1.6.6-2 6.5-3.4 13.8-5.3 21.2-5.3 25 0 45.4 20.4 45.4 45.4 0 .7-.7 1.4-1.5 1.4z' />
                <Path d='M82.4 80.4h-.3c-.8-.1-1.4-.9-1.2-1.7 3.1-17.3 2.5-29.6 2.4-31-.5-9.4-5-18.1-12.3-24.1-.6-.5-.7-1.5-.2-2.1s1.5-.7 2.1-.2c7.9 6.5 12.8 16 13.4 26.2.1 1.4.7 14.1-2.5 31.7-.1.7-.7 1.2-1.4 1.2zm-70.1-6.7h-.4c-.8-.2-1.3-1-1.1-1.8 2.9-11.4 2.5-20 2.5-20.1-1.2-20.1 14.3-37.5 34.4-38.6 5.4-.3 10.7.5 15.7 2.5.8.3 1.1 1.2.8 1.9-.3.8-1.2 1.1-1.9.8-4.6-1.8-9.4-2.6-14.4-2.3-18.5 1.1-32.7 17-31.6 35.5 0 .1.4 9.1-2.6 21-.2.7-.8 1.1-1.4 1.1zm59.3 15.5h-.4c-.8-.2-1.3-1-1.1-1.8 1.5-5.8 2.6-11.8 3.4-17.8.1-.8.8-1.4 1.7-1.3.8.1 1.4.9 1.3 1.7-.8 6-2 12.1-3.5 18-.1.7-.8 1.2-1.4 1.2z' />
                <Path d='M76 59.7c-.9 0-1.5-.7-1.5-1.6.3-5.8.1-9.5.1-9.9-.8-13.7-12.6-24.1-26.2-23.4-2.6.2-5.2.7-7.6 1.7-.8.3-1.6-.1-1.9-.8-.3-.8.1-1.6.8-1.9 2.7-1.1 5.6-1.7 8.6-1.9C63.5 21 76.7 32.7 77.6 48c0 .7.2 4.4-.1 10.3 0 .8-.7 1.4-1.5 1.4zM18.8 82.2c-.2 0-.3 0-.5-.1-.8-.3-1.2-1.1-1-1.9 5.2-15.9 4.6-28.9 4.6-29-.5-8.1 2.6-16.1 8.5-21.7.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1-5.3 5-8 12.1-7.6 19.4 0 .1.7 13.6-4.8 30.1 0 .7-.6 1.1-1.3 1.1z' />
                <Path d='M61.3 93.4c-.1 0-.3 0-.5-.1-.8-.2-1.2-1.1-1-1.9 4.5-14.4 6.7-30 6-42.8-.2-2.8-1-5.5-2.6-7.8-.5-.7-.3-1.6.4-2.1s1.6-.3 2.1.4c1.8 2.8 2.8 6 3 9.3.8 13.1-1.5 29.1-6.1 43.9-.1.7-.7 1.1-1.3 1.1zM26.1 88c-.2 0-.3 0-.5-.1-.8-.3-1.2-1.1-.9-1.9 6.8-18.6 6.1-34.7 6.1-35.4-.5-10.5 7.6-19.4 18-20 2.9-.2 5.8.3 8.5 1.5.8.3 1.1 1.2.8 2s-1.2 1.1-2 .8c-2.3-1-4.7-1.4-7.1-1.2-8.8.5-15.6 8-15.2 16.8.1 1.8.6 17.7-6.2 36.6-.3.5-.9.9-1.5.9z' />
                <Path d='M51.3 94.9c-.2 0-.3 0-.5-.1-.8-.3-1.2-1.1-.9-1.9 8.2-23.8 7.2-43.5 7.2-43.7-.2-4-3.6-7-7.7-6.8-4 .2-7.1 3.7-6.8 7.7 0 .4.1 2.7 0 6.3 0 .8-.7 1.5-1.6 1.4-.8 0-1.5-.7-1.4-1.6.1-3.5 0-5.6 0-6-.3-5.6 4-10.5 9.7-10.8s10.5 4 10.8 9.7c0 .2 1.1 20.4-7.3 44.9-.3.5-.9.9-1.5.9zM34.1 92c-.2 0-.4 0-.5-.1-.8-.3-1.2-1.2-.9-1.9 2.9-7.7 4.9-15.9 6-24.4.1-.8.9-1.4 1.7-1.3s1.4.9 1.3 1.7c-1.1 8.7-3.2 17.1-6.2 25.1-.3.6-.8.9-1.4.9zm8.3 2.3c-.2 0-.3 0-.5-.1-.8-.3-1.2-1.1-.9-1.9.7-1.8 1.3-3.8 1.9-5.7.2-.8 1.1-1.2 1.9-1 .8.2 1.2 1.1 1 1.9-.6 2-1.3 3.9-2 5.8-.2.6-.8 1-1.4 1z' />
                <Path d='M46.8 79.4h-.3c-.8-.2-1.3-1-1.1-1.8 3.6-15.9 3-27.7 3-27.9 0-.8.6-1.5 1.4-1.6.8 0 1.5.6 1.6 1.4 0 .5.7 12.4-3 28.7-.3.7-.9 1.2-1.6 1.2z' />
              </>
            )}
          </Svg>
          <Text style={styles.titleModal}>
            Использовать {faceId ? "Face ID" : "Touch ID"} для входа в
            приложение?
          </Text>
          <View>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => {
                LocalAuthentication.authenticateAsync().then((e) => {
                  if (e.success === true) {
                    props.enableBiometrics();
                    props.confirmCode();
                  }
                });
              }}
            >
              <Text style={styles.modalButtonText}>Использовать</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.secondaryButton}
              onPress={() => {
                user.setUser({
                  ...user,
                  auth: {
                    ...user.auth,
                    codeConfirmed: true,
                  },
                });
              }}
            >
              <Text style={styles.secondaryButtonText}>Настроить позже</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
}

export default CodeConfirmation;
