const express = require("express");
const Patient = require("../models/patient");
const router = express.Router();

router.post("/new", (req, res) => {
  // create a new patient instance and collect the data
  const patient = new Patient({
    name: req.body.name,
    age: req.body.age,
    address: req.body.address,
    gender: req.body.gender,
    phoneNumber: req.body.phoneNumber,
    symtoms: req.body.symtoms,
  });
  // save the new patient
  patient
    .save()
    // return success if the patient is added to the database successfully
    .then((result) => {
      res.status(201).send({
        code: "PATIENT_CREATED",
        message: "Patient Added Successfully",
        result,
      });
    })
    // catch error if the patient wasn't added successfully to the database
    .catch((error) => {
      res.status(500).send({
        code: "PATIENT_NOT_ADDED",
        message: "Error creating patient",
        error,
      });
    });
});

router.get("/find", async (req, res) => {
  const query = req.query.q;
  const regex = new RegExp(`^${query}`, "i");
  const patient = await Patient.find({ name: regex });
  res.status(200).send({
    patients: patient,
    n: patient.length,
  });
});

module.exports = router;
