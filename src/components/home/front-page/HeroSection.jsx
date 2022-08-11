import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import NoteImage from "../../../assets/images/front-page-image.png";

const HeroSection = () => {
  return (
    <div className="relative  bg-gray-200">
      <div className="absolute inset-x-0 bottom-0">
        <svg
          viewBox="0 0 224 12"
          fill="currentColor"
          className="-mb-1 w-full text-white"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
        </svg>
      </div>
      <div className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
        <div className="pt-40 md:flex md:gap-12 lg:p-10">
          <div className="md:w-6/12">
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              className="text-3xl font-bold text-indigo-600 md:text-7xl"
            >
              Notes Share
            </motion.div>
            <p className="text-md md:text-2xl">
              Study Notes Written by best students
            </p>
            <div className="md:-mr-32">
              <Link
                class="group relative mt-10 inline-flex items-center overflow-hidden rounded-lg border border-current px-8 py-3 text-indigo-600 hover:bg-blue-700 hover:text-white focus:outline-none "
                to="/home"
              >
                <span class="absolute left-0 -translate-x-full transition-transform group-hover:translate-x-4">
                  <svg
                    class="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>

                <span class="text-md font-bold transition-all group-hover:ml-4">
                  Get Started
                </span>
              </Link>
            </div>
          </div>
          <div className="mt-12 mr-0 h-56 overflow-hidden sm:h-72 md:-mr-24 md:mt-0 md:h-auto md:w-7/12 lg:mr-0 lg:-mt-[5rem]">
            <img src={NoteImage} alt="front_page_image" />
          </div>
        </div>
        <a
          href="/"
          aria-label="Scroll down"
          className="mx-auto flex h-10 w-10 transform items-center justify-center rounded-full border border-gray-400 text-gray-400 duration-300 hover:scale-110 hover:border-indigo-600 hover:text-indigo-700 hover:shadow"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="currentColor"
          >
            <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
