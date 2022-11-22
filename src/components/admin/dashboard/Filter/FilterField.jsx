import { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  FieldPagination,
  filteredField,
} from "../../../../redux/features/document/documentSlice";
const FilterField = () => {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const filterField = () => {
    dispatch(filteredField(inputRef.current.value));
  };
  useEffect(() => {
    if (inputRef.current.value === "") {
      dispatch(FieldPagination());
    }
  }, [inputRef.current?.value]);
  return (
    <div className="relative flex  items-center">
      <input
        ref={inputRef}
        className="mt-3 h-[35px] rounded-md border px-2 focus:outline-blue-500 md:w-[40rem]   "
        placeholder="Search field of study"
        onChange={filterField}
      />
      <i className="bi bi-search absolute right-[21rem] top-2 mt-2  h-7 w-7 "></i>
    </div>
  );
};

export default FilterField;
