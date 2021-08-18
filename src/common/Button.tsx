import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';
import { RectButton } from "react-native-gesture-handler";
import { useTheme } from "@shopify/restyle";

import { Theme, Text } from "../../theme";

interface ButtonProps {
	label: string;
	variant: "default"  | "primary" | "transparent";
	onPress: () => void;
	children: ReactNode;
}

const Button = ({ label, variant, onPress, children }: ButtonProps) => {
	const theme = useTheme<Theme>();
	const backgroundColor = 
		variant === "primary" ? 
		theme.colors.primary : 
		variant === "transparent" ?
		"transparent" :
		theme.colors.grey;
	const color = variant === "primary" ? theme.colors.white : theme.colors.secondary;
	return (
		<RectButton 
			onPress={onPress}
			style={[styles.container, { backgroundColor }]}
		>
			{children ? children : (
				<Text variant="button" style={{ color }}>{label}</Text>
			)}
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