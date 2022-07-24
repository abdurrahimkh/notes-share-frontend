import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const SearchSection = ({ data }) => {
  const [filteredData, setFilteredData] = useState([]);
  const handleChange = e => {
    const searchWord = e.target.value;
    const newFilter = data.filter(value => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
  return (
    <div className="flex h-[calc(100vh_-_7rem)] justify-center items-center flex-col">
      <h1 className="text-3xl md:text-7xl font-bold text-indigo-600">
        Notes Share
      </h1>
      <p className="text-md md:text-2xl">
        Study Notes Written by best students
      </p>
      <div className="flex items-center  relative">
        <input
          className="mt-3 md:w-[40rem] h-12 rounded-md px-2 focus:outline-none focus:shadow-xl   "
          placeholder="Search Notes"
          onChange={handleChange}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 mt-2 w-7  absolute right-4 "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z"
          />
        </svg>
      </div>
      {filteredData.length !== 0 && (
        <motion.div
          initial={{ y: "30%" }}
          animate={{ y: 0 }}
          className="border w-96 mt-1 rounded-md bg-white p-2"
        >
          {filteredData.slice(0, 5).map((doc, key) => {
            return (
              <ul key={key} className="ml-3 ">
                <li className="py-2 hover:bg-gray-300 hover:rounded-md">
                  <a href={doc.url} target="_blank">
                    <p className="ml-1">{doc.title}</p>
                  </a>
                </li>
              </ul>
            );
          })}
        </motion.div>
      )}
      <div className="flex gap-10 mt-8">
        <Link
          to="/dashboard"
          className="bg-white font-bold px-5 py-2 md:px-10  md:py-3 rounded-lg  hover:bg-blue-700 hover:text-white"
        >
          Documents
        </Link>
        <Link
          to="/document/upload"
          className="bg-white font-bold px-5 py-2 md:px-10  md:py-3 rounded-lg  hover:bg-blue-700 hover:text-white"
        >
          Upload
        </Link>
      </div>
    </div>
  );
};

export default SearchSection;
