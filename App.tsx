import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { ThemeProvider } from "@shopify/restyle";

import theme from "./theme";
import { AuthenticationNavigator } from "./src/navigation";

const fecthFonts = () => {
  return Font.loadAsync({
    "montserrat-regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "montserrat-medium": require("./assets/fonts/Montserrat-Medium.ttf"),
    "montserrat-semibold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
    "montserrat-bold": require("./assets/fonts/Montserrat-Bold.ttf"),
  })
}

export default function App() {
  const [loaded, setLoaded] = useState(false);

  if (!loaded) {
    return <AppLoading
      startAsync={fecthFonts}
      onFinish={() => setLoaded(true)}
      onError={console.warn}
    />
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AuthenticationNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}