import React from 'react';
import { View, Dimensions, Image, StyleSheet, ImageSourceType } from 'react-native';
import { Text, Box } from "../../../theme";

interface SlideProps {
	label: string;
	right?: boolean;
	picture: ImageSourceType;
}

const { width, height } = Dimensions.get("window");

const SLIDE_HEIGHT = 0.61 * height;

const Slide = ({ label, right, picture }: SlideProps) => {
	const transform = [
		{ translateY: (SLIDE_HEIGHT - 100) / 2 },
		{ translateX: right ? width / 2 - 50 : -width / 2 + 50 },
		{ rotate: right ? "-90deg" : "-90deg" }
	]
	return (
		<View style={styles.container}>
			<View style={styles.underlay}>
				<Image source={picture} style={styles.picture} resizeMode="contain" />
			</View>	
			<View style={[styles.titleContainer, { transform }]}>
				<Text variant="hero">{label}</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width
	},
	titleContainer: {
		height: 100,
		justifyContent: "center",
	},
	title: {
		fontSize: 60,
		lineHeight: 60,
		fontFamily: "montserrat-bold",
		color: "white",
		textAlign: "center"
	},
	underlay: {
		...StyleSheet.absoluteFillObject,
		alignItems: "center",
		justifyContent: "center",
		top: 50
	},
	picture: {
		...StyleSheet.absoluteFillObject,
		width: undefined,
		height: undefined, 
	}
})

export default Slide;