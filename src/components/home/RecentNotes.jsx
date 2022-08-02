import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import { iconRender } from "../../helpers/IconRender";

const RecentNotes = ({ data }) => {
  return (
    <div className="flex flex-col gap-2">
      {data?.slice(0, 5).map((doc, index) => (
        <div key={index} className="flex justify-center ">
          <div className="flex flex-col md:flex-row md:min-w-[40rem] md:max-h-48 rounded-lg bg-white shadow-lg">
            <img
              onClick={() => window.open(doc.url, "_blank")}
              className=" md:w-24 md:h-24 md:mt-7 md:ml-10 hover:cursor-pointer"
              src={iconRender(doc.filetype)}
              alt="file_icon"
            />
            <div className="p-6 flex flex-col justify-start">
              <span className="text-gray-700 text-sm bg-yellow-100 rounded-md px-2 font-bold mb-4">
                {doc.subject}
              </span>
              <h5
                onClick={() => window.open(doc.url, "_blank")}
                className="text-gray-900 text-xl font-medium mb-2 hover:cursor-pointer"
              >
                {doc.title}
              </h5>

              <Link
                className="hover:font-bold mb-1 flex items-center gap-2"
                to={`user/profile/${doc.postedBy._id}`}
              >
                <i className="bi bi-person-circle"></i>
                <p className="text-gray-600 ">{doc.postedBy.name}</p>
              </Link>
              <div className="flex items-center gap-2">
                <i className="bi bi-calendar"></i>
                <p className="text-gray-600 text-xs">
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
