import AdminAvatar from "../../../assets/images/Admin_Pic.png";
import { SearchIcon, LogoutIcon, BellIcon } from "@heroicons/react/outline";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { logout } from "../../../redux/features/auth/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navBarHeight = 71;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <nav
      className="flex items-center space-x-4 shadow bg-white  w-full px-5 absolute"
      style={{ height: navBarHeight }}
    >
      <div className="hidden md:inline-flex flex-1">
        <input
          type="text"
          className="lg:w-1/3 pl-2 border border-r-0 border-gray-300 rounded-none rounded-l-md font-light focus:ring-0 focus:border-indigo-500"
          placeholder="Search..."
        />
        <button className="px-3 rounded-none rounded-r-md bg-indigo-600 hover:bg-indigo-700 text-indigo-200 focus:outline-none">
          <SearchIcon className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 md:flex-none"></div>

      <a href="#" className="relative text-gray-500 hover:text-gray-800">
        <span className="absolute top-0 right-0 w-2 h-2 bg-red-600 rounded-full"></span>
        <span className="absolute top-0 right-0 flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
        </span>
        <BellIcon className="w-6 h-6" />
      </a>

      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center w-full items-center text-gray-500 hover:text-gray-800 focus:outline-none">
            <img className="rounded-full w-8 h-8" src={AdminAvatar} alt="" />
            <span className="font-medium ml-3 mr-1">Admin</span>
            <ChevronDownIcon className="w-5 h-5" aria-hidden="true" />
          </Menu.Button>
        </div>
        <Transition as={Fragment}>
          <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={handleLogout}
                    className={`${
                      active ? "bg-indigo-600 text-white" : "text-gray-900"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    <LogoutIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                    Sign out
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </nav>
  );
};

export default NavBar;
