import { Link } from "react-router-dom";

const EmptyStat = () => {
  return (
    <div class="relative rounded-lg border border-gray-200 p-8 text-center">
      <h2 class="text-2xl font-medium">There's nothing here...</h2>

      <p class="mt-4 text-sm text-gray-500">
        Uploaded Documents will appear here, try upload one!
      </p>

      <Link
        to="/document/upload"
        class="mt-8 inline-flex items-center rounded-lg bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-500"
      >
        Upload a Doucment
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="ml-3 h-4 w-4 flex-shrink-0"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </Link>
    </div>
  );
};

export default EmptyStat;
