import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import Animated from "react-native-reanimated";

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
			<Text style={styles.title}>{footerTitle}</Text>
			<Text style={styles.description}>{footerDescription}</Text>
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
		fontFamily: "montserrat-semibold",
		fontSize: 22,
		lineHeight: 30,
		marginBottom: 12,
		color: "#0C0D34",
		textAlign: "center"
	},
	description: {
		fontFamily: "montserrat-regular",
		fontSize: 16,
		lineHeight: 24,
		color: "#0C0D34",
		textAlign: "center",
		marginBottom: 40 
	}
})

export default Footer;