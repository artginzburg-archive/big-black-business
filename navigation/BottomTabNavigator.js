import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import { View, Text, Image } from "react-native";

import Header from "../components/Header";

// import { initialWindowSafeAreaInsets } from "react-native-safe-area-context";
import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/LinksScreen";
import window from "../constants/Layout";
import { useTheme } from "../hooks";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Home";

function getHeaderTitle(route) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case "Home":
      return "Главная";
    case "Profile":
      return "Профиль";
    case "Loans":
      return "Кредиты";
    case "Chat":
      return "Чат с поддержкой";
    default:
      return "Заголовок";
  }
}

function withHeader(Component, title) {
  return (props) => (
    <View style={{ flex: 1 }}>
      <Header title={title} />
      <Component {...props} />
    </View>
  );
}

const Loans = withHeader(HomeScreen, "Кредиты");
const Chat = withHeader(HomeScreen, "Чат");
const Profile = withHeader(LinksScreen, "");
export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });
  const { palette } = useTheme();
  return (
    <BottomTab.Navigator
      initialRouteName={INITIAL_ROUTE_NAME}
      tabBarOptions={{
        activeTintColor: palette.primary.main,
        labelStyle: { fontFamily: "direct-regular", marginBottom: 10 },
        style: { height: window.height * 0.1 },
      }}
    >
      <BottomTab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarLabel: "Главная",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name='circle' />
          ),
        }}
      />
      <BottomTab.Screen
        name='Loans'
        component={Loans}
        options={{
          tabBarLabel: "Кредиты",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name='box' />
          ),
        }}
      />
      <BottomTab.Screen
        name='Chat'
        component={Chat}
        options={{
          tabBarLabel: "Чат",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name='message' />
          ),
        }}
      />
      <BottomTab.Screen
        name='Profile'
        component={Profile}
        options={{
          tabBarLabel: "Профиль",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name='user' />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
