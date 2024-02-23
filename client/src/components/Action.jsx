import React from "react";
import {
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	Portal,
	useToast,
} from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";

/**
 * @author
 * @function Action
 **/

export const Action = ({ patient }) => {
	const Toast = useToast();
	
	async function handleDelete() {
		try {
			const res = await fetch(
				`https://ehr-dashboard-production.up.railway.app/patient/${patient._id}`,
				{
					method: "DELETE",
					credentials: "include",
				}
			);
			const data = await res.json();
			console.log(data);
			if (data.msg == "patient deleted successfully") {
				
				Toast({
					title: "Patient Deleted",
					description: "success",
					status: "success",
				});
			} else {
				Toast({
					title: "Error",
					description: data.msg,
					status: "error",
				});
			}
			
		} catch (error) {
			console.log(error);
			
		}
		
	};

	return (
		<Menu>
			<MenuButton>
				<BsThreeDotsVertical />
			</MenuButton>
			<Portal>
				<MenuList>
					<MenuItem _hover={{ bgColor: "#20B2AA", color: "white" }}>
						<Link to={`/patientDetails/${patient._id}`}>Paitent Details</Link>
					</MenuItem>
					<MenuItem
						onClick={handleDelete}
						_hover={{ bgColor: "#20B2AA", color: "white" }}
					>
						<Link>Delete Paitent</Link>
					</MenuItem>
				</MenuList>
			</Portal>
		</Menu>
	);
};
