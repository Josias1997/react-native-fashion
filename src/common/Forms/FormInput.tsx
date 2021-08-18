import React, { forwardRef } from 'react';
import { View, Text, TextInput, TextInputProps, StyleSheet } from 'react-native';
import { Feather as Icon } from "@expo/vector-icons";
import { useTheme } from "@shopify/restyle";

import { Theme, Box } from "../../../theme";

interface FormInputProps extends TextInputProps {
	icon: string;
	touched?: boolean;
	error: string;
}


const FormInput = forwardRef<TextInput, FormInputProps>(({ icon, touched, error, ...props }, ref) => {
	const theme = useTheme<Theme>();
	const SIZE = theme.borderRadii.m * 2;
	const reColor: keyof typeof theme.colors = !touched ? "text" : (error ? "danger" : "primary");
	const color = theme.colors[reColor];

	return (
		<Box 
			flexDirection="row" 
			height={48} 
			alignItems="center" 
			borderRadius="s" 
			borderWidth={StyleSheet.hairlineWidth}
			borderColor={reColor}
		>
			<Box padding="s">
				<Icon name={icon} size={16} {... { color }}  />
			</Box>
			<Box flex={1}>
				<TextInput
					ref={ref} 				
					placeholderColor={color}
					underlineColorAndroid="transparent" 
					{...props}
				/>
			</Box>
			{
				touched && (
					<Box 
						height={SIZE} 
						width={SIZE} 
						borderRadius="m"
						margin="s" 
						backgroundColor={reColor} 
						alignItems="center"
						justifyContent="center"
					>
						<Icon 
							size={16} 
							name={!error ? "check" : "x"} 
							color="white"
							style={{ textAlign: "center" }} 
						/>
					</Box>
				)
			}
		</Box>
	)
});

export default FormInput;