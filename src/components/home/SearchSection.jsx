const SearchSection = () => {
  return (
    <div className="flex h-[70vh] justify-center items-center flex-col">
      <h1 className="text-3xl md:text-7xl font-bold text-indigo-600">
        Notes Share
      </h1>
      <p className="text-md md:text-2xl">
        Study Notes Written by best students
      </p>
      <div className="flex items-center ">
        <input
          className="mt-3 md:w-[40rem] h-12 rounded-md px-2 "
          placeholder="Search Notes"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 mt-2 w-7 "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z"
          />
        </svg>
      </div>
      <p className="text-slate-500 md:mr-72 mt-2 hidden md:block">
        create account and upload notes for other students
      </p>
    </div>
  );
};

export default SearchSection;
