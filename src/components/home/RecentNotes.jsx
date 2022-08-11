import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import { iconRender } from "../../helpers/IconRender";

const RecentNotes = ({ data }) => {
  return (
    <div className="flex flex-col gap-2">
      {data?.slice(0, 5).map((doc, index) => (
        <div key={index} className="mb-3 flex justify-center">
          <div className="flex w-80 flex-col items-center rounded-lg border-2 bg-white shadow-lg md:max-h-48 md:min-w-[40rem] md:flex-row">
            <img
              onClick={() => window.open(doc.url, "_blank")}
              className="mt-2 h-10 w-10 hover:cursor-pointer md:mt-7 md:ml-10 md:h-24 md:w-24"
              src={iconRender(doc.filetype)}
              alt="file_icon"
            />
            <div className="flex flex-col justify-start p-6">
              <span className="mb-4 rounded-md bg-yellow-100 px-2 text-sm font-bold text-gray-700">
                {doc.subject}
              </span>
              <h5
                onClick={() => window.open(doc.url, "_blank")}
                className="mb-2 text-xl font-medium text-gray-900 hover:cursor-pointer"
              >
                {doc.title}
              </h5>

              <Link
                className="mb-1 flex items-center gap-2 hover:font-bold"
                to={`user/profile/${doc.postedBy._id}`}
              >
                <i className="bi bi-person-circle"></i>
                <p className="text-gray-600 ">{doc.postedBy.name}</p>
              </Link>
              <div className="flex items-center gap-2">
                <i className="bi bi-calendar"></i>
                <p className="text-xs text-gray-600">
                  {doc.createdAt.slice(0, 10)}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentNotes;
