import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import * as React from "react";

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          "space-mono": require("../assets/fonts/SpaceMono-Regular.ttf"),
          "direct-regular": require("../assets/fonts/ALS-Direct-mos-Regular.otf"),
          "direct-bold": require("../assets/fonts/ALS-Direct-mos-Bold.otf"),
          "artega-semibold": require("../assets/fonts/ArtegraSans-SemiBold.ttf"),
          "artega-bold": require("../assets/fonts/ArtegraSans-Bold.ttf"),
          "sf-bold": require("../assets/fonts/SF-Pro-Display-Heavy.otf"),
          "sf-black": require("../assets/fonts/SF-Pro-Display-Black.otf"),
          "sf-semibold": require("../assets/fonts/SF-Pro-Display-Semibold.otf"),
          "sf-medium": require("../assets/fonts/SF-Pro-Display-Medium.otf"),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
