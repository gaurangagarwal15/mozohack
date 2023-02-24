const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  name: {
    required: false,
    type: String,
  },
  degree: {
    required: false,
    type: String,
  },
  specialization: {
    required: false,
    type: String,
  },
  registrationNumber: {
    required: false,
    type: String,
  },
  address: {
    required: false,
    type: String,
  },
});

module.exports = mongoose.model("doctor", dataSchema);
