import React from 'react';
import { TouchableOpacity } from 'react-native';
import { BorderlessButton } from "react-native-gesture-handler";

import { Box, Text } from "../../theme";
import SocialLogin from "./SocialLogin";

interface AuthenticationFooterProps {
	onPress: () => void;
	title: string;
	action: string;
	disableIcons?: boolean;
}

const AuthenticationFooter = ({ title, action, disableIcons, onPress }: AuthenticationFooterProps) => {
	return (
		<>
		{
			!disableIcons && <SocialLogin />
		}
			<Box flex={1} alignItems="center" justifyContent="center">
				<TouchableOpacity variant="transparent" onPress={onPress}>
					<Text variant="button" color="white">
						<Text>{title + " "}</Text>
						<Text color="primary">{action}</Text>
					</Text>
				</TouchableOpacity>
			</Box>
		</>
	)
}

export default AuthenticationFooter;