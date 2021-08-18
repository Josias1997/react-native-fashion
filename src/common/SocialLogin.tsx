import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const icons = [
	{
		name: "facebook",
	},
	{
		name: "google",
	},
	{
		name: "apple",
	}
]

const SocialLogin = () => {
	return (
		<View style={styles.container}>
			{icons.map(({ name }, index) => (
				<TouchableOpacity 
					key={index} 
					onPress={() => true}
					style={styles.iconButton}
				>
					<Icon name={name} color="white" size={40} />
				</TouchableOpacity>
			))}
		</View>
	)
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center"
	},
	iconButton: {
		padding: 10
	}
})

export default SocialLogin