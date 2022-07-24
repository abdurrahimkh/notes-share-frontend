import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  approvedDocuments,
  likeDocument,
} from "../../redux/features/document/documentAction";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLikeDocumentsMutation } from "../../redux/features/document/documentApi";
import { iconRender } from "./IconRender";
const Dashboard = () => {
  const dispatch = useDispatch();
  const { token, _id } = useSelector(state => state.auth.user);
  const documents = useSelector(state => state.documents.approved);

  console.log(documents);
  useEffect(() => {
    dispatch(approvedDocuments(token));
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
  const keys = getSameValKey(documents, key);
  const result = sortData(documents, keys, key);

  return (
    <div className="p-3">
      {keys.map((res, index) => (
        <div key={index}>
          <h1 className="text-2xl font-bold border border-blue rounded-lg p-1 bg-blue-50">
            {res.toUpperCase()}
          </h1>
          <div className="flex gap-5 p-2 flex-wrap">
            {result[`${res}`].map(doc => (
              <motion.div
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.4 },
                }}
                key={doc._id}
                className="card card-compact border w-38 bg-base-100 shadow-lg hover:cursor-pointer"
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
                        className="avatar w-10 h-10"
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
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                          </svg>
                        ) : (
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
                              d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                            />
                          </svg>
                        )}
                        <span>{doc.likes.length}</span>
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
      {/* <div className="flex gap-5 p-2 flex-wrap">
        {documents.map(doc => (
          <div
            key={doc._id}
            className="card card-compact w-48 bg-base-100 shadow-xl"
          >
            <figure>
              <img
                className="w-36 h-42"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/1200px-PDF_file_icon.svg.png"
                alt="document"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{doc.title}</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-sm ">Download</button>
              </div>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Dashboard;
