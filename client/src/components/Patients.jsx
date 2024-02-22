import { Box,  Flex, Heading, Text,Button } from "@chakra-ui/react";
import React from "react";
import {PatientList} from "./PatientList";
import {AddIcon} from "@chakra-ui/icons";
import SearchBar from "./SearchBar";
import AddPatient from "../pages/AddPatient";

/**
 * @author
 * @function Patients
 **/

export const Patients = (props) => {
    const color = {
        primary: "#20B2AA",
        secondary: "white",
        
    };
	return (
		<Box backgroundColor={"#f5f5f5"} >
			<Flex 
              zIndex={12}
              backgroundColor={"#f5f5f5"} 
              alignItems={"center"}
              position={'sticky'}
              top={10}
              marginBottom={2}
              
              padding={2}
            justifyContent={"space-between"}>
				<Box>
					<Heading>Patients</Heading>
                    <Text>list of patients</Text>
				</Box>
                <SearchBar/>
                <Box>
                    <AddPatient/>
                </Box>
                
			</Flex>
            <PatientList/>
		</Box>
	);
};
