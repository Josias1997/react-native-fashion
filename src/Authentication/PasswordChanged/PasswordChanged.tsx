import React from 'react';
import { View, StyleSheet, Linking } from 'react-native';
import { StackNavigationProps } from "@react-navigation/native";
import { Feather as Icon } from "@expo/vector-icons";
import { useTheme } from "@shopify/restyle";


import { Routes } from "../../types/Routes";
import { Container, Button, RoundedIconButton } from "../../common/"
import { Text, Box, Theme } from "../../../theme";

const SIZE = 80;

const PasswordChanged = ({ navigation }: StackNavigationProps<Routes, "PasswordChanged">) => {
	const theme = useTheme<Theme>();
	return (
		<Container footer={
			<RoundedIconButton 
				name="x" 
				size={60} 
				color={theme.colors.black}
				backgroundColor={theme.colors.white}
				onPress={() => navigation.navigate("Login")} 
			/>}>
			<Box padding="xl">
					<Box 
						backgroundColor="primaryLight"
						alignItem="center"
						justifyContent="center"
						alignSelf="center"
						height={SIZE}
						width={SIZE}
						marginBottom="xl"
						style={{
							borderRadius: SIZE / 2
						}}
					>
						<Text color="primary" textAlign="center">
							<Icon name="check" size={32} />
						</Text>
					</Box>
				<Text 
					variant="title2" 
					textAlign="center"
					marginBottom="l"
				>
					Your password was successfully changed
				</Text>
				<Text
					variant="body"
					textAlign="center"
					marginBottom="l"
				>
				 	Close this screen and login again
				</Text>
				<Box alignItems="center" marginTop="m">
					<Button 
						variant="primary" 
						onPress={() => navigation.navigate("Login")} 
						label="Login now" 
					/>
				</Box>
			</Box>
		</Container>
	);
};

export default PasswordChanged;