import { useEffect } from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import {
  filteredUni,
  UniPagination,
} from "../../../../redux/features/document/documentSlice";

const FilterUni = () => {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const filterUniversity = () => {
    dispatch(filteredUni(inputRef.current.value));
  };
  useEffect(() => {
    if (inputRef.current.value === "") {
      dispatch(UniPagination());
    }
  }, [inputRef.current?.value]);

  return (
    <div className="relative flex  items-center">
      <input
        ref={inputRef}
        className="mt-3 h-[35px] rounded-md border px-2  focus:outline-blue-500 md:w-[40rem]   "
        placeholder="Search University"
        onChange={filterUniversity}
      />
      <i className="bi bi-search absolute right-[21rem] top-2 mt-2  h-7 w-7 "></i>
    </div>
  );
};

export default FilterUni;
