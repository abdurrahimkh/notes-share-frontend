import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/features/auth/authSlice";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isActive, user } = useSelector(state => state.auth);
  const [open, setOpen] = useState(false);

  useEffect(() => {}, [isActive]);

  const handleSignOut = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <>
      <div className="navbar bg-white shadow-md ">
        <div className="navbar-start">
          <div onClick={() => setOpen(prev => !prev)} className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            {open && (
              <ul
                tabIndex="0"
                className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
              >
                <li>
                  <NavLink to="/">
                    <i className="bi bi-house"></i>Home
                  </NavLink>
                </li>
                {!user && (
                  <>
                    <li>
                      <NavLink to="/user/login">
                        <i className="bi bi-box-arrow-in-right"></i>Login
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/user/register">
                        <i className="bi bi-person-plus"></i>SignUp
                      </NavLink>
                    </li>{" "}
                  </>
                )}
                <li>
                  <NavLink to="/contact-us">
                    <i className="bi bi-envelope"></i>Contact Us
                  </NavLink>
                </li>
              </ul>
            )}
          </div>
          <Link to="/home" className="btn btn-ghost text-xl normal-case">
            <svg
              className="mr-2 hidden h-12 md:block"
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
            Notes Share
          </Link>
        </div>
        {!user && (
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal ml-96 space-x-3">
              <li>
                <NavLink
                  to="/"
                  className=" rounded-lg  px-5 py-2  text-sm font-bold hover:bg-blue-600 hover:text-white"
                >
                  <i className="bi bi-house"></i>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/user/login"
                  className="rounded-lg  px-5 py-2  text-sm font-bold hover:bg-blue-600 hover:text-white"
                >
                  <i className="bi bi-box-arrow-in-right "></i>
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/user/register"
                  className="rounded-lg  px-5 py-2  text-sm font-bold hover:bg-blue-600 hover:text-white"
                >
                  <i className="bi bi-person-plus"></i>
                  Signup
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact-us"
                  className="rounded-lg  px-5 py-2  text-sm font-bold hover:bg-blue-600 hover:text-white"
                >
                  <i className="bi bi-envelope"></i>
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        )}
        <div className="navbar-end mr-3">
          {user && (
            <>
              <div
                className="dropdown  mr-14"
                onClick={() => setOpen(prev => !prev)}
              >
                <label tabIndex="0">
                  <i className="bi bi-plus-square btn btn-ghost text-2xl"></i>
                </label>
                {open && (
                  <ul
                    tabIndex="0"
                    className="dropdown-content menu rounded-box menu-compact mt-3 w-44 bg-base-100 p-2 shadow"
                  >
                    <li>
                      <Link to="/document/upload">
                        <span className="  tracking-wide">Upload Document</span>
                      </Link>
                    </li>
                    <hr />
                    <li>
                      <Link to="/questions/ask">
                        <span className="  tracking-wide">Ask Question</span>
                      </Link>
                    </li>
                  </ul>
                )}
              </div>

              <div
                onClick={() => setOpen(prev => !prev)}
                className="dropdown dropdown-end "
              >
                <label tabIndex="0" className=" mt-1  flex ">
                  <img
                    className=" relative h-10 w-10 rounded-full object-cover "
                    src={user?.pic}
                    alt="activeuser_profilepic"
                  />
                  <div className="z-2 absolute left-7 top-0 my-1 h-3 w-3 rounded-full border-2 border-white bg-green-400"></div>

                  <p className="ml-2 hidden text-left text-xs sm:block">
                    <strong className="block font-medium">{user?.name}</strong>

                    <span className="text-gray-500"> {user?.email} </span>
                  </p>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-4 mt-2 hidden h-5 w-5 text-gray-500 transition group-hover:text-gray-700 sm:block"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </label>
                {open && (
                  <ul
                    tabIndex="0"
                    className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
                  >
                    <li>
                      <Link to={`dashboard/user/profile/${user._id}`}>
                        <i className="bi bi-person-square"></i>Profile
                      </Link>
                    </li>
                    <li>
                      <Link to="/profile/settings">
                        <i className="bi bi-gear"></i>Settings
                      </Link>
                    </li>
                    <li>
                      <button onClick={() => handleSignOut()}>
                        <i className="bi bi-box-arrow-right"></i>Logout
                      </button>
                    </li>
                  </ul>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
