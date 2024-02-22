import {
	Button,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	Text,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Box,
	useDisclosure,
	Input,
	FormControl,
	FormLabel,
	Stack,
	useToast,
	useColorModeValue,
	Heading,
	FormHelperText,
	FormErrorMessage,
} from "@chakra-ui/react";
import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate, Link, Form } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";
import React from "react";
function AddPatient() {
	const [loading, setLoading] = useState(false);
	const { isLogin, setIsLogin } = useContext(AuthContext);

	const [patientDetails, setpatientDetails] = useState({});
	const toast = useToast();
	const navigate = useNavigate();

	const handlechange = (e) => {
		const { name, value } = e.target;
		setpatientDetails({
			...patientDetails, //email:KXrYk@example.com,password:123
			[name]: value,
		});
	};

	const handleSubmit = async (e) => {
		console.log(patientDetails);
		axios.defaults.withCredentials = true;
		toast({
			title: "Login",
			description: "Processing",
			status: "info",
		});
		await axios
			.post("http://localhost:8080/patient", patientDetails, {
				withCredentials: true,
			})
			.then((res) => {
				if(res.data.msg=="Patient added successfully"){
					toast({
						title: "Adding New Patient",
						description: "success",
						status: "success",
				});
				navigate("/")
				}
				else{
					toast({
						title: "Adding New Patient",
						description: res.data.msg,
						status: "error",
					});

				}
				console.log(res.data);
			})
			.catch((err) => {
				toast({
					title: "Adding New Patient",
					description: "try again",
					status: "error",
				});
				console.log(err);
			});
	};

	const color = {
		primary: "#20B2AA",
		secondary: "white",
		tertiary: "#41e0d0",
	};
	const OverlayOne = () => (
		<ModalOverlay
			bg="blackAlpha.300"
			backdropFilter="blur(10px) hue-rotate(90deg)"
		/>
	);

	const OverlayTwo = () => (
		<ModalOverlay
			bg="none"
			backdropFilter="auto"
			backdropInvert="80%"
			backdropBlur="2px"
		/>
	);

	const { isOpen, onOpen, onClose } = useDisclosure();
	const [overlay, setOverlay] = React.useState(<OverlayOne />);

	return (
		<>
			<Button
				variant="ghost"
				backgroundColor={color.primary}
				color={color.secondary}
				onClick={() => {
					setOverlay(<OverlayOne />);
					onOpen();
				}}
			>
				+ Add Patient
			</Button>

			<Modal isCentered isOpen={isOpen} onClose={onClose}>
				{overlay}
				<ModalContent>
					<ModalHeader>
						
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody width="90%">
						<div>
							<Heading>Add Patient</Heading>
						</div>
                        
						<FormControl  textAlign={"left"}>
                            <FormLabel>Name</FormLabel>
                            <Input
                                type="text"
                                name="name"
                                onChange={handlechange}
                            />
                            <FormLabel>Date</FormLabel>
                            <Input
                                type="date"
                                name="date"
                                onChange={handlechange}
                            />
                            <FormLabel>Age</FormLabel>
                            <Input
                                type="number"
                                name="age"
                                onChange={handlechange}
                            />
                            <FormLabel>Gender</FormLabel>
                            <Input
                                type="text"
                                name="gender"
                                onChange={handlechange}
                            />
                            <FormLabel>weight</FormLabel>
                            <Input
                                type="number" name="weight" onChange={handlechange}/>
                            <FormLabel>Disease</FormLabel>
                            <Input
                                type="text"
                                name="disease"
                                onChange={handlechange}
                            />
                            <FormLabel>Doctor Assigned</FormLabel>
                            <Input
                                type="text"
                                name="doctor"
                                onChange={handlechange}
                            />
                            <FormLabel>Status</FormLabel>
                            <Input

                                type="text"
                                name="status"
                                onChange={handlechange}
                            />
                            <FormLabel>Phone Number</FormLabel>
                            
                            <Input
                                type="number"
                                name="phone"
                                onChange={handlechange}
                            />
                            <FormLabel>Email</FormLabel>
                            <Input 
                                type="email"
                                name="email"
                                onChange={handlechange}
                            />
						</FormControl>
						
						<Text>
                            Please make sure all the fields are filled and correct before submitting
							
						</Text>
						
							<Text as={Link} color={color.tertiary}>
								
									<Button
									    
										bgColor={color.primary}
										onClick={()=>{onClose();handleSubmit();}}
										color="white"
									>
										Add
									</Button>
							
							</Text>
					
					</ModalBody>
					<ModalFooter></ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}

export default AddPatient;
