import * as React from "react";
import {
  Platform,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import AnimatedInput from "react-native-animated-input";
import Modal from "react-native-modal";
import LottieView from "lottie-react-native";
import window from "../../constants/Layout";
import Loading from "../../components/Loading";
import useStyles from "./Auth.jss";

function Register(props) {
  const {
    emailSended,
  } = props;
  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [passwordHidden/* , hidePassword */] = React.useState(true);
  const [modalVisible, setModalVisible] = React.useState(false);
  const styles = useStyles();
  const loading = (time) => {
    const promise = new Promise(((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, time);
    }));
    return promise;
  };
  const sendMail = () => {
    setModalVisible(true);
    loading(50000).then(() => {
      console.log(`${props.emailSended}<-------------------------`);
      props.register("xkislyakovx@gmail.com");
    });
  };

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.root}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
          >
            <View style={styles.form}>
              <Text style={styles.title}>Регистрация</Text>
              <View style={styles.margin}>
                <AnimatedInput
                  placeholder="Почта"
                  errorText="Error"
                  onChangeText={(e) => {
                    setLogin(e);
                  }}
                  value={login}
                  styleBodyContent={{ borderBottomWidth: 1 }}
                  styleInput={styles.input}
                  styleLabel={{ marginBottom: 5 }}
                />

                <AnimatedInput
                  placeholder="Пароль"
                  errorText="Error"
                  onChangeText={(e) => {
                    setPassword(e);
                  }}
                  value={password}
                  styleBodyContent={{ borderBottomWidth: 1 }}
                  styleInput={styles.input}
                  secureTextEntry={passwordHidden}
                />
                <AnimatedInput
                  placeholder="Подтвердите пароль"
                  errorText="Error"
                  onChangeText={(e) => {
                    setConfirmPassword(e);
                  }}
                  value={confirmPassword}
                  styleBodyContent={{ borderBottomWidth: 1 }}
                  styleInput={styles.input}
                  secureTextEntry={passwordHidden}
                />
              </View>
              <TouchableOpacity
                style={styles.loginButton}
                onPress={() => {
                  if (password === confirmPassword) {
                    props.register(login, password);
                  } else {
                    Alert.alert(
                      "Введенные пароли не совпадают",
                      "Проверьте введенные данные",
                    );
                  }
                }}
              >
                <Text
                  style={styles.loginButtonText}
                  onPress={() => {
                    sendMail();
                  }}
                >
                  Регистрация
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.registerButton}
                onPress={() => {
                  props.navigation.navigate("SignIn");
                }}
              >
                <Text style={styles.registerButtonText}>
                  Уже зарегестированы?
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      <Modal
        testID="modal"
        isVisible={modalVisible}
        onSwipeComplete={() => {
          setModalVisible(false);
        }}
        swipeDirection={["up", "left", "right", "down"]}
        style={styles.view}
      >
        {!emailSended ? (
          <View style={styles.modal}>
            <Loading />
          </View>
        ) : (
          <View style={styles.modal}>
            <View
              style={{
                maxHeight: 0.1 * window.height,
                marginBottom: 0.1 * window.height,
              }}
            >
              <LottieView
                source={require("../../assets/paperplane.json")}
                autoPlay
                loop
                style={{
                  width: 0.25 * window.height,
                  height: 0.25 * window.height,
                }}
              />
            </View>
            <Text style={styles.titleModal}>Сообщение отправлено.</Text>
            <Text style={styles.subText}>
              На вашу почту отправлено письмо с ссылкой для подтверждения.
            </Text>
            <View>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => {
                  console.log(`${props.emailSended}<-------------------------`);
                }}
              >
                <Text style={styles.modalButtonText}>Подтвердить почту</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.secondaryButton}
                onPress={() => props.confirmCode()}
              >
                <Text style={styles.secondaryButtonText}>
                  Сообщение не пришло
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Modal>
    </>
  );
}
export default Register;
