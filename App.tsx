import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { ThemeProvider } from "@shopify/restyle";

import { Onboarding } from "./src/Authentication/Onboarding";
import { Welcome } from "./src/Authentication/Welcome";
import theme from "./theme";

const AuthenticationStack = createNativeStackNavigator();

const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator screenOptions={{
      headerShown: false
    }}>
      <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
      <AuthenticationStack.Screen name="Welcome" component={Welcome} />
    </AuthenticationStack.Navigator>
  )
};

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