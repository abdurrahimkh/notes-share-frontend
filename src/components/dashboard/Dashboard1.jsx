import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  approvedDocuments,
  likeDocument,
} from "../../redux/features/document/documentAction";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { iconRender } from "./IconRender";
import Select from "react-select";
import { useState } from "react";
const Dashboard = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  console.log(isSearching);
  console.log(searchValue);

  const dispatch = useDispatch();
  const { token, _id, fieldofstudy, isLoading } = useSelector(
    state => state.auth.user
  );
  const { approved, values } = useSelector(state => state.documents);
  const fieldDocuments = approved.filter(doc => doc.field === fieldofstudy);
  const subjectsOptions = values[2]?.subjects;
  const fieldofstudyOptions = values[1]?.fieldofstudy;

  useEffect(() => {
    dispatch(approvedDocuments());
  }, []);

  const handleLike = id => {
    dispatch(likeDocument(id)).then(res => dispatch(approvedDocuments(token)));
  };

  function getSameValKey(arry, key) {
    const set = new Set();
    arry.forEach(item => {
      set.add(item[key]);
    });

    return [...set];
  }

  function sortData(arry, keys, key) {
    const map = {};
    keys.forEach(key => {
      map[key] = [];
    });

    arry.forEach(item => {
      map[item[key]].push(item);
    });

    return map;
  }
  const key = "subject";
  const keys = getSameValKey(approved, key);
  const result = sortData(approved, keys, key);

  const handleFieldChange = selectedOption => {
    setIsSearching(true);
    setSearchValue(selectedOption.value);
  };

  const handleSubjectChange = selectedOption => {
    setIsSearching(true);
    setSearchValue(selectedOption.value);
  };

  return (
    <div className="p-3">
      <div className="flex gap-2">
        <Select
          className="w-48"
          placeholder="Filter By Field"
          options={fieldofstudyOptions}
          onChange={handleFieldChange}
        />
        <Select
          className="w-48"
          placeholder="Filter By Subject"
          options={subjectsOptions}
          onChange={handleSubjectChange}
        />
      </div>
      {!isSearching &&
        keys.map((res, index) => (
          <div className="border rounded-md mt-2" key={index}>
            <h1 className="font-mono font-bold text-xl px-3 py-5 ">
              {res.toUpperCase()}
            </h1>
            <span className="font-mono px-3">Documents</span>
            <div className="flex gap-5 p-2 flex-wrap">
              {result[`${res}`].map(doc => (
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.4 },
                  }}
                  key={doc._id}
                  className="card card-compact  border w-44 h-56 bg-blue-50 shadow-lg hover:cursor-pointer"
                >
                  <figure>
                    <img
                      onClick={() => window.open(doc.url, "_blank")}
                      className="w-12 h-12 mt-2"
                      src={iconRender(doc.filetype)}
                      alt="document"
                    />
                  </figure>
                  <div className="card-body">
                    <h2
                      onClick={() => window.open(doc.url, "_blank")}
                      className="font-bold text-lg hover:text-gray-500"
                    >
                      {doc.title}
                    </h2>
                    <motion.div
                      whileHover={{
                        scale: 1.2,
                        transition: { duration: 0.4 },
                      }}
                      className="flex gap-2 justify-center items-center"
                    >
                      <Link to={`user/profile/${doc.postedBy._id}`}>
                        <img
                          className="avatar w-10 h-10 rounded-full"
                          src={doc.postedBy.pic}
                        />
                      </Link>
                      <span>{doc.postedBy.name}</span>
                    </motion.div>
                    <div className="card-actions justify-end">
                      <div className="flex gap-6 ">
                        <div
                          onClick={() => handleLike(doc._id)}
                          className="flex items-center "
                        >
                          {doc.likes?.includes(_id) ? (
                            <i className="bi bi-hand-thumbs-up-fill text-xl "></i>
                          ) : (
                            <i className="bi bi-hand-thumbs-up text-xl"></i>
                          )}
                          <span className="mt-1 ml-1 font-mono">
                            {doc.likes.length}
                          </span>
                        </div>
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      {isSearching && (
        <div className="border rounded-md mt-2">
          <h1 className="font-mono font-bold text-xl px-3 py-5 ">
            {searchValue}
          </h1>
          <span className="font-mono px-3">Documents</span>
          <div className="flex gap-5 p-2 flex-wrap">
            {result[searchValue] ? (
              result[searchValue].map(doc => (
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.4 },
                  }}
                  key={doc._id}
                  className="card card-compact  border w-44 h-56 bg-blue-50 shadow-lg hover:cursor-pointer"
                >
                  <figure>
                    <img
                      onClick={() => window.open(doc.url, "_blank")}
                      className="w-12 h-12 mt-2"
                      src={iconRender(doc.filetype)}
                      alt="document"
                    />
                  </figure>
                  <div className="card-body">
                    <h2
                      onClick={() => window.open(doc.url, "_blank")}
                      className="font-bold text-lg hover:text-gray-500"
                    >
                      {doc.title}
                    </h2>
                    <motion.div
                      whileHover={{
                        scale: 1.2,
                        transition: { duration: 0.4 },
                      }}
                      className="flex gap-2 justify-center items-center"
                    >
                      <Link to={`user/profile/${doc.postedBy._id}`}>
                        <img
                          className="avatar w-10 h-10 rounded-full"
                          src={doc.postedBy.pic}
                        />
                      </Link>
                      <span>{doc.postedBy.name}</span>
                    </motion.div>
                    <div className="card-actions justify-end">
                      <div className="flex gap-6 ">
                        <div
                          onClick={() => handleLike(doc._id)}
                          className="flex items-center "
                        >
                          {doc.likes?.includes(_id) ? (
                            <i className="bi bi-hand-thumbs-up-fill text-xl "></i>
                          ) : (
                            <i className="bi bi-hand-thumbs-up text-xl"></i>
                          )}
                          <span className="mt-1 ml-1 font-mono">
                            {doc.likes.length}
                          </span>
                        </div>
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <p className="text-3xl font-bold mx-auto">
                😕 Sorry No Documents Found
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
