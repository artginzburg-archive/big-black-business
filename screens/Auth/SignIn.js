import * as React from "react";
import {
  Text,
  View,
  Platform,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import AnimatedInput from "react-native-animated-input";
import { FontAwesome5 } from "@expo/vector-icons";
import { useTheme, useUser } from "../../hooks";
import useStyles from "./Auth.jss";
import userData from "../../user";

// const useStyles = ();

function SignIn(props) {
  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordHidden, hidePassword] = React.useState(true);
  const styles = useStyles();
  const { spacing } = useTheme();
  const user = useUser();

  return (
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
            <Text style={styles.logo}>нейбор</Text>
            <Text style={styles.title}>Авторизация</Text>
            <View style={styles.margin}>
              <AnimatedInput
                placeholder='Почта'
                errorText='Error'
                onChangeText={(e) => {
                  setLogin(e);
                }}
                value={login}
                styleBodyContent={{ borderBottomWidth: 1 }}
                styleInput={styles.input}
                // styleLabel={{ marginBottom: 5 }}
              />
              <View style={{ display: "flex", flexDirection: "column" }}>
                <AnimatedInput
                  placeholder='Пароль'
                  errorText='Error'
                  onChangeText={(e) => {
                    setPassword(e);
                  }}
                  value={password}
                  styleBodyContent={{ borderBottomWidth: 1 }}
                  styleInput={styles.input}
                  secureTextEntry={passwordHidden}
                />
                <TouchableOpacity
                  onPress={() => {
                    hidePassword(!passwordHidden);
                  }}
                  style={styles.addButton}
                >
                  <FontAwesome5
                    name={passwordHidden ? "eye-slash" : "eye"}
                    size={spacing(2)}
                    color='black'
                  />
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => {
                if (login === "1" && password === "1") {
                  props.navigation.navigate("Code");
                  user.setUser({
                    ...user,
                    ...userData,
                  });
                }
              }}
            >
              <Text style={styles.loginButtonText}>Войти</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.registerButton}
              onPress={() => props.navigation.navigate("Register")}
            >
              <Text style={styles.registerButtonText}>Регистрация</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
export default SignIn;
