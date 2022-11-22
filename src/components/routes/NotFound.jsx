import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="container z-10 mx-auto flex h-screen items-center justify-between px-20 pt-32 md:pt-0">
        <div className="flex w-full flex-col  text-center md:mb-8 lg:text-left">
          <h1 className="mt-12 text-center font-sans text-5xl font-light text-gray-700 md:mt-0 lg:text-left lg:text-8xl">
            Sorry, this page isn&#x27;t available
          </h1>
          <Link
            to="/"
            className="mt-16 w-36 border-2 border-gray-700 bg-blue-700 px-2 py-2 text-lg font-light text-white transition duration-200 ease-in hover:bg-blue-500 focus:outline-none"
          >
            Go back home
          </Link>
        </div>
        <div className="relative mx-auto block w-full max-w-md md:mt-0 lg:max-w-2xl">
          <img src="https://images.all-free-download.com/images/graphiclarge/error_404_page_not_found_6845510.jpg" />
        </div>
      </div>
    </>
  );
};

export default NotFound;
