import React, { useRef } from 'react';
import { TextInput, TouchableOpacity } from 'react-native';
import { StackNavigationProps } from "@react-navigation/native";
import { Formik } from "formik";
import * as Yup from "yup"; 

import { Routes } from "../../types/Routes";
import { Container, AuthenticationFooter, Button, Input, Checkbox } from "../../common/"
import { Text, Box } from "../../../theme";

const schema = Yup.object().shape({
	email: Yup.string()
		.email("Invalid email")
		.required("Email is required"),
	password: Yup.string()
		.min(6, "Password too short")
		.max(50, "Password too long")
		.required("Password is required")
});


const Login = ({ navigation }: StackNavigationProps<Routes, "Login">) => {
	const footer = (
		<AuthenticationFooter 
			title="Don't have an account?" 
			action="Sign Up here" 
			onPress={() => navigation.navigate("Register")} 
		/>
	);
	const password = useRef<TextInput>(null);
	return (
		<Container footer={footer}>
			<Box padding="xl">
				<Text 
					variant="title1" 
					textAlign="center"
					marginBottom="l"
				>
					Welcome back
				</Text>
				<Text
					variant="body"
					textAlign="center"
					marginBottom="l"
				>
					Use your credentials below and login to your account
				</Text>
				<Formik 
					initialValues={{ email: "", password: "", remember: false }}
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
							<Input 
								icon="lock"
								ref={password}
								error={errors.password}
								touched={touched.password}	 
								placeholder="Enter your Password"  
								onChangeText={handleChange("password")}
								onBlur={handleBlur("password")}
								secureTextEntry
								autoCompleteType="password"
								autoCapitalize="none"
								returnKeyType="go"
								returnKeyLabel="go"
								onSubmitEditing={() => handleSubmit()}
							/>
							<Box marginVertical="m" flexDirection="row" justifyContent="space-between">
								<Checkbox 
									label="Remember me" 
									value={values.remember}
									onChange={() => setFieldValue("remember", !values.remember)}
								/>
								<Box flex={1} alignItems="center">
									<TouchableOpacity variant="transparent" onPress={() => navigation.navigate("ForgotPassword")}>
										<Text color="primary">Forgot password</Text>
									</TouchableOpacity>
								</Box>
							</Box>
							<Box alignItems="center" marginTop="m">
								<Button 
									variant="primary" 
									onPress={handleSubmit} 
									label="Log into your account" 
								/>
							</Box>
						</Box>
					)}
				</Formik>
			</Box>
		</Container>
	)
};

export default Login;