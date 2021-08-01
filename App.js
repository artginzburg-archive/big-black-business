import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
  AsyncStorage,
} from "react-native";
import useCachedResources from "./hooks/useCachedResources";
import BottomTabNavigator from "./navigation/BottomTabNavigator";
import LinkingConfiguration from "./navigation/LinkingConfiguration";
import Code from "./screens/Auth/Code";
import CodeConfirmation from "./screens/Auth/CodeConfirmation";
import SignIn from "./screens/Auth/SignIn";
import Register from "./screens/Auth/Register";
import theme from "./theme";
import { ThemeProvider, UserProvider } from "./context";

const Stack = createStackNavigator();

const AuthStack = () => (
  <Stack.Navigator
    initialRouteName='SignIn'
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name='SignIn' component={SignIn} />
    <Stack.Screen name='Register' component={Register} />
    <Stack.Screen name='Code' component={Code} />
    <Stack.Screen name='CodeConfirmation' component={CodeConfirmation} />
  </Stack.Navigator>
);

const MainStack = () => (
  <Stack.Navigator
    initialRouteName='Main'
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name='Main' component={BottomTabNavigator} />
  </Stack.Navigator>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

function Main() {
  const isLoadingComplete = useCachedResources();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const { auth } = user || {};

  const { hasCode, codeConfirmed } = auth || {};

  useEffect(() => {
    AsyncStorage.getItem("user").then((localUser) => {
      setUser(localUser);
      setLoading(false);
    });
  }, []);

  if (!isLoadingComplete) {
    return null;
  }

  if (loading) {
    return null;
  }

  return (
    <UserProvider
      user={{
        ...user,
        setUser,
      }}
    >
      <ThemeProvider theme={theme}>
        <View style={styles.container}>
          {Platform.OS === "ios" && <StatusBar barStyle='dark-content' />}
          <NavigationContainer linking={LinkingConfiguration}>
            {user && hasCode && codeConfirmed ? <MainStack /> : <AuthStack />}
          </NavigationContainer>
        </View>
      </ThemeProvider>
    </UserProvider>
  );
}

export default Main;
