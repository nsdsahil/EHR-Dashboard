const express = require("express");
const app = express();
const cors = require("cors");
const UserRouter = require("./controllers/user");
const cookieParser = require("cookie-parser");
const PORT=process.env.PORT

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const PatientRouter = require("./controllers/paitent.controller");
dotenv.config();

app.use(
	cors({
		origin:["http://127.0.0.1:5173","https://ehr-dashboard-fxp4.vercel.app"],
		credentials:true
	})
);
app.use(express.json());
app.use(cookieParser());
app.use("/user", UserRouter);
app.use("/patient",PatientRouter);
app.get("/", (req, res) => {
	try {
		res.send("Hello");
	} catch (error) {
		console.log(error);
	}
});

app.listen(PORT, () => {
	try {
		console.log(`Server is running on port ${PORT}`);
		mongoose.connect(process.env.MONGO_URL);
		console.log("Connected to MongoDB");
	} catch (error) {
		console.log(error);
	}
});
