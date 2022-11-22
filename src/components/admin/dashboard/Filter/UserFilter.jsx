import { useRef } from "react";
import { useDispatch } from "react-redux";
import { filteredUser } from "../../../../redux/features/document/documentSlice";

const UserFilter = () => {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const filterUser = () => {
    dispatch(filteredUser(inputRef.current.value));
  };
  return (
    <div className="relative flex  items-center">
      <input
        ref={inputRef}
        className="mt-3 h-12 rounded-md border px-2 focus:shadow-xl focus:outline-none md:w-[40rem]   "
        placeholder="Search user by Name | Username | Email | Creation Date"
        onChange={filterUser}
      />
      <i className="bi bi-search absolute right-[22rem] top-4 mt-2 hidden h-7  w-7 lg:block "></i>
    </div>
  );
};

export default UserFilter;
