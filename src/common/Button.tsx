import React from 'react';
import { View, StyleSheet } from 'react-native';
import { RectButton } from "react-native-gesture-handler";
import { useTheme } from "@shopify/restyle";

import { Text } from "../../theme";

interface ButtonProps {
	label: string;
	variant: "default"  | "primary";
	onPress: () => void;
}

const Button = ({ label, variant, onPress }: ButtonProps) => {
	const theme = useTheme();
	const backgroundColor = variant === "primary" ? theme.colors.primary : theme.colors.grey;
	const color = variant === "primary" ? theme.colors.white : theme.colors.black;
	return (
		<RectButton 
			onPress={onPress}
			style={[styles.container, { backgroundColor }]}
		>
			<Text variant="button" style={{ color }}>{label}</Text>
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