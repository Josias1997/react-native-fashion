import React, { useState } from 'react';
import { View } from 'react-native';
import { Feather as Icon } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";

import { Box, Text } from "../../../theme";

interface FormCheckboxProps {
	label: string;
	value: boolean;
	onChange: () =>  void;
}

const FormCheckbox = ({ label, value, onChange }: FormCheckboxProps) => {
	return (
		<RectButton onPress={onChange} style={{
			flex: 1,
			justifyContent: "center"
		}}>
			<Box flexDirection="row" alignItems="center">
				<Box 
					marginRight="m"
					height={20}
					width={20}
					borderRadius="s" 
					alignItems="center"
					justifyContent="center"
					borderWidth={1}
					borderColor="primary"
					backgroundColor={value ? "primary" : "white"}
				>
					<Icon name="check" color="white" />
				</Box>
				<Text variant="button">{label}</Text>
			</Box>
		</RectButton>
	)
}

export default FormCheckbox;