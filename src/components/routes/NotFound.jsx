import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="container mx-auto h-screen pt-32 md:pt-0 px-20 z-10 flex items-center justify-between">
        <div className="w-full flex flex-col  md:mb-8 text-center lg:text-left">
          <h1 className="font-light font-sans text-center lg:text-left text-5xl lg:text-8xl mt-12 md:mt-0 text-gray-700">
            Sorry, this page isn&#x27;t available
          </h1>
          <Link
            to="/"
            className="px-2 py-2 w-36 mt-16 font-light transition ease-in duration-200 hover:bg-blue-500 border-2 text-white text-lg border-gray-700 bg-blue-700 focus:outline-none"
          >
            Go back home
          </Link>
        </div>
        <div className="block w-full mx-auto md:mt-0 relative max-w-md lg:max-w-2xl">
          <img src="https://images.all-free-download.com/images/graphiclarge/error_404_page_not_found_6845510.jpg" />
        </div>
      </div>
    </>
  );
};

export default NotFound;
