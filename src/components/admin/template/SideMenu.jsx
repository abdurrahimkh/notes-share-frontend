import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/features/auth/authSlice";

function Header(props) {
  const headerHeight = "72px";

  return (
    <div
      className="flex items-center justify-center border-b border-gray-900 lg:justify-start lg:space-x-3 lg:px-3"
      style={{ height: headerHeight }}
    >
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="40px"
        height="40px"
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
      <h2 className="hidden text-2xl font-semibold text-white lg:inline">
        {props.title}
      </h2>
    </div>
  );
}

function MenuItem(props) {
  let activeClass =
    " text-gray-400 lg:rounded-md hover:text-white hover:bg-gray-700";

  if (props.active) {
    activeClass = " lg:rounded-md text-white bg-gray-900";
  }

  return (
    <Link
      to={props.to}
      replace
      className={
        "flex items-center justify-center space-x-4 truncate py-4 lg:mx-2 lg:justify-start lg:py-2 lg:px-3 " +
        activeClass
      }
    >
      {props.children}
      <span className="hidden lg:inline">{props.title}</span>
    </Link>
  );
}

function SideMenu(props) {
  const location = useLocation();
  const dispatch = useDispatch();
  return (
    <div className="h-screen overflow-y-auto bg-gray-800">
      <Header title="Admin" />
      <ul className="lg:mt-2 lg:space-y-2">
        <MenuItem
          to="/admin/users"
          title="Users"
          active={location.pathname === "/admin/users"}
        >
          <i className="bi bi-people text-2xl"></i>
        </MenuItem>
        <MenuItem
          to="/admin/documents"
          title="Documents"
          active={location.pathname === "/admin/documents"}
        >
          <i className="bi bi-file-earmark-break text-2xl"></i>
        </MenuItem>
        <MenuItem
          to="/admin/values"
          title="Values"
          active={location.pathname === "/admin/values"}
        >
          <i className="bi bi-filter-circle text-2xl"></i>
        </MenuItem>
        <MenuItem
          to="/admin/settings"
          title="Settings"
          active={location.pathname === "/admin/settings"}
        >
          <i className="bi bi-gear text-2xl"></i>
        </MenuItem>
        <div
          onClick={() => dispatch(logout())}
          className="flex items-center justify-center space-x-4 truncate py-4 text-gray-400 hover:cursor-pointer hover:bg-gray-700 hover:text-white lg:mx-2 lg:justify-start lg:rounded-md lg:py-2 lg:px-3"
        >
          <i className="bi bi-box-arrow-right text-2xl"></i>
          <span className="hidden lg:inline">Logout</span>
        </div>
      </ul>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  active: PropTypes.bool,
};

SideMenu.MenuItem = MenuItem;
SideMenu.Header = Header;

export default SideMenu;
