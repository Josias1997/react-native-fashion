import React, { useRef } from 'react';
import { TextInput } from 'react-native';
import { StackNavigationProps } from "@react-navigation/native";
import { Formik } from "formik";
import * as Yup from "yup"; 

import { Routes } from "../../types/Routes";
import { Container, Button, Input, AuthenticationFooter } from "../../common/"
import { Text, Box } from "../../../theme";

const schema = Yup.object().shape({
	email: Yup.string()
		.email("Invalid email")
		.required("Email is required"),
	password: Yup.string()
		.min(6, "Password too short")
		.max(50, "Password too long")
		.required("Password is required"),
	passwordConfirmation: Yup.string()
		.equals([Yup.ref("password")], "Passwords don't match")
		.required("Required")
});

const Register = ({ navigation }: StackNavigationProps<Routes, "Register">) => {
	const footer = (
		<AuthenticationFooter 
			title="Already have an account?" 
			action="Login here" 
			onPress={() => navigation.navigate("Login")} 
		/>
	);

	const password = useRef<TextInput>(null);
	const passwordConfirmation = useRef<TextInput>(null);

	return (
		<Container footer={footer}>
			<Box padding="xl">
				<Text 
					variant="title1" 
					textAlign="center"
					marginBottom="l"
				>
					Create an account
				</Text>
				<Text
					variant="body"
					textAlign="center"
					marginBottom="l"
				>
					Let us know your email and your password
				</Text>
				<Formik 
					initialValues={{ 
						email: "", 
						password: "", 
						passwordConfirmation: "", 
						remember: false 
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
									returnKeyType="next"
									returnKeyLabel="next"
									onSubmitEditing={() => password.current?.focus()}
								/>
							</Box>
							<Box marginBottom="m">
								<Input
									ref={password} 
									icon="lock"
									error={errors.password}
									touched={touched.password}	 
									placeholder="Enter your Password"  
									onChangeText={handleChange("password")}
									onBlur={handleBlur("password")}
									autoCompleteType="password"
									autoCapitalize="none"
									returnKeyType="next"
									returnKeyLabel="next"
									onSubmitEditing={() => passwordConfirmation.current?.focus()}
									secureTextEntry
								/>
							</Box>
							<Box>
								<Input 
									icon="lock"
									ref={passwordConfirmation}
									error={errors.passwordConfirmation}
									touched={touched.passwordConfirmation}	 
									placeholder="Confirm your password"  
									onChangeText={handleChange("passwordConfirmation")}
									onBlur={handleBlur("passwordConfirmation")}
									autoCompleteType="password"
									autoCapitalize="none"
									returnKeyType="go"
									returnKeyLabel="go"
									onSubmitEditing={() => handleSubmit()}
									secureTextEntry
								/>
							</Box>
							<Box alignItems="center" marginTop="m">
								<Button 
									variant="primary" 
									onPress={handleSubmit} 
									label="Create an account" 
								/>
							</Box>
						</Box>
					)}
				</Formik>
			</Box>
		</Container>
	)
};

export default Register;