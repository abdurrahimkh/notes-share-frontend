import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/features/auth/authSlice";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isActive, user } = useSelector(state => state.auth);

  useEffect(() => {}, [isActive]);

  const handleSignOut = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <>
      <div className="navbar border-b ">
        <div className="navbar-start">
          <div className="dropdown">
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
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/user/login">
                  <i className="bi bi-box-arrow-in-right"></i>Login
                </NavLink>
              </li>
              <li>
                <NavLink to="/user/register">SignUp</NavLink>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Notes Share
          </Link>
        </div>
        {!user && (
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal space-x-3 ml-96">
              <li>
                <NavLink
                  to="/"
                  className=" px-5 rounded-lg py-2  font-bold text-sm hover:bg-blue-600 hover:text-white"
                >
                  <i className="bi bi-house"></i>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/user/login"
                  className="px-5 rounded-lg py-2  font-bold text-sm hover:bg-blue-600 hover:text-white"
                >
                  <i className="bi bi-box-arrow-in-right "></i>
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/user/register"
                  className="px-5 rounded-lg py-2  font-bold text-sm hover:bg-blue-600 hover:text-white"
                >
                  <i className="bi bi-person-plus"></i>
                  Signup
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact-us"
                  className="px-5 rounded-lg py-2  font-bold text-sm hover:bg-blue-600 hover:text-white"
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
              <div className="dropdown  mr-10">
                <label tabIndex="0">
                  <i className="btn btn-ghost bi bi-plus-square text-2xl"></i>
                </label>
                <ul
                  tabIndex="0"
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-40"
                >
                  <li>
                    <Link className="font-bold" to="/document/upload">
                      <i className="bi bi-file-earmark-arrow-up"></i>Upload
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="font-bold">
                      <i className="bi bi-question-square "></i>Ask
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="dropdown dropdown-end">
                <label
                  tabIndex="0"
                  className=" btn btn-ghost btn-circle avatar online"
                >
                  <div className="w-24 rounded-full ring ring-offset-2">
                    <img src={user.pic && user.pic} />
                  </div>
                </label>
                <ul
                  tabIndex="0"
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
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
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
