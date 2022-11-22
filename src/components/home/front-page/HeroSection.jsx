import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HeroSectionPicture from "../../../assets/images/hero_section_image.png";
const HeroSection = ({ executeScroll }) => {
  return (
    <div className="relative bg-blue-100 ">
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
        <div className=" md:flex md:gap-12 md:pt-40 lg:p-10">
          <div className="md:w-6/12">
            <motion.div
              initial={{ x: "-100%" }}
              transition={{ ease: "easeOut", duration: 0.6 }}
              animate={{ x: 0 }}
              className="text-3xl font-bold text-indigo-600 md:text-7xl"
            >
              Notes Share
            </motion.div>
            <p className="text-md md:text-2xl">
              Study Notes Written by best students
            </p>
            <div className="md:-mr-32">
              <Link
                className="group relative mt-10 inline-flex items-center overflow-hidden rounded-lg border border-current px-8 py-3 text-indigo-600 hover:bg-blue-700 hover:text-white focus:outline-none "
                to="/home"
              >
                <span className="absolute left-0 -translate-x-full transition-transform group-hover:translate-x-4">
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>

                <span className="text-md font-bold transition-all group-hover:ml-4">
                  Get Started
                </span>
              </Link>
            </div>
          </div>
          <div className="mt-12 mr-0 h-56 overflow-hidden sm:h-72 md:-mr-24 md:mt-0 md:h-auto md:w-7/12 lg:mr-0 lg:-mt-[4rem]">
            <motion.img
              whileHover={{
                scale: 1.1,
              }}
              src={HeroSectionPicture}
              alt="front_page_image"
              loading="lazy"
            />
          </div>
        </div>
        <motion.button
          initial={{ y: -50 }}
          animate={{ y: 10 }}
          transition={{ duration: 1, repeat: Infinity }}
          onClick={executeScroll}
          aria-label="Scroll down"
          className="mx-auto mt-12  flex  h-10 w-10 transform items-center justify-center rounded-full border border-gray-400 text-gray-400 duration-300 hover:scale-110 hover:border-indigo-600 hover:text-indigo-700 hover:shadow md:mt-0"
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
        </motion.button>
      </div>
    </div>
  );
};

export default HeroSection;
