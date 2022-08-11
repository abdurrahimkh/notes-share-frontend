import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  approvedDocuments,
  likeDocument,
} from "../../redux/features/document/documentAction";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { iconRender } from "../../helpers/IconRender";
import Select from "react-select";
import { useState } from "react";
import { getSameValKey, sortData } from "../../helpers/Dashboard";
import Loader from "../loader/Loader";
import EmptyStat from "./EmptyStat";

const Dashboard = () => {
  const dispatch = useDispatch();
  const [approved, setApproved] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { _id } = useSelector(state => state.auth.user);
  const { values } = useSelector(state => state.documents);
  const subjectsOptions = values[2]?.subjects;
  const fieldofstudyOptions = values[1]?.fieldofstudy;
  console.log(isLoading);
  useEffect(() => {
    setIsLoading(true);
    dispatch(approvedDocuments()).then(res => {
      setIsLoading(false);
      setApproved(res.payload);
    });
  }, []);

  const handleLike = id => {
    dispatch(likeDocument(id)).then(() =>
      dispatch(approvedDocuments()).then(res => setApproved(res.payload))
    );
  };

  const key = "subject";
  const keys = getSameValKey(approved, key);
  const result = sortData(approved, keys, key);

  const handleFieldChange = selectedOption => {
    setIsLoading(true);
    fetch(
      `https://notes-share-fyp.herokuapp.com/api/documents/search?field=${selectedOption.value}`
    )
      .then(res => res.json())
      .then(result => {
        setIsLoading(false);
        setApproved(result);
      });
  };

  const handleSubjectChange = selectedOption => {
    setIsLoading(true);
    fetch(
      `https://notes-share-fyp.herokuapp.com/api/documents/search?subject=${selectedOption.value}`
    )
      .then(res => res.json())
      .then(result => {
        setIsLoading(false);
        setApproved(result);
      });
  };

  return (
    <div className="p-3">
      <div className="flex gap-2">
        <Select
          className="w:44 md:w-48"
          placeholder="Filter By Field"
          options={fieldofstudyOptions}
          onChange={handleFieldChange}
        />
        <Select
          className="w:44 md:w-48"
          placeholder="Filter By Subject"
          options={subjectsOptions}
          onChange={handleSubjectChange}
        />
      </div>
      {keys.length === 0 ? (
        <div className="pt-10 text-center text-2xl font-bold">
          {isLoading ? <Loader /> : <EmptyStat />}
        </div>
      ) : (
        keys.map((res, index) => (
          <div className="mt-2 rounded-md border" key={index}>
            <h1 className="px-3 py-5 font-mono text-xl font-bold ">
              {res.toUpperCase()}
            </h1>
            <span className="px-3 font-mono">Documents</span>
            <div className="flex flex-wrap gap-5 p-2">
              {result[`${res}`].map(doc => (
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.4 },
                  }}
                  key={doc._id}
                  className="card card-compact  w-44 border  bg-blue-50 shadow-lg hover:cursor-pointer"
                >
                  <figure>
                    <img
                      onClick={() => window.open(doc.url, "_blank")}
                      className="mt-2 h-12 w-12"
                      src={iconRender(doc.filetype)}
                      alt="document"
                    />
                  </figure>
                  <div className="card-body">
                    <h2
                      onClick={() => window.open(doc.url, "_blank")}
                      className="text-lg  font-bold hover:text-gray-500"
                    >
                      {doc.title}
                    </h2>
                    <motion.div
                      whileHover={{
                        scale: 1.2,
                        transition: { duration: 0.4 },
                      }}
                      className="flex items-center justify-center gap-2"
                    >
                      <Link to={`user/profile/${doc.postedBy._id}`}>
                        <img
                          className="avatar h-10 w-10 rounded-full"
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
        ))
      )}
    </div>
  );
};

export default Dashboard;
