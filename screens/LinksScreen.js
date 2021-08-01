import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import UserAvatar from "react-native-user-avatar";
import { ListItem } from "react-native-elements";
import window from "../constants/Layout";
import { useUser, useTheme } from "../hooks";
import { StatusBar } from "expo-status-bar";

const list = [
  {
    title: "Личные данные",
    icon: "face",
  },
  {
    title: "Мои заказы",
    icon: "archive",
  },
  {
    title: "Сообщить об ошибке",
    icon: "error",
  },
  {},
];

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#fafafa",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  name: {
    marginTop: 0.05 * window.height,
    fontFamily: "direct-bold",
    fontSize: 18,
  },
});

function LinksScreen(props) {
  let fullName = "";
  const { palette } = useTheme();
  const { personalData } = useUser() || {};
  if (personalData) {
    fullName = `${personalData.firstName} ${personalData.secondName}`;
  }
  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flex: 2,
          marginTop: 0.05 * window.height,
        }}
      >
        <UserAvatar
          size={80}
          name={fullName}
          bgColor={palette.primary.main}
          style={{ maxWidth: 80 }}
        />
        <Text style={styles.name}>{fullName}</Text>
      </View>
      <View style={{ flex: 4 }}>
        {list.map((item, i) => {
          if (i === list.length - 1) {
            return (
              <ListItem
                key={list.length}
                title='Выход'
                leftIcon={{ name: "keyboard-arrow-right", color: "red" }}
                style={{
                  width: window.width,
                  marginTop: 0.05 * window.height,
                }}
                titleStyle={{
                  fontFamily: "direct-regular",
                  color: "red",
                }}
                onPress={props.leave}
                containerStyle={{ backgroundColor: "#f9eaed" }}
              />
            );
          }
          return (
            <ListItem
              key={`${i + 1}`}
              title={item.title}
              leftIcon={{ name: item.icon }}
              bottomDivider
              chevron
              style={{ width: window.width }}
              titleStyle={{ fontFamily: "direct-regular" }}
            />
          );
        })}
      </View>
    </View>
  );
}
export default LinksScreen;

LinksScreen.navigationOptions = {
  header: null,
};
