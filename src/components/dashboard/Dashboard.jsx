import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { approvedDocuments } from "../../redux/features/document/documentAction";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { iconRender } from "../../helpers/IconRender";
import Select from "react-select";
import { useState } from "react";
import { getSameValKey, sortData } from "../../helpers/Dashboard";
import Loader from "../loader/Loader";
import EmptyStat from "./EmptyStat";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [approved, setApproved] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { fields } = useSelector(state => state.documents);
  const [subjects, setSubjects] = useState([]);
  const [selectedSubject, setselectedSubject] = useState("");

  useEffect(() => {
    setIsLoading(true);
    dispatch(approvedDocuments()).then(res => {
      setIsLoading(false);
      setApproved(res.payload);
    });
  }, []);

  const key = "subject";
  const keys = getSameValKey(approved, key);
  const result = sortData(approved, keys, key);

  const handleFieldChange = selectedOption => {
    setselectedSubject("");
    setIsLoading(true);
    fetch(
      `https://notes-share-server.herokuapp.com/api/documents/search?field=${selectedOption.value}`
    )
      .then(res => res.json())
      .then(result => {
        setIsLoading(false);
        setApproved(result);
      });
    setSubjects(selectedOption.subjects);
  };

  const handleSubjectChange = selectedOption => {
    setselectedSubject(selectedOption);
    setIsLoading(true);
    fetch(
      `https://notes-share-server.herokuapp.com/api/documents/search?subject=${selectedOption.value}`
    )
      .then(res => res.json())
      .then(result => {
        setIsLoading(false);
        setApproved(result);
      });
  };

  return (
    <div className="mb-5  flex min-h-screen flex-col py-3  md:flex-row">
      <div className="mt-6 flex w-96 items-start justify-center overflow-y-auto rounded py-4 px-3 md:w-64 md:flex-none">
        <div className="mb-2 flex flex-col gap-2">
          <p className=" font-bold">
            <i className="bi bi-funnel mr-2"></i>Filter By Field
          </p>
          <Select
            className="w:44 md:w-48"
            options={fields}
            onChange={handleFieldChange}
          />
          <p className=" font-bold">
            <i className="bi bi-funnel mr-2"></i>Filter By Subject
          </p>
          <Select
            className="w:44 md:w-48"
            value={selectedSubject}
            options={subjects}
            onChange={handleSubjectChange}
          />
        </div>
      </div>
      <div className="border-l-2 pl-3"></div>
      <div className="mr-2  w-screen">
        {keys.length === 0 ? (
          <div className="pt-10 text-center text-2xl font-bold">
            {isLoading ? <Loader /> : <EmptyStat />}
          </div>
        ) : (
          keys.map((res, index) => (
            <div
              className="m-3 mt-2 rounded-md border border-gray-400 md:m-0"
              key={index}
            >
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
                    className="card card-compact  w-44 border  bg-indigo-50 shadow-lg "
                  >
                    <figure>
                      <img
                        onClick={() =>
                          navigate(`/dashboard/document/${doc._id}`)
                        }
                        className="mt-2 h-12 w-12"
                        src={iconRender(doc.filetype)}
                        alt="document"
                      />
                    </figure>
                    <div className="card-body">
                      <h2
                        onClick={() =>
                          navigate(`/dashboard/document/${doc._id}`)
                        }
                        className="text-center text-lg  font-bold hover:cursor-pointer hover:underline"
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
                        <Link
                          className="hover:underline"
                          to={`user/profile/${doc.postedBy._id}`}
                        >
                          {doc.postedBy.name}
                        </Link>
                      </motion.div>
                      <div className="card-actions justify-end">
                        <div className="flex">
                          <Rating
                            style={{ maxWidth: 80 }}
                            value={doc?.ratings}
                            readOnly={true}
                          />
                          ({doc?.noOfReviews})
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
    </div>
  );
};

export default Dashboard;
