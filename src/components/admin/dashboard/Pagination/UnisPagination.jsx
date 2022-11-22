import { useDispatch, useSelector } from "react-redux";
import {
  UniNextPage,
  UniPrevPage,
} from "../../../../redux/features/document/documentSlice";

const UnisPagination = () => {
  const dispatch = useDispatch();
  const { currentUniActivePage, filterUniversities, showUnisPerPage } =
    useSelector(state => state.documents);

  return (
    <div className="btn-group m-2  justify-end ">
      <button
        className="btn btn-sm"
        disabled={currentUniActivePage <= 1}
        onClick={() => dispatch(UniPrevPage())}
      >
        «
      </button>
      <button className="btn btn-sm">
        Page {currentUniActivePage} of
        {Math.ceil(filterUniversities.length / showUnisPerPage)}
      </button>
      <button
        className="btn btn-sm"
        disabled={
          currentUniActivePage >=
          Math.ceil(filterUniversities.length / showUnisPerPage)
        }
        onClick={() => dispatch(UniNextPage())}
      >
        »
      </button>
    </div>
  );
};

export default UnisPagination;
