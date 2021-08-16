import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RectButton } from "react-native-gesture-handler";
import { useTheme } from "@shopify/restyle";

interface ButtonProps {
	label: string;
	variant: "default"  | "primary";
	onPress: () => void;
}

const Button = ({ label, variant, onPress }: ButtonProps) => {
	const theme = useTheme();
	return (
		<RectButton 
			onPress={onPress}
			style={[styles.container, {
				backgroundColor: variant === "primary" ? theme.colors.primary : theme.colors.default
			}]}>
			<Text style={[styles.label, {
				color: variant === "primary" ? theme.colors.white : theme.colors.black
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