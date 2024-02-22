const express = require("express");
const Patient = require("../models/patient.model");
const auth = require("../middlewares/auth.middleware");
const PatientRouter = express.Router();

PatientRouter.get("/",  async (req, res) => {
    try {
        const patients = await Patient.find();
        res.status(200).send(patients);
    } catch (error) {
        res.status(500).send({
            msg: error.message,
        });
    }
});
PatientRouter.get("/:id",  async (req, res) => {
    try {
        const patient = await Patient.findById(req.params.id);
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
PatientRouter.post("/",  async (req, res) => {
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
PatientRouter.patch("/:id",  async (req, res) => {
    try {
        const patient = await Patient.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).send({
            msg: "patient updated successfully",
        });
    }
    catch (error) {
        res.status(500).send({
            msg: error.message,
        })
    }
})
PatientRouter.delete("/:id",  async (req, res) => {
    try {
        const patient = await Patient.findByIdAndDelete(req.params.id);
        res.status(200).send(patient);
    }
    catch (error) {
        res.status(500).send({
            msg: error.message,
        })
    }
})

module.exports = PatientRouter