import React from "react";
import {
	Box,
	Flex,
	FormErrorMessage,
	Heading,
	Input,
	FormLabel,
	Checkbox,
	FormControl,
	FormHelperText,
	Button,
	Text,
	useToast,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContextProvider";

/**
 * @author
 * @function verify
 **/

const verify = (props) => {
	const { isLogin, setIsLogin } = React.useContext(AuthContext);
	const color = {
		primary: "#20B2AA",
		secondary: "white",
		tertiary: "#41e0d0",
	};
	const navigate = useNavigate();
	const toast = useToast();
	const [TempUserDetails, setTempUserDetails] = React.useState({});

	const verifyHandleChange = (e) => {
		const { name, value } = e.target;
		setTempUserDetails({
			...TempUserDetails, //email:KXrYk@example.com,password:123
			[name]: value,
		});
	};

	const verifyHandleSubmit = async (e) => {
		e.preventDefault();
		console.log(TempUserDetails);
		toast({
			title: "Login",
			description: "Processing",
			status: "info",
		});

		try {
			const res = await axios.post(
				"http://localhost:8080/user/verify",
				TempUserDetails,
				{ withCredentials: true }
			);
			if (res.data.msg == "user registered") {
				toast({
					title: "user registered",
					description: "login now",
					status: "success",
				});
				navigate("/login");
			} else {
				toast({
					title: res.data.msg,
					description: "Verifying email",
					status: "error",
				});
			}
		} catch (err) {
			toast({
				title: err.msg,
				description: "try again",
				status: "error",
			});
			console.error(err);
		}
	};
	return (
		<>
			<Box
				padding={"2%"}
				
				boxShadow={
					"rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
				}
				width={["80%", "60%", "50%", "40%"]}
				margin={"auto"}marginTop={"5%"}
				marginBottom={"5%"}
			>
				<Box marginBottom={"10%"} textAlign={"center"}>
						<Heading color={color.primary} fontWeight={"bold"} size={"3xl"}>
							EHR
						</Heading>
						<Text fontWeight={"bold"} fontSize={"lg"} color={color.primary}>
							Electronic Health Record
						</Text>
					</Box>
				<div>
					<Heading>verify your email</Heading>
				</div>
				<FormControl textAlign={"left"}>
					
					<FormLabel>Email</FormLabel>
					<Input
						type="email"
						name="email"
						onChange={(e) => verifyHandleChange(e)}
					/>
					<FormHelperText>
						Enter the email you'd like to receive the newsletter on.
					</FormHelperText>
					<FormErrorMessage>Email is required.</FormErrorMessage>
					<FormLabel>OTP</FormLabel>
					<Input
						type="number"
						name="otp"
						onChange={(e) => verifyHandleChange(e)}
					/>
					<FormHelperText>We'll never share your Password</FormHelperText>
					<Input
						marginTop={5}
						bg={color.primary}
						color="white"
						width
						value="verify"
						type="submit"
						onClick={(e) => {
							verifyHandleSubmit(e);
						}}
					/>
				</FormControl>
				<Text as={Link} color={color.tertiary}></Text>
			</Box>
		</>
	);
};
export default verify;
