import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import DocumentsImage from "../../assets/images/front_page_image.svg";
import SectionTwo from "./SectionTwo";
const FrontPage = () => {
  return (
    <>
      {/* <div className="flex gap-10 items-center justify-center p-14 mt-10">
        <div className="max-w-lg">
          <img src={DocumentsImage} />
        </div>
        <div>
          <h1 className="text-3xl md:text-7xl font-bold text-indigo-600">
            Notes Share
          </h1>
          <p className="text-md md:text-2xl">
            Study Notes Written by best students
          </p>
          <button className="btn btn-primary mt-5 transition ease-in-out delay-150 bg-blue-700 border-none hover:-translate-y-1 hover:scale-110 hover:bg-green-500 duration-300">
            Get Started
          </button>
        </div>
      </div> */}
      <div className="h-screen  ">
        <div className="container mx-auto px-8 md:px-12 lg:px-7 xl:max-w-5xl xl:px-0">
          <div className="pt-40 md:flex md:gap-12 lg:py-40">
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
                  to="/home"
                  className="btn btn-primary mt-5 border-none bg-blue-700 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-green-500"
                >
                  Get Started
                </Link>
              </div>
            </div>
            <div className="mt-12 mr-0 h-56 overflow-hidden sm:h-72 md:-mr-24 md:mt-0 md:h-auto md:w-7/12 lg:mr-0 lg:-mt-12">
              <img src={DocumentsImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrontPage;
