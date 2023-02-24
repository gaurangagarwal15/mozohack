const express = require("express");
const Data = require("../models/data");
const router = express.Router();
const path = require("path");

const puppeteer = require("puppeteer");
const pdfTemplate = require("../prescription");
router.post("/new", (req, res) => {
  // create a new data instance and collect the data
  const data = new Data({
    Doctor_Name: req.body.Doctor_Name,
    Doctor_Degree: req.body.Doctor_Degree,
    Doctor_Specialization: req.body.Doctor_Specialization,
    Doctor_RegistrationNumber: req.body.Doctor_RegistrationNumber,
    Doctor_Address: req.body.Doctor_Address,
    Patient_Name: req.body.Patient_Name,
    Patient_Age: req.body.Patient_Age,
    Patient_Sex: req.body.Patient_Sex,
    Patient_Address: req.body.Patient_Address,
    Patient_MobileNumber: req.body.Patient_MobileNumber,
    Symptoms: req.body.Symptoms,
    Diagnosis: req.body.Diagnosis,
    ReferenceNumber: req.body.ReferenceNumber,
    Duration: req.body.Duration,
    TabletName: req.body.TabletName,
    DrugName: req.body.DrugName,
    date: req.body.date,
    Time: req.body.Time,
  });
  // save the new data
  data
    .save()
    // return success if the data is added to the database successfully
    .then((result) => {
      res.status(201).send({
        code: "DATA_CREATED",
        message: "Data Added Successfully",
        result,
      });
    })
    // catch error if the data wasn't added successfully to the database
    .catch((error) => {
      res.status(500).send({
        code: "DATA_NOT_ADDED",
        message: "Error creating data for patient",
        error,
      });
    });
});

router.get("/patient/:id", async (req, res) => {
  const data = await Data.findOne({ _id: req.params.id });
  const browser = await puppeteer.launch();

  try {
    const page = await browser.newPage();
    console.log(data);

    const html = pdfTemplate(data);

    await page.setContent(html);

    await page.pdf({
      path: "Prescription.pdf",
      format: "A4",
      printBackground: true,
    });
    res.sendFile(`${path.join(__dirname, "..")}/Prescription.pdf`);
  } catch (err) {
    res.send(Promise.reject());
  } finally {
    await browser.close();
  }
});
module.exports = router;
