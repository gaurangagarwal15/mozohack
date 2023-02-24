const mongoose = require("mongoose");
const dataSchema = new mongoose.Schema({
  Doctor_Name: {
    required: false,
    type: String,
  },
  Doctor_Degree: {
    required: false,
    type: String,
  },
  Doctor_Specialization: {
    required: false,
    type: String,
  },
  Doctor_RegistrationNumber: {
    required: false,
    type: String,
  },
  Doctor_Address: {
    required: false,
    type: String,
  },
  Patient_Name: {
    required: false,
    type: String,
  },
  Patient_Age: {
    required: false,
    type: String,
  },
  Patient_Sex: {
    required: false,
    type: String,
  },
  Patient_Address: {
    required: false,
    type: String,
  },
  Patient_MobileNumber: {
    required: false,
    type: String,
  },
  Symptoms: {
    required: false,
    type: String,
  },
  Diagnosis: {
    required: false,
    type: String,
  },
  ReferenceNumber: {
    required: false,
    type: String,
  },
  Duration: {
    required: false,
    type: String,
  },
  TabletName: {
    required: false,
    type: String,
  },
  DrugName: {
    required: false,
    type: String,
  },
  date: {
    required: false,
    type: String,
  },
  Time: {
    required: false,
    type: String,
  },
});

module.exports = mongoose.model("data", dataSchema);
