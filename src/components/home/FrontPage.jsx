import React from "react";
import DocumentsImage from "../../assets/images/front_page_image.svg";
import SectionTwo from "./SectionTwo";
const FrontPage = () => {
  return (
    <>
      <div className="flex gap-10 items-center justify-center p-14 mt-10">
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
          <button class="btn btn-primary mt-5 transition ease-in-out delay-150 bg-blue-700 border-none hover:-translate-y-1 hover:scale-110 hover:bg-green-500 duration-300">
            Get Started
          </button>
        </div>
      </div>
      <SectionTwo />
    </>
  );
};

export default FrontPage;
