import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-white py-6 ">
      <div className="md:px-12 lg:px-28">
        <div className="container m-auto space-y-6 text-gray-600">
          <svg
            className="m-auto"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="58px"
            height="58px"
            viewBox="0 0 600 600"
            enableBackground="new 0 0 600 600"
          >
            <path
              id="color_x5F_3"
              fill="#6D6E71"
              d="M139.141,65.136C186.138,32.803,241.727,15.389,300,15.389s113.862,17.413,160.858,49.747    c-3.403,0.76-39.955,4.813-51.641,6.442C376.132,55.695,339.087,46.788,300,46.788s-76.132,8.907-109.217,24.791    C179.097,69.95,142.544,65.896,139.141,65.136z M465.825,491.207C421.367,529.814,363.366,553.212,300,553.212    c-63.791,0-122.139-23.721-166.713-62.792c-21.292-5.292-39.661-7.213-51.655-7.879c5.404,6.442,11.101,12.692,17.117,18.709    c53.756,53.756,125.228,83.361,201.251,83.361c76.022,0,147.494-29.605,201.25-83.361c5.998-5.997,11.677-12.227,17.066-18.648    C506.371,483.356,487.96,485.475,465.825,491.207z"
            ></path>
            <path
              id="color_x5F_2"
              fill="#7ABE3A"
              d="M311.54,179.43c0,0,8.554-64.889,126.025-89.275    c85.351-17.718,106.477-38.859,106.477-38.859v68.393c0,0-22.838,6.619-55.958,8.291c-19.757,0.996-53.947,1.741-71.7,4.145    C336.003,143.009,311.54,179.43,311.54,179.43z M288.46,179.43c0,0-8.554-64.889-126.025-89.275    C77.084,72.438,55.959,51.297,55.959,51.297v68.393c0,0,22.838,6.619,55.958,8.291c19.757,0.996,53.957,1.664,71.7,4.145    C261.485,143.009,288.46,179.43,288.46,179.43z"
            ></path>
            <path
              id="color_x5F_1"
              fill="#017BC0"
              d="M576.56,455.888c-181.865-1.554-265.02,71.584-265.02,71.584V201.575    c0,0,28.874-52.747,134.574-52.747c105.699,0,153.886-27.585,153.886-27.585L576.56,455.888z M23.44,455.888    c181.865,0,265.02,71.584,265.02,71.584V201.575c0,0-28.874-52.747-134.574-52.747C48.186,148.828,0,121.243,0,121.243    L23.44,455.888z"
            ></path>
          </svg>
          <ul
            role="list"
            className="flex flex-col items-center justify-center gap-4 py-4 sm:flex-row sm:gap-8"
          >
            <li role="listitem">
              <Link to="/home" className="hover:text-cyan-500">
                Home
              </Link>
            </li>
            <li role="listitem">
              <Link to="/" className="hover:text-cyan-500">
                Features
              </Link>
            </li>
            <li role="listitem">
              <Link to="/" className="hover:text-cyan-500">
                Get started
              </Link>
            </li>
            <li role="listitem">
              <Link to="/contact-us" className="hover:text-cyan-500">
                Contact us
              </Link>
            </li>
          </ul>
          <div className="m-auto flex w-max items-center justify-between space-x-4">
            <a href="tel:+923481785857" aria-label="call">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="m-auto w-5"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                ></path>
              </svg>
            </a>
            <a
              href="mailto:abdurrahimkhan95710@mail.com"
              aria-label="send mail"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="m-auto w-5"
                viewBox="0 0 16 16"
              >
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"></path>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/pak.pakist"
              title="facebook"
              target="blank"
              aria-label="facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="m-auto w-5"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/abdur-rahim-7081ba1b5"
              title="linkedin"
              target="blank"
              aria-label="linkedin"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="m-auto w-5"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
              </svg>
            </a>
          </div>

          <div className="text-center">
            <span className="text-sm tracking-wide">
              Copyright © Notes Share <span id="year"></span> | All right
              reserved
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
