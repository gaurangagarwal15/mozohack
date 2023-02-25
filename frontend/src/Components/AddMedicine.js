import { useState } from "react";

const AddMedicine = ({ setTabletName, setDuration }) => {
  const [query, setQuery] = useState("");
  const [medicines, setMedicines] = useState([]);

  const [medicineData, setMedicineData] = useState([]);

  const [custom, setCustom] = useState(false);
  const [customMed, setCustoMed] = useState("");

  const fetchMedicines = (value) => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://rxnav.nlm.nih.gov/REST/spellingsuggestions.json?name=${value}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) =>
        setMedicines(result?.suggestionGroup?.suggestionList?.suggestion)
      )
      .catch((error) => console.log("error", error));
  };

  const fetchMedicine = (value) => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://rxnav.nlm.nih.gov/REST/drugs.json?name=${value}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result?.drugGroup?.conceptGroup);
        setMedicineData(result?.drugGroup?.conceptGroup);
      })
      .catch((error) => console.log("error", error));
  };
  return (
    <>
      <h1 className="text-2xl font-semibold">Add a Medicine</h1>
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
              fetchMedicines(e.target.value);
              setQuery(e.target.value);
            }}
          />
        </div>
        {medicines?.map((medicine) => {
          return (
            <div
              onClick={() => {
                fetchMedicine(medicine);
              }}
              className="mt-5 className flex items-center mt-4 border rounded p-2 hover:bg-blue-600 hover:text-white text-black"
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
                {medicine}
              </label>
            </div>
          );
        })}
        <br />
        <button
          onClick={() => setCustom(!custom)}
          type="button"
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-1 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Add Custom
        </button>
        <br />
        {!custom && medicineData && "Selected  Medicine Data :"}
        {!custom &&
          medicineData?.map((data) => {
            return (
              <>
                {data?.conceptProperties?.slice(0, 4).map((med) => {
                  return (
                    <div
                      onClick={() => setTabletName(med?.synonym)}
                      className="mt-5 className flex items-center mt-4 border rounded p-2 hover:bg-blue-600 hover:text-white text-black"
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
                        {med?.synonym}
                      </label>
                    </div>
                  );
                })}
              </>
            );
          })}
        {custom && (
          <div className="mt-10">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Your Medicine
            </label>
            <textarea
              id="message"
              rows={4}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
              placeholder="write a medicine ..."
              defaultValue={""}
              value={customMed}
              onChange={(e) => {
                setTabletName(e.target.value);
                setCustoMed(e.target.value);
              }}
            />
          </div>
        )}
      </div>
    </>
  );
};
{
  /* <div
  onClick={() => {
    setDoctor_Name(doctor?.name);
    setDoctor_Address(doctor?.address);
    setDoctor_Degree(doctor?.degree);
    setDoctor_RegistrationNumber(doctor?.registrationNumber);
    setDoctor_Specialization(doctor?.specialization);
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
    {doctor?.name} - {doctor?.registrationNumber}
  </label>
</div>; */
}
export default AddMedicine;
