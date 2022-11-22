import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { iconRender } from "../../helpers/IconRender";

const RecentNotes = ({ data, scrollRef }) => {
  const navigate = useNavigate();
  return (
    <div className="mt-14 flex flex-col gap-2 lg:mt-0 " ref={scrollRef}>
      {data?.slice(0, 5).map((doc, index) => (
        <div key={index} className="mb-10 flex justify-center">
          <div className="flex w-80 flex-col items-center rounded-lg border-2 bg-white shadow-lg md:max-h-48 md:min-w-[40rem] md:flex-row">
            <img
              onClick={() => navigate(`/dashboard/document/${doc._id}`)}
              className="mt-2 h-10 w-10 hover:cursor-pointer md:mt-7 md:ml-10 md:h-24 md:w-24"
              src={iconRender(doc.filetype)}
              alt="file_icon"
            />
            <div className="flex flex-col justify-start p-6">
              <span className="mb-4 rounded-md bg-yellow-100 px-2 text-sm font-bold text-gray-700">
                {doc.subject}
              </span>
              <h5
                onClick={() => navigate(`/dashboard/document/${doc._id}`)}
                className="mb-2 text-xl font-medium text-gray-900 hover:cursor-pointer hover:underline"
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
