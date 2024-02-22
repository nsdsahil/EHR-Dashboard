import React from "react";
import Navbar from "./components/Navbar";
import { Box } from "@chakra-ui/react";
import { Patients } from "./components/Patients";
import { HorizontalNavbar } from "./components/HorizontalNavbar";
import {Routers} from "./Routes/route"
function App() {
	return (
		<>
			<Box>
				<Navbar />
				<Box
					overflow={"scroll"}
					position={"fixed"}
					width={"80%"}
					right={0}
					height={"100vh"}
					backgroundColor={"#f5f5f5"}
					margin={"auto"}
					padding={{
						xl: " 0% 5% 0% 5% ",
						"2xl": " 0% 5% 0% 5%",
						
						sm: "0% 2% 0% 2%",
						base: "0% 4% 0% 4%",
					}}
				>
					<Routers/>
					
				</Box>
			</Box>
		</>
	);
}

export default App;
