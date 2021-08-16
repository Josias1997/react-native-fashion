import React from 'react';
import { Dimensions, StyleSheet, Image } from 'react-native';

import theme, { Box, Text } from "../../../theme";
import { Button } from "../../common";

interface WelcomeProps {}

const { width } = Dimensions.get("window");

const Welcome = () => {
	return (
		<Box flex={1} backgroundColor="white">
			<Box 
				flex={1} 
				borderBottomRightRadius="xl" 
				backgroundColor="grey"
				alignItems="center"
				justifyContent="center"
			>
				<Image source={require("../../../assets/5.png")} resizeMode="contain" style={styles.image} />
			</Box>
			<Box flex={1} borderTopLeftRadius="xl">
				<Box 
					backgroundColor="grey"
					position="absolute"
					top={0}
					left={0}
					right={0}
					bottom={0}
				/>
				<Box 
					backgroundColor="white" 
					borderTopLeftRadius="xl" 
					flex={1}
					justifyContent="space-evenly"
					alignItems="center"
					padding="xl"
				>
					<Text variant="title2">Let's get started</Text>
					<Text variant="body" textAlign="center">
						Login to your account below or signup for an amazing experience
					</Text>
					<Button variant="primary" label="Have an account? Login" />
					<Button variant="default" label="Join us, it's free" />
					<Button variant="default" label="Forgot password?" />
				</Box>
			</Box>
		</Box>
	)
}

const styles = StyleSheet.create({
	image: {
		...StyleSheet.absoluteFillObject,
		top: 50,
		right: 30,
		width: undefined,
		height: undefined
	}
})

export default Welcome;