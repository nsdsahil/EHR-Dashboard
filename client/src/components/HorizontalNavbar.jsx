import { Flex } from "@chakra-ui/react";
import React from "react";
import SearchBar from "./SearchBar";
import { Profile } from "./Profile";

/**
 * @author
 * @function HorizontalNavbar
 **/

export const HorizontalNavbar = (props) => {
	return (
		<Flex
			
			width={"80%"}
            backgroundColor={"#f5f5f5"}
            position={"fixed"}
            zIndex={12}
            alignItems={"center"}
            boxShadow={"rgba(0, 0, 0, 0.04) 0px 3px 5px"}
            right={0}
			justifyContent={"space-around"}
		>   
			<SearchBar />
			<Profile />
		</Flex>
	);
};
