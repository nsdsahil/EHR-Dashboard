import React, { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import { useNavigate } from "react-router-dom";
import {
	Table,
	Thead,
	Box,
	Button,
	Flex,
	Text,
	Tbody,
	Tfoot,
	Tr,
	Th,
	Td,
	TableCaption,
	TableContainer,
} from "@chakra-ui/react";
import { Action } from "./Action";

/**
 * @author
 * @function PatientList
 **/

export const PatientList = (props) => {
	const {isLogin, setIsLogin} = useContext(AuthContext);
	const navigate = useNavigate();
	if(!isLogin){
		navigate("/login");
	}

	const [patients, setPatients] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	
	const [itemsPerPage, setItemsPerPage] = useState(12);
	useEffect(() => {
		async function getData() {
			const res = await fetch("https://ehr-dashboard-production.up.railway.app/patient",{
				method: "GET",
				credentials: "include",
			});
			const data = await res.json();
			console.log(data);
			setPatients(data);
		}
		getData();
	}, []);

	// Calculate indexes for slicing the data array

	//making dummy data

	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	
	
	const currentItems = patients.slice(indexOfFirstItem, indexOfLastItem);
	const paginate = (pageNumber) => setCurrentPage(pageNumber);
	return (
		<Box
			// boxShadow={
			// 	"rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"
			// }
			marginTop={"10"}
			backgroundColor={"white"}
		>
			{isLogin ?<><TableContainer>
				<Table variant="simple">
					<TableCaption></TableCaption>
					<Thead>
						<Tr>
							<Th>Patient ID</Th>
							<Th>Patient Name</Th>
							<Th>Doctor Assigned</Th>
							<Th isNumeric>Age</Th>
							<Th isNumeric>Gender</Th>
							<Th>Disease</Th>
							<Th>Status</Th>
							<Th
								backgroundColor={"white"}
								position={"sticky"}
								zIndex={2}
								right={0}
							>
								Action
							</Th>
						</Tr>
					</Thead>
					<Tbody>
						{currentItems.map((patient) => {
							return (
								<Tr>
									<Td>{patient._id}</Td>
									<Td>{patient.name}</Td>
									<Td>{patient.doctor}</Td>
									<Td isNumeric>{patient.age}</Td>
									<Td>{patient.gender}</Td>
									<Td>{patient.disease}</Td>
									<Td>{patient.status}</Td>

									<Td
										boxShadow={
											"rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"
										}
										backgroundColor={"white"}
										position={"sticky"}
										zIndex={2}
										right={0}
									>
										{" "}
										<Action patient={patient} />
									</Td>
								</Tr>
							);
						})}
					</Tbody>
					<Tfoot></Tfoot>
				</Table>
			</TableContainer>
			<Flex
				padding={2}
				margin={"auto"}
				width={["100%", "40%", "40%", "40%"]}
				alignItems={"center"}
				justifyContent={"space-between"}
			>
				<Button
					size="sm"
					color={"white"}
					bgColor={"#20B2AA"}
					onClick={() => paginate(currentPage - 1)}
				>
					Previous
				</Button>
				<Text>Page {currentPage}</Text>
				<Button
					size="sm"
					color={"white"}
					bgColor={"#20B2AA"}
					onClick={() => paginate(currentPage + 1)}
				>
					Next
				</Button>
			</Flex></>:<Box textAlign={"center"} p={5}>
				please Login First 
				<Button
					size="sm"
					color={"white"}
					bgColor={"#20B2AA"}
					onClick={() => navigate("/login")}
				>
					Login
				</Button>
				
				</Box>}
		</Box>
	);
};
