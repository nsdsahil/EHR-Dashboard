const express = require("express");
const Patient = require("../models/patient.model");
const auth = require("../middlewares/auth.middleware");
const PatientRouter = express.Router();

PatientRouter.get("/",auth,async (req, res) => {
    try {
        const patients = await Patient.find();
        res.status(200).send(patients);
    } catch (error) {
        res.status(500).send({
            msg: error.message,
        });
    }
});
PatientRouter.get("/:id", auth,async (req, res) => {
    const id = req.params.id;
    try {
        const patient = await Patient.findById({ _id: id });
        if (!patient) {
            return res.status(200).send({ msg: "patient not found" });
        }
        res.status(200).send(patient);
    } catch (error) {
        res.status(200).send({
            msg: error.message,
        });
    }
});
PatientRouter.post("/",auth,async (req, res) => {
    const patient = new Patient(req.body);
    try {
        await patient.save();
        res.status(200).send({msg:"patient added successfully"});
    }
    catch (error) {
        res.status(500).send({
            msg: error.message,
        })
    }
    
})
PatientRouter.patch("/:id",auth,async (req, res) => {
    const id = req.params.id;
    try {
        const patient = await Patient.findById({ _id: id });
        if (!patient) {
            return res.status(200).send({ msg: "patient not found" });
        }
        const updatedpatient = await Patient.findByIdAndUpdate({ _id: id });
        res.status(200).send({
            msg: "patient updated successfully",
        });
    }
    catch (error){
        res.status(500).send({
            msg: error.message,
        })  
    }
})
PatientRouter.delete("/:id",auth,async (req, res) => {
    const id = req.params.id;
    try {    
        const patient = await Patient.findOne({ _id: id });
        console.log(patient);
        if (!patient) {
            return res.status(200).send({ msg: "patient not found" });
        }
        await Patient.findByIdAndDelete({ _id: id });
        res.status(200).send({
            msg: "patient deleted successfully",
        });
    }
    catch (error) {
        res.status(500).send({  
            msg: error.message,
        })
    }
})

module.exports = PatientRouter  