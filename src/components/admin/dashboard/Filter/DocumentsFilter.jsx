import { useRef } from "react";
import { useDispatch } from "react-redux";
import { filteredDocuments } from "../../../../redux/features/document/documentSlice";

const DocumentsFilter = () => {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const filterDoc = () => {
    dispatch(filteredDocuments(inputRef.current.value));
  };
  return (
    <div className="relative flex  items-center">
      <input
        ref={inputRef}
        className="mt-3 h-12 rounded-md border px-2 focus:shadow-xl focus:outline-none md:w-[40rem]   "
        placeholder="Filter document by Title | Subject | User | Status"
        onChange={filterDoc}
      />
      <i className="bi bi-search absolute right-[22rem] top-4 mt-2 hidden h-7  w-7 lg:block "></i>
    </div>
  );
};

export default DocumentsFilter;
