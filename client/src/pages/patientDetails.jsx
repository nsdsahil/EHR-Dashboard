import React, { useEffect, useState } from "react";
import { Box, Button, Heading, Text, Flex } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

/**
 * @author
 * @function PatientDetails
 **/

export const PatientDetails = (props) => {
	const [patient, setPatient] = useState([]);
	const {id}=useParams();
	useEffect(()=>{
		console.log(id)
		async function getData(){
			const res=await fetch(`http://localhost:8080/patient/${id}`);
			const data=await res.json();
			setPatient(data);
			console.log(data);

		}
		getData();
	},[])
	return (
		<Box gap={2} backgroundColor={"#f5f5f5"} height={"100vh"} width={"100%"}>
			<Flex justifyContent={"space-between"} padding={3}>
				<Heading>Patient Details</Heading> <Button>Update Profile</Button>
			</Flex>
			<Box p={5} backgroundColor={"white"}>
				<Box
					bgPos={"center"}
					bgSize={"cover"}
					width={"100%"}
					height={"300px"}
					backgroundImage={
						"url(https://images.pexels.com/photos/4783698/pexels-photo-4783698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"
					}
				></Box>

				<Flex position={"relative"} p={2}>
					<Box
						backgroundColor={"white"}
						top={"-50%"}
						position={"absolute"}
						right={5}
						boxShadow={"rgba(0, 0, 0, 0.04) 0px 3px 5px"}
					>
						<img
							width="200"
							height="200"
							src="https://img.icons8.com/ios/100/000000/user-male-circle--v1.png"
							alt="user-male-circle--v1"
						/>
					</Box>
					<Box>
						<Heading>{patient.name}</Heading>
						<Text color={"gray.500"} fontSize={"20px"}>
						   Patient Id:	{patient.id}
						</Text>
						<Text color={"gray.500"} fontSize={"20px"}>
						Age:{patient.age}
						</Text>
						<Text color={"gray.500"} fontSize={"20px"}>
						weight:{patient.weight}
						</Text>
						<Text color={"gray.500"} fontSize={"20px"}>
						height:{patient.height}
						</Text>
					</Box>
				</Flex>
				<Heading padding={2} marginTop={2} size={"md"} fontsize={"md"}>
					About Patient
				</Heading>
				<Text padding={2} color={"gray.500"}>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat,
					sunt. Autem possimus laborum quibusdam ab similique ipsam hic
					obcaecati optio accusamus velit accusantium libero deleniti, commodi
					iusto repellat sapiente doloribus.Lorem ipsum dolor sit, amet
					consectetur adipisicing elit. Placeat, sunt. Autem possimus laborum
					quibusdam ab similique ipsam hic obcaecati optio accusamus velit
					accusantium libero deleniti, commodi iusto repellat sapiente
					doloribus.Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Placeat, sunt. Autem possimus laborum quibusdam ab similique ipsam hic
					obcaecati optio accusamus velit accusantium libero deleniti, commodi
					iusto repellat sapiente doloribus.
				</Text>
			</Box>
			<Flex justifyContent={"space-between"} marginTop={5}>
				<Box p={5} color={"gray"} width={"50%"} backgroundColor={"white"}>
					<Heading size={"lg"} color={"black"}>Prescription</Heading>
					<Text>list of prescription</Text>
                    {/* list of prescription */}

                    <Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </Text>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
                    <Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </Text>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
                    
				</Box>
				<Box width={"45%"}>
					<Box p={5} width={"100%"} backgroundColor={"white"}>
						Phone: 123456789
					</Box>
					<Box marginTop={5} p={5} width={"100%"} backgroundColor={"white"}>
						
						0D6v5@example.com
					</Box>
				</Box>
			</Flex>
		</Box>
	);
};
