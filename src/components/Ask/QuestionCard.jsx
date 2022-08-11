import { Link } from "react-router-dom";
import { format } from "timeago.js";
const QuestionCard = ({ question }) => {
  return (
    <div className="mx-4 my-10 flex max-w-md rounded-lg border-2 bg-white shadow-lg md:mx-auto md:max-w-2xl ">
      <div className="flex items-start px-4 py-6">
        <img
          className="mr-4 h-12 w-12 rounded-full object-cover shadow"
          src={question.postedBy?.pic}
          alt="avatar"
        />
        <div className="">
          <div className="flex items-center  ">
            <h2 className="-mt-1 font-medium  text-gray-700">
              {question.postedBy?.name}{" "}
            </h2>
            <small className="pl-5 text-sm text-gray-700">
              {format(question.createdAt)}
            </small>
          </div>
          <p className=" text-sm text-gray-700">
            in{" "}
            <span className="rounded-full bg-yellow-100 px-2">
              {question.subject}
            </span>
          </p>
          <p className="sm mt-3 text-lg font-bold tracking-wider text-gray-700">
            <i className="bi bi-question-circle"></i> {question.title}
          </p>
          <div className="divider"></div>
          <div className="mt-4 flex items-center">
            <Link
              to={`question/${question._id}`}
              className=" flex  rounded-lg border border-gray-400 bg-white py-1 px-3 font-medium tracking-wide text-gray-700 hover:cursor-pointer hover:bg-blue-700 hover:text-white "
            >
              {question.answers.length}{" "}
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
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                />
              </svg>
              Answer
              {question.answers.length > 1 ? "s" : ""}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
