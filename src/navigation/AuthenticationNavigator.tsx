import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Onboarding, Welcome, Login, Register, ForgotPassword } from "../Authentication";
import { Routes } from "../types/Routes";

const AuthenticationStack = createNativeStackNavigator<Routes>();

const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator screenOptions={{
      headerShown: false
    }}>
      <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
      <AuthenticationStack.Screen name="Welcome" component={Welcome} />
      <AuthenticationStack.Screen name="Login" component={Login} />
      <AuthenticationStack.Screen name="Register" component={Register} />
      <AuthenticationStack.Screen name="ForgotPassword" component={ForgotPassword} />
    </AuthenticationStack.Navigator>
  )
};

export default AuthenticationNavigator;