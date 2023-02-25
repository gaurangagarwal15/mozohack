import { useState } from "react";
import DisabledButtonLoading from "./DisabledBtnLoding";

const Share = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const sendMail = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("email", email);
    urlencoded.append("pathPdf", "http://localhost:5000/fpdf");

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };
    setLoading(true);
    fetch("http://localhost:5000/api/doctor/share-ehr", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setLoading(false);
        console.log(result);
      })
      .catch((error) => {
        setLoading(false);
        console.log("error", error);
      });
  };
  return (
    <>
      <h1 className="text-2xl font-semibold">Share the EHR</h1>
      <div className="mb-6 mt-10">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Email address
        </label>
        <input
          type="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          placeholder="john.doe@company.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      {!loading && (
        <button
          onClick={() => sendMail()}
          type="button"
          className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-md px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          Share
        </button>
      )}
      {loading && <DisabledButtonLoading />}
    </>
  );
};

export default Share;
