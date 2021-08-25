import React from 'react';
import { Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";

import { Box, Theme } from "../../theme";

interface RoundedIconButtonProps {
	name: string;
	size: number;
	color: string;
	backgroundColor: string;
	onPress: () => void;
}


const RoundedIconButton = ({ name, size, color, backgroundColor, onPress }: RoundedIconButtonProps) => {
	return (
		<Box 
			flex={1} 
			alignItems="center"
			justifyContent="center"
		>
			<TouchableOpacity
				onPress={onPress} 
				style={[styles.button, {
					width: size,
					height: size,
					borderRadius: size / 2,
					backgroundColor: backgroundColor,
				}]}
			>
				<Icon 
					name="x" 
					color={color} 
					size={45}  
				/>
			</TouchableOpacity>
		</Box>
	)
};

const styles = StyleSheet.create({
	button: {
		alignItems: "center",
		justifyContent: "center"
	}
});

export default RoundedIconButton;