import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import { ChatStackNavigator, SettingsStackNavigator, StoriesStackNavigator } from "./";

const Tab = createMaterialBottomTabNavigator();

const MainNavigator = () => {
	return (
		<Tab.Navigator screenOptions={{
			headerShown: false
		}}>
			<Tab.Screen 
				name="ChatFeed" 
				component={ChatStackNavigator} 
			/>
			<Tab.Screen 
				name="Search" 
			/>
			<Tab.Screen 
				name="NewMessage" 
			/>
			<Tab.Screen 
				name="Settings" 
				component={SettingsStackNavigator} 
			/>
			<Tab.Screen 
				name="Stories" 
				component={StoriesStackNavigator}
			/>
		</Tab.Navigator>
	)
};

export default MainNavigator;