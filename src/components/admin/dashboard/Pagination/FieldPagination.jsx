import { useDispatch, useSelector } from "react-redux";
import {
  FieldNextPage,
  FieldPrevPage,
} from "../../../../redux/features/document/documentSlice";

const FieldPagination = () => {
  const dispatch = useDispatch();
  const { currentFieldActivePage, filterFields, showFieldsPerPage } =
    useSelector(state => state.documents);

  return (
    <div className="btn-group m-2  justify-end ">
      <button
        className="btn btn-sm"
        disabled={currentFieldActivePage <= 1}
        onClick={() => dispatch(FieldPrevPage())}
      >
        «
      </button>
      <button className="btn btn-sm">
        Page {currentFieldActivePage} of{" "}
        {Math.ceil(filterFields.length / showFieldsPerPage)}
      </button>
      <button
        className="btn btn-sm"
        disabled={
          currentFieldActivePage >=
          Math.ceil(filterFields.length / showFieldsPerPage)
        }
        onClick={() => dispatch(FieldNextPage())}
      >
        »
      </button>
    </div>
  );
};

export default FieldPagination;
