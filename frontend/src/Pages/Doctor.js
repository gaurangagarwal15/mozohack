import { useEffect, useState } from "react";
import AddDiagnosis from "../Components/AddDiagnosis";
import AddDoctor from "../Components/AddDoctor";
import AddMedicine from "../Components/AddMedicine";
import AddPatient from "../Components/AddPatient";
import DisabledButtonLoading from "../Components/DisabledBtnLoding";
import PDFPreview from "../Components/PdfPreview";
import Share from "../Components/Share";
import Spinner from "../Components/Spinner";

export default function Doctor() {
  const [Doctor_Name, setDoctor_Name] = useState("");
  const [Doctor_Degree, setDoctor_Degree] = useState("");
  const [Doctor_Specialization, setDoctor_Specialization] = useState();
  const [Doctor_RegistrationNumber, setDoctor_RegistrationNumber] =
    useState("");
  const [Doctor_Address, setDoctor_Address] = useState("");
  const [Patient_Name, setPatient_Name] = useState();
  const [Patient_Age, setPatient_Age] = useState();
  const [Patient_Sex, setPatient_Sex] = useState("");
  const [ReferenceNumber, setReferenceNumber] = useState("");
  const [Patient_Address, setPatient_Address] = useState();
  const [Patient_MobileNumber, setPatient_MobileNumber] = useState("");
  const [Symptoms, setSymptoms] = useState("");
  const [Diagnosis, setDiagnosis] = useState("");
  const [Duration, setDuration] = useState("");
  const [TabletName, setTabletName] = useState("");
  const [DrugName, setDrugName] = useState("");
  const [Time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [result, setResult] = useState(1);
  const [shareLink, setShareLink] = useState("");

  const [loading, setLoading] = useState(false);

  const [formStep, setFormStep] = useState(0);

  const updateForm = () => {
    var today = new Date();
    var time = new Date().toTimeString().split(" ")[0];
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + "/" + dd + "/" + yyyy;

    var myHeaders = new Headers();
    myHeaders.append("authority", "examinator.epam.com");
    myHeaders.append("accept", "*/*");
    myHeaders.append("accept-language", "en-US,en;q=0.6");
    myHeaders.append("authorization", "Basic bXBsY2VfdjZWUDpqN2I4c3VfNGRTYQ==");
    myHeaders.append("content-type", "application/json");
    myHeaders.append("origin", "https://examinator.epam.com");
    myHeaders.append(
      "referer",
      "https://examinator.epam.com/BUGCHALLENGE.html"
    );
    myHeaders.append("sec-fetch-dest", "empty");
    myHeaders.append("sec-fetch-mode", "cors");
    myHeaders.append("sec-fetch-site", "same-origin");
    myHeaders.append("sec-gpc", "1");
    myHeaders.append(
      "user-agent",
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36"
    );

    var raw = JSON.stringify({
      Doctor_Name: Doctor_Name,
      Doctor_Degree: Doctor_Degree,
      Doctor_Specialization: Doctor_Specialization,
      Doctor_RegistrationNumber: Doctor_RegistrationNumber,
      Doctor_Address: Doctor_Address,
      Patient_Name: Patient_Name,
      Patient_Age: Patient_Age,
      Patient_Sex: Patient_Sex,
      Patient_Address: Patient_Address,
      Patient_MobileNumber: Patient_MobileNumber,
      Symptoms: Symptoms,
      Diagnosis: Diagnosis,
      ReferenceNumber: ReferenceNumber,
      Duration: Duration,
      TabletName: TabletName,
      DrugName: DrugName,
      date: today,
      Time: time,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    formStep >= 2 && setLoading(true);

    fetch("http://localhost:5000/pdf", requestOptions)
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        setLoading(false);
        setResult(result + 1);
      })
      .catch((error) => console.log("error", error));

    if (formStep === 3) {
      fetch("http://localhost:5000/api/data/new", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log(result?.result?._id);
          setShareLink(result?.result?._id);
        })
        .catch((error) => console.log("error", error));
    }
  };

  // useEffect(() => {
  //   updateForm();
  // }, [result]);
  return (
    <>
      <div class="grid grid-cols-2 divide-x">
        <div className="p-10">
          <div>
            {formStep === 0 && (
              <AddDoctor
                setDoctor_Name={setDoctor_Name}
                Doctor_Name={Doctor_Name}
                setDoctor_Address={setDoctor_Address}
                Doctor_Address={Doctor_Address}
                setDoctor_Degree={setDoctor_Degree}
                Doctor_Degree={Doctor_Degree}
                setDoctor_RegistrationNumber={setDoctor_RegistrationNumber}
                Doctor_RegistrationNumber={Doctor_RegistrationNumber}
                setDoctor_Specialization={setDoctor_Specialization}
                Doctor_Specialization={Doctor_Specialization}
              />
            )}
            {formStep === 1 && (
              <AddPatient
                setPatient_Name={setPatient_Name}
                setPatient_Age={setPatient_Age}
                setPatient_Sex={setPatient_Sex}
                setPatient_Address={setPatient_Address}
                setPatient_MobileNumber={setPatient_MobileNumber}
                setSymptoms={setSymptoms}
              />
            )}
            {formStep === 2 && (
              <AddDiagnosis
                setDiagnosis={setDiagnosis}
                setSymptoms={setSymptoms}
                Symptoms={Symptoms}
                Diagnosis={Diagnosis}
              />
            )}
            {formStep === 3 && (
              <AddMedicine
                setTabletName={setTabletName}
                setDuration={setDuration}
              />
            )}
            {formStep === 4 && <Share shareLink={shareLink} />}
          </div>
          <div className="flex justify-between h-26">
            {formStep >= 1 && (
              <button
                onClick={() => setFormStep(formStep - 1)}
                type="button"
                className="mt-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Prev
              </button>
            )}
            {formStep <= 3 && !loading && (
              <button
                onClick={() => {
                  updateForm();
                  setFormStep(formStep + 1);
                }}
                type="button"
                className="mt-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Next
                <svg
                  aria-hidden="true"
                  className="ml-2 -mr-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            )}
            {loading && <DisabledButtonLoading />}
            <br />
            <br />
            <br />
          </div>
        </div>
        <>
          <PDFPreview loading={loading} result={result} />
        </>
      </div>
    </>
  );
}
