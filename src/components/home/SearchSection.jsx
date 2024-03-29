import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const SearchSection = ({ data }) => {
  const [filteredData, setFilteredData] = useState([]);
  const navigate = useNavigate();
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
    <div className="flex h-[60vh] flex-col items-center justify-center bg-gray-50 pt-16 pb-10 md:h-[60vh] ">
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        className="mt-4 text-3xl font-bold md:text-6xl lg:mt-0 "
      >
        SEARCH NOTES
      </motion.div>

      <div className="relative flex  items-center">
        <input
          className="mt-3 h-12 rounded-md border px-2 focus:shadow-xl focus:outline-none md:w-[40rem]   "
          placeholder="Type..."
          onChange={handleChange}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-4 mt-2  h-7 w-7 "
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
          className="mt-1 w-96 rounded-md border bg-white p-2 "
        >
          {filteredData.slice(0, 5).map((doc, key) => {
            return (
              <ul key={key} className="ml-3 ">
                <li className="py-2 hover:rounded-md hover:bg-gray-300">
                  <button
                    onClick={() => navigate(`/dashboard/document/${doc._id}`)}
                  >
                    <p className="ml-1">{doc.title}</p>
                  </button>
                </li>
              </ul>
            );
          })}
        </motion.div>
      )}
      <div className="divider mt-10 px-40">OR</div>
      <div className="text-lg font-bold tracking-wider">EXPLORE</div>
      <div className="mt-8 flex flex-col gap-10 md:flex-row">
        <Link
          to="/dashboard"
          className="rounded-lg border bg-white px-5 py-2 font-bold  hover:bg-blue-700 hover:text-white  md:px-10 md:py-3"
        >
          <i className="bi bi-card-text mr-2"></i>
          Documents
        </Link>
        <Link
          to="/questions/list"
          className="rounded-lg border  bg-white px-5 py-2 font-bold  hover:bg-blue-700 hover:text-white  md:px-10 md:py-3"
        >
          <i className="bi bi-check2-square mr-2"></i>
          Answers
        </Link>
        <Link
          to="/document/upload"
          className="rounded-lg border  bg-white px-5 py-2 font-bold  hover:bg-blue-700 hover:text-white  md:px-10 md:py-3 "
        >
          <i className="bi bi-file-earmark-arrow-up mr-2"></i>
          Upload
        </Link>
      </div>
    </div>
  );
};

export default SearchSection;
