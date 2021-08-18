import React from 'react';
import { View, StyleSheet, Linking } from 'react-native';
import { StackNavigationProps } from "@react-navigation/native";
import { Formik } from "formik";
import * as Yup from "yup"; 

import { Routes } from "../../types/Routes";
import { Container, Button, Input, Checkbox, AuthenticationFooter } from "../../common/"
import { Text, Box } from "../../../theme";

const schema = Yup.object().shape({
	email: Yup.string()
		.email("Invalid email")
		.required("Email is required")
});

const ForgotPassword = ({ navigation }: StackNavigationProps<Routes, "ForgotPassword">) => {
	const footer = (
		<AuthenticationFooter 
			title="Don't work?" 
			action="Try another way" 
			onPress={() => Linking.openURL("mailto:kologojosias@gmail.com")} 
			disableIcons
		/>
	);

	return (
		<Container footer={footer}>
			<Box padding="xl" >
				<Text 
					variant="title1" 
					textAlign="center"
					marginBottom="l"
				>
					Forgot Password ?
				</Text>
				<Text
					variant="body"
					textAlign="center"
					marginBottom="l"
				>
				 	Enter the email address linked associated with your account
				</Text>
				<Formik 
					initialValues={{ 
						email: "",  
					}}
					onSubmit={values => console.log(values)}
					validationSchema={schema}
				>
					{({ 
						handleChange, 
						handleSubmit, 
						handleBlur, 
						values, 
						errors, 
						touched, 
						setFieldValue 
					}) => (
						<Box>
							<Box marginBottom="m">
								<Input 
									icon="mail" 
									error={errors.email}
									touched={touched.email}
									placeholder="Enter your Email" 
									onChangeText={handleChange("email")}
									onBlur={handleBlur("email")}
									autoCompleteType="email"
									autoCapitalize="none"
									returnKeyType="go"
									returnKeyLabel="go"
									onSubmitEditing={() => handleSubmit()}
								/>
							</Box>
							<Box alignItems="center" marginTop="m">
								<Button 
									variant="primary" 
									onPress={handleSubmit} 
									label="Reset password" 
								/>
							</Box>
						</Box>
					)}
				</Formik>
			</Box>
		</Container>
	);
};

export default ForgotPassword;