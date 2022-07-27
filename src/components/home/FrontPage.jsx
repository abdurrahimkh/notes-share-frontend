import React from "react";
import DocumentsImage from "../../assets/images/front_page_image.svg";
import BestNotes from "./BestNotes";
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
        </div>
      </div>
    </>
  );
};

export default FrontPage;
