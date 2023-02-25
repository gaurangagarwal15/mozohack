import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
const Layout = () => {
  const [active, setActive] = useState(1);
  const [hideSM, setHideSM] = useState(true);
  return (
    <>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded border-b-2 border-indigo-700">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a
            href="https://flowbite.com/"
            className="flex items-center text-2xl"
          >
            🏥
            <span className="self-center text-xl font-semibold whitespace-nowrap ">
              MyEHR
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded="true"
            onClick={() => setHideSM(!hideSM)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div
            className={`${hideSM && "hidden"} w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white ">
              <li className=" text-base ">
                <Link
                  to="/"
                  onClick={() => setActive(1)}
                  className={`block py-2 pr-4 pl-3  rounded ${
                    active === 1 ? "text-blue-700" : "text-gray-700"
                  } hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 `}
                >
                  Home
                </Link>
              </li>
              <li className=" text-base ">
                <Link
                  to="/doctor"
                  onClick={() => setActive(2)}
                  className={`block py-2 pr-4 pl-3  rounded ${
                    active === 2 ? "text-blue-700" : "text-gray-700"
                  } hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 `}
                >
                  Doctor
                </Link>
              </li>
              <li className=" text-base ">
                <Link
                  to="/management"
                  onClick={() => setActive(3)}
                  className={`block py-2 pr-4 pl-3  rounded ${
                    active === 3 ? "text-blue-700" : "text-gray-700"
                  } hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 `}
                >
                  Management
                </Link>
              </li>
              <li className=" text-base ">
                <Link
                  to="/pricing"
                  onClick={() => setActive(4)}
                  className={`block py-2 pr-4 pl-3  rounded ${
                    active === 4 ? "text-blue-700" : "text-gray-700"
                  } hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 `}
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
      <footer className="text-center text-gray-500 font-semibold">
        Copyright © 2022 MyEHR Labs Inc.
      </footer>
    </>
  );
};

export default Layout;
