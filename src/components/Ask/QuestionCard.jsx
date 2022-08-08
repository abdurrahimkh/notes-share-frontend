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
          <div className="flex items-center ">
            <h2 className="-mt-1 text-lg font-semibold text-gray-900">
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
          <p className="sm mt-3 font-bold tracking-wider text-gray-700">
            <i className="bi bi-question-square"></i> {question.title}
          </p>
          <div className="divider"></div>
          <div className="mt-4 flex items-center">
            <div className="btn btn-success flex gap-2">
              {question.answers.length}{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                />
              </svg>
              Answer
              {question.answers.length > 1 ? "s" : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
