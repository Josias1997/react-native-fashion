import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RectButton } from "react-native-gesture-handler";

interface ButtonProps {
	label: string;
	variant: "default"  | "primary";
	onPress: () => void;
}

const Button = ({ label, variant, onPress }: ButtonProps) => {
	return (
		<RectButton 
			onPress={onPress}
			style={[styles.container, {
				backgroundColor: variant === "primary" ? "#2CB9B0" : "rgba(12, 13, 52, 0.1)" 
			}]}>
			<Text style={[styles.label, {
				color: variant === "primary" ? "white" : "black"
			}]}>{label}</Text>
		</RectButton>
	);
}

const styles = StyleSheet.create({
	container: {
		borderRadius: 25,
		height: 50,
		width: 245,
		justifyContent: "center",
		alignItems: "center"
	},
	label: {
		fontSize: 15,
		fontFamily: "montserrat-regular",
		textAlign: "center"
	}
})

export default Button;