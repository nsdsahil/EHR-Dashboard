import React, { useContext } from "react";
import Login from "../sections/Login";

import { Link } from "react-router-dom";

import {
	Box,
	Flex,
	Avatar,
	HStack,
	Heading,
	Button,
	Image,
	Input,
	Text,
	IconButton,
	ButtonGroup,
	MenuButton,
	Menu,
	MenuList,
	MenuItem,
	MenuDivider,
	useDisclosure,
	useColorModeValue,
	useBreakpointValue,
	Stack,
	useToast,
	Divider,
} from "@chakra-ui/react";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";
import { Profile } from "./Profile";

/**
 * @author Sahil Nishad
 * @function Navbar
 **/

const color = {
	primary: "#20B2AA",
	secondary: "white",
};
const Navbar = (props) => {
	const toast = useToast();
	const navigate = useNavigate();
	const { isLogin, setIsLogin } = React.useContext(AuthContext);
	const handleLogout = async() => {
		const res=await fetch("https://ehr-dashboard-production.up.railway.app/user/logout",{
			method:"GET",
			credentials:"include",
			
		})
		const data = await res.json();
		console.log(data);
		if(data.msg=="logout successful"){
			toast({
				title: data.msg,
				description: "You are logged out",
				status: "success",
			})
			setIsLogin(false);
		}
		else{
			toast({
				title: data.msg,
				status: "error",
			})
		}
		
	}

	const isMobile = useBreakpointValue({
		base: true,
		sm: true,
		md: false,
		lg: false,
		xl: false,
		xxl: false,
	});

	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<>
			<Box
				width={"20%"}
				position={"fixed"}
				height={"100vh"}
				zIndex={"100"}
				top={0}
				left={0}
				bg={color.primary}
				px={4}
			>
				<Flex
					_hover={{ cursor: "pointer" }}
					h={16}
					padding={2}
					flexDirection={"column"}
					
					justifyContent={"space-between"}
					gap={4}
				>
					<Box marginBottom={"10%"} textAlign={"center"}>
						<Heading color="white" fontWeight={"bold"} size={"3xl"}>
							EHR
						</Heading>
						<Text fontWeight={"bold"} fontSize={"lg"} color="white">
							Electronic Health Record
						</Text>
					</Box>
					<Flex onClick={() => {isLogin ? handleLogout() : navigate("/login")}} >
						<img
							width="50"
							height="50"
							src="https://img.icons8.com/ios/50/FFFFFF/login-rounded-right--v1.png"
							alt="login-rounded-right--v1"
						/>
						<Text fontWeight={"bold"} fontSize={"2xl"} color="white">
							{isLogin ? "Logout" : "Login"}
						</Text>
					</Flex>
					<Divider />
					<Flex onClick={() => navigate("/")} alignItems={"center"}>
						<img
							width="50"
							height="50"
							src="https://img.icons8.com/external-others-pike-picture/100/FFFFFF/external-Patient-organ-others-pike-picture-3.png"
							alt="external-Patient-organ-others-pike-picture-3"
						/>
						<Text fontWeight={"bold"} fontSize={"2xl"} color="white">
							Patients
						</Text>
					</Flex>
					<Divider />
					<Flex alignItems={"center"}>
						<img
							width="50"
							height="50"
							src="https://img.icons8.com/external-others-pike-picture/50/FFFFFF/external-doctor-surgeon-medical-doctor-others-pike-picture-12.png"
							alt="external-doctor-surgeon-medical-doctor-others-pike-picture-12"
						/>
						<Text fontWeight={"bold"} fontSize={"2xl"} color="white">
							Our Team
						</Text>
					</Flex>
					<Divider />
					<Flex alignItems={"center"}>
						<img
							width="50"
							height="50"
							src="https://img.icons8.com/ios/50/FFFFFF/continuous-mode.png"
							alt="continuous-mode"
						/>
						<Text fontWeight={"bold"} fontSize={"2xl"} color="white">
							Pages
						</Text>
					</Flex>
					<Divider />
					<Flex alignItems={"center"}>
						<img
							width="50"
							height="50"
							src="https://img.icons8.com/ios/50/FFFFFF/settings--v1.png"
							alt="settings--v1"
						/>
						<Text fontWeight={"bold"} fontSize={"2xl"} color="white">
							settings
						</Text>
					</Flex>
					<Divider />
				</Flex>
				<Text
					position={"absolute"}
					bottom={5}
					fontWeight={"bold"}
					fontSize={"sm"}
					color="white"
				>
					EHR Patient Dashboard © 2024 All Rights Reserved Made with love by
					Sahil Nishad
				</Text>
			</Box>
		</>
	);
};

function SearchBar() {
	const navigate = useNavigate();
	const { products, setProducts } = useContext(AuthContext);
	const [searchItem, setSearchItem] = React.useState("");
	async function handleSubmit() {
		console.log(searchItem);
		await axios
			.get("https://sears-40h2.onrender.com/products/search/" + searchItem)
			.then((res) => {
				console.log(res.data);
				setProducts(res.data);
				navigate("/products");
			})
			.catch((err) => {
				console.log(err);
			});
	}
	return (
		<Flex position={"relative"} width={"100%"} padding={5}>
			<Input
				borderRadius={"10"}
				width={"100%"}
				bg="white"
				onChange={(e) => {
					setSearchItem(e.target.value);
				}}
				variant="flushed"
				paddingLeft="10px"
				placeholder="Search"
			/>
			<IconButton
				zIndex={2}
				position={"absolute"}
				top={6}
				right={6}
				size={"sm"}
				onClick={() => {
					handleSubmit(searchItem);
				}}
				backgroundColor={color.tertiary}
				aria-label="Search database"
				icon={<SearchIcon />}
			/>
		</Flex>
	);
}

function Shop() {
	return (
		<Menu>
			<MenuButton color={color.secondary}>Shop</MenuButton>
			<MenuList color={"black"}>
				<MenuItem as="a">
					<Link to="/products">Appliances</Link>
				</MenuItem>
				<MenuItem as="a">
					<Link to="/products">Tools</Link>
				</MenuItem>
				<MenuItem as="a">
					<Link to="/products">Clothing</Link>
				</MenuItem>
				<MenuItem as="a">
					<Link to="/products">Lawn and Gardening</Link>
				</MenuItem>
				<MenuItem as="a">
					<Link to="/products">Tv and Technologies</Link>
				</MenuItem>
			</MenuList>
		</Menu>
	);
}

const Logout = () => {
	const { setIsLogin } = useContext(AuthContext);
	const toast = useToast();
	const handleClick = async () => {
		await axios
			.get("https://sears-40h2.onrender.com/user/logout", {
				withCredentials: true,
			})
			.then((res) => {
				if (res.data.msg == "logout successful") {
					toast({
						title: res.msg,
						description: "You are logged out",
						status: "success",
					});
					setIsLogin(false);
				} else {
					toast({
						title: res.msg,
						description: res.data.msg,
						status: "error",
					});
					setIsLogin(false);
				}
			})
			.catch((err) => {
				toast({
					title: err.msg,
					description: "try again",
					status: "error",
				});
				console.log(err);
			});
	};
	return (
		<>
			<Button
				backgroundColor={color.primary}
				color={color.secondary}
				onClick={handleClick}
			>
				Logout
			</Button>
		</>
	);
};

export default Navbar;
