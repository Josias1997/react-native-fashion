import React, { ReactNode } from 'react';
import { View, Image, Dimensions, StatusBar, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { Box } from "../../theme";

const { width, height } = Dimensions.get("window");

interface ContainerProps {
	children: ReactNode;
	footer: ReactNode
}

const Container = ({ children, footer }: ContainerProps) => {
	return (
		<Box flex={1} heig backgroundColor="secondary" position="absolute">
			<StatusBar barStyle="light-content" />
			<Box backgroundColor="white">
				<Box backgroundColor="secondary" borderBottomLeftRadius="xl" overflow="hidden" height={height * 0.2}>
				</Box>
			</Box>
			<Box flex={1} overflow="hidden" height={height * 0.65}>
				<Box 
					flex={1} 
					borderRadius="xl" 
					borderTopLeftRadius={0} 
					backgroundColor="white"
				>
					<KeyboardAwareScrollView>
						{children}
					</KeyboardAwareScrollView>
				</Box>
			</Box>
			<Box height={height * 0.15} backgroundColor="secondary">
				{footer}
			</Box>
		</Box>
	)
}

export default Container;