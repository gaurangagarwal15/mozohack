import { useState } from "react";

const AddPatient = ({
  setPatient_Name,
  setPatient_Age,
  setPatient_Sex,
  setPatient_Address,
  setPatient_MobileNumber,
  setSymptoms,
}) => {
  const [patients, setPatients] = useState([]);
  const [query, setQuery] = useState("");

  const fetchPatients = (value) => {
    //console.log("tt");
    var myHeaders = new Headers();
    myHeaders.append("authority", "examinator.epam.com");
    myHeaders.append("accept", "*/*");
    myHeaders.append("accept-language", "en-US,en;q=0.6");
    myHeaders.append("authorization", "Basic bXBsY2VfdjZWUDpqN2I4c3VfNGRTYQ==");
    myHeaders.append("content-type", "application/json");
    myHeaders.append("sec-fetch-dest", "empty");
    myHeaders.append("sec-fetch-mode", "cors");
    myHeaders.append("sec-fetch-site", "same-origin");
    myHeaders.append("sec-gpc", "1");
    myHeaders.append(
      "user-agent",
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36"
    );

    var raw = "";

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(`http://localhost:5000/api/patient/find?q=${value}`, requestOptions)
      .then((response) => response.json())
      .then((result) => setPatients(result?.patients))
      .catch((error) => console.log("error", error));
  };

  return (
    <>
      <h1 className="text-2xl font-semibold">Add a Patient</h1>
      <div className="mt-7">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only "
        >
          Search
        </label>
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            id="default-search"
            className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
            placeholder="Search Mockups, Logos..."
            value={query}
            onChange={(e) => {
              fetchPatients(e.target.value);
              setQuery(e.target.value);
            }}
          />
        </div>
      </div>
      {patients?.map((patient) => {
        return (
          <div
            onClick={() => {
              setPatient_Name(patient?.name);
              setPatient_Age(patient?.age);
              setPatient_Sex(patient?.gender);
              setPatient_Address(patient?.address);
              setPatient_MobileNumber(patient?.phoneNumber);
              setSymptoms(patient?.symtoms);
            }}
            className="flex items-center mt-4 border rounded p-2 hover:bg-blue-600 hover:text-white text-black"
          >
            <input
              defaultChecked=""
              id="default-radio-2"
              type="radio"
              defaultValue=""
              name="default-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
            />
            <label
              htmlFor="default-radio-2"
              className="ml-2 text-sm font-medium text-gray-900"
            >
              {patient?.name} - {patient?.age} - {patient?.gender}
            </label>
          </div>
        );
      })}
    </>
  );
};
export default AddPatient;
