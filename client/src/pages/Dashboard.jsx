import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import patients from "../docs/data";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
    PieChart,
    
    Pie,
	Legend,
} from "recharts";

/**
 * @author
 * @function Dashboard
 **/

export const Dashboard = () => {
    const data = [
        { name: 'Admitted', value: 50 },
        { name: 'Discharged', value: 30 }
      ];
	
	return (
		<>
			<Box backgroundColor={"#f5f5f5"}>
				<Flex p={5}>
					<Heading>Dashboard</Heading>
				</Flex>
				<Box backgroundColor={"white"}>
                    <ActivePatientsChart patientData={patients} />
					
					<PieChart width={400} height={400}>
						<Pie
							data={data}
							cx={200}
							cy={200}
							labelLine={false}
							label
							outerRadius={80}
							fill="#8884d8"
							dataKey="value"
						/>
						<Tooltip />
						<Legend />
					</PieChart>
				</Box>
			</Box>
		</>
	);
};
const ActivePatientsChart = ({ patientData }) => {
    // Sort patient data by admittedAt date
    const sortedData = patientData.slice().sort((a, b) => new Date(a.admittedAt) - new Date(b.admittedAt));
  
    // Prepare data for line chart
    const data = sortedData.map((patient, index) => ({
      name: `Day ${index + 1}`,
      activePatients: sortedData.slice(0, index + 1).filter(p => !p.dischargedAt).length
    }));
  
    return (
      <LineChart
        width={800}
        height={400}
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="activePatients" stroke="#8884d8" name="Active Patients" />
      </LineChart>
    );
  };
