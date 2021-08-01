import * as React from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Carousel from "react-native-snap-carousel";

import window from "../constants/Layout";
import Backdrop from "../assets/vector/Backdrop";
import CreditCard from "../components/CreditCard";
import Header from "../components/Header";
import { makeStyles, useUser } from "../hooks";

const useStyles = () =>
  makeStyles(({ palette, boxShadow, spacing, typo }) => ({
    container: {
      flex: 1,
    },

    contentContainer: {
      flex: 1,
      backgroundColor: palette.background.default,
    },
    content: {},
    title: {
      fontFamily: "direct-bold",
      paddingHorizontal: spacing(2.5),
      ...typo("h5"),
      marginTop: 0.03 * window.height,
    },
    bounceView: {
      position: "absolute",
      backgroundColor: palette.primary.main,
      top: 0,
      height: window.height * 0.5,
      width: "100%",
      left: 0,
    },
    creditCards: {
      marginRight: spacing(0.12),
      marginLeft: -window.width * 0.45,
      ...boxShadow(2),
    },
  }));
function HomeScreen() {
  const { currentLoans } = useUser() || {};
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <View style={styles.bounceView} />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.content}>
          {/* <View>
            <Text style={styles.title}>Табы</Text>
          </View> */}
          <View>
            <View
              style={{
                position: "absolute",
                width: window.width,
                height: window.width * 0.5805,
                top: 0,
                // left: window.width * 0.45,
              }}
            >
              <Backdrop
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </View>
            <Header title='' transparent light />

            <Text style={{ ...styles.title, color: "#ffffff" }}>
              Актуальные видео
            </Text>
            <View style={styles.creditCards}>
              <Carousel
                data={currentLoans}
                renderItem={({ item, index }) => (
                  <CreditCard loan={item} key={index} />
                )}
                inactiveSlideOpacity={1}
                inactiveSlideScale={0.85}
                sliderWidth={window.width * 1.8}
                itemWidth={0.8 * window.width}
                itemHeight={1 * window.width}
              />
            </View>
          </View>
          <Text style={styles.title}>Кредитный рейтинг</Text>
        </View>
      </ScrollView>
    </View>
  );
}
export default HomeScreen;

HomeScreen.navigationOptions = {
  header: null,
};
