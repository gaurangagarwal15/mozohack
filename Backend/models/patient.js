const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  name: {
    required: false,
    type: String,
  },
  age: {
    required: false,
    type: String,
  },
  address: {
    required: false,
    type: String,
  },
  gender: {
    required: false,
    type: String,
  },
  phoneNumber: {
    required: false,
    type: String,
  },
  symtoms: {
    required: false,
    type: String,
  },
});

module.exports = mongoose.model("patient", dataSchema);
