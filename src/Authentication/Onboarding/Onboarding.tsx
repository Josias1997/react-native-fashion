import React, { useRef } from "react";
import { View, ScrollView, Dimensions, StyleSheet } from "react-native";
import { useValue, useScrollHandler, interpolateColor } from "react-native-redash/lib/module/v1";
import Animated, { multiply, divide } from "react-native-reanimated";

import Slide from "./Slide";
import Footer from "./Footer";
import Dot from "./Dot";

const { width, height } = Dimensions.get("window");

const SLIDE_HEIGHT = 0.61 * height;
const BORDER_RADIUS = 75;

interface OnboardingProps {}

const slides = [
	{ 
		label: "Relaxed", 
		color: "#BFEAF5", 
		footerTitle: "Find Your Outfit", 
		footerDescription: "Confused about your outfit? Dont't worry! Find the best outfit here!" ,
		picture: "https://source.unsplash.com/featured/?fashion",
	},
	{ 
		label: "Playful", 
		color: "#BEECC4", 
		footerTitle: "Hear It First, Wear it First", 
		footerDescription: "Hating the clothes in your wardrobe? Explore hundreds of noutfit ideas", 
		picture: "https://source.unsplash.com/featured/?design,fashion",
	},
	{ 
		label: "Excentric", 
		color: "#FFE4D9", 
		footerTitle: "Your Style, Your Way", 
		footerDescription: "Create your individual & unique style and look amazing everyday",
		picture: "https://source.unsplash.com/featured/?style,fashion",
	},
	{ 
		label: "Funky", 
		color: "#FFDDDD", 
		footerTitle: "Look Good, Feel Good", 
		footerDescription: "Discover the latest trends in fashion and explore your personality", 
		picture: "https://source.unsplash.com/featured/?play,fashion",
	}
];

const Onboarding = () => {
	const scroll = useRef<Animated.ScrollView>(null);
	const { scrollHandler, x } = useScrollHandler();
	const backgroundColor = interpolateColor(x, {
		inputRange: slides.map((_, index) => index * width),
		outputRange: slides.map(slide => slide.color)
	});

	return (
		<View style={styles.container}>
			<Animated.View style={[styles.slider, {
				backgroundColor
			}]}>
				<Animated.ScrollView 
					ref={scroll}
					horizontal 
					snapToInterval={width} 
					decelerationRate="fast"
					showsHorizontalScrollIndicator={false}
					bounces={false}
					scrollEventThrottle={1}
					{...scrollHandler}
				>
					{
						slides.map(({ label, picture }, index) => (
							<Slide 
								key={index}
								{...{ label, picture }} 
								right={!(index % 2 === 0)} 
							/>
						))
					}
				</Animated.ScrollView>
			</Animated.View>
			<View style={styles.footer}>
				<Animated.View style={[styles.overlay, { backgroundColor }]} />
				<View style={styles.footerContent}>
					<View style={styles.pagination}>
						{slides.map((_, index) => (
							<Dot 
								key={index} 
								currentIndex={divide(x, width)} 
								{...{index}} 
							/>))}
					 </View>
					 <Animated.View 
					 	style={{
							flex: 1,
							flexDirection: "row",
							width: width * slides.length,
							transform: [
								{ translateX: multiply(x, -1) }
							] 
						}}
					>
						{slides.map(({ footerTitle, footerDescription }, index) =>
							<Footer 
								key={index} 
								onPress={() => {
									if (scroll.current) {
										scroll.current
											.getNode()
											.scrollTo({ x: width * (index + 1), animated: true })
									}
								}}
								last={index === (slides.length - 1)} 
								{...{ footerTitle, footerDescription }} 
							/>
						)} 	
					</Animated.View>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
	},
	slider: {
		height: SLIDE_HEIGHT,
		backgroundColor: "cyan",
		borderBottomRightRadius: BORDER_RADIUS
	},
	footer: {
		flex: 1
	},
	overlay: {
		...StyleSheet.absoluteFillObject, 
		backgroundColor: "cyan"
	},
	footerContent: {
		flex: 1,
		backgroundColor: "white",
		borderTopLeftRadius: BORDER_RADIUS	
	},
	pagination: { 
		...StyleSheet.absoluteFillObject,
		height: BORDER_RADIUS,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	 }
});

export default Onboarding;	