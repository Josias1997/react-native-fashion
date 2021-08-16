import React from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import Animated from "react-native-reanimated";
import { Text } from "../../../theme";

import { Button } from "../../common";

interface FooterProps {
	title: string;
	description: string;
	last?: boolean;
	onPress: () => void;
}

const { width } = Dimensions.get("window");

const Footer = ({ footerTitle, footerDescription, last, onPress }: FooterProps) => {
	return (	
		<View style={styles.container}>
			<Text variant="title2" style={styles.title}>{footerTitle}</Text>
			<Text variant="body" style={styles.description}>{footerDescription}</Text>
			<Button 
				label={last ? "Let's get started" : "Next"} 
				variant={last ? "primary" : "default"}
				onPress={onPress}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 44,
	},
	title: {
		marginBottom: 12,
		color: "#0C0D34",
		textAlign: "center"
	},
	description: {
		color: "#0C0D34",
		textAlign: "center",
		marginBottom: 40 
	}
})

export default Footer;