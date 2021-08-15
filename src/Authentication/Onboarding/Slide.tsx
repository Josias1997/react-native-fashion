import React from 'react';
import { View, Text, Dimensions, Image, StyleSheet } from 'react-native';

interface SlideProps {
	label: string;
	right?: boolean;
	picture: string;
}

const { width, height } = Dimensions.get("window");

const SLIDE_HEIGHT = 0.61 * height;
const BORDER_RADIUS = 75;

const Slide = ({ label, right, picture }: SlideProps) => {
	const transform = [
		{ translateY: (SLIDE_HEIGHT - 100) / 2 },
		{ translateX: right ? width / 2 - 50 : -width / 2 + 50 },
		{ rotate: right ? "-90deg" : "-90deg" }
	]
	return (
		<View style={styles.container}>
			<View style={styles.underlay}>
				<Image source={{ uri: picture }} style={styles.picture} />
			</View>	
			<View style={[styles.titleContainer, { transform }]}>
				<Text style={styles.title}>{label}</Text>
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
		justifyContent: "flex-end"
	},
	picture: {
		...StyleSheet.absoluteFillObject,
		width: undefined,
		height: undefined,
		borderBottomRightRadius: BORDER_RADIUS 
	}
})

export default Slide;