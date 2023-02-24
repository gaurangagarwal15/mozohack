const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const puppeteer = require("puppeteer");
const mongoString = process.env.DATABASE_URL;

const pdfTemplate = require("./prescription");
const app = express();

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const patient = require("./routes/patient");
const doctor = require("./routes/doctor");
const data = require("./routes/data");

app.use("/api/patient", patient);
app.use("/api/doctor", doctor);
app.use("/api/data", data);

app.post("/pdf", async (req, res) => {
  const browser = await puppeteer.launch();

  try {
    const page = await browser.newPage();
    console.log(req.body);

    const html = pdfTemplate(req.body);

    await page.setContent(html);

    await page.pdf({
      path: "Prescription.pdf",
      format: "A4",
      printBackground: true,
    });

    res.send(Promise.resolve());
  } catch (err) {
    res.send(Promise.reject());
  } finally {
    await browser.close();
  }
});

app.get("/fpdf", (req, res) => {
  res.sendFile(`${__dirname}/Prescription.pdf`);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
