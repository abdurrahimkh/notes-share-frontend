import { useDispatch, useSelector } from "react-redux";
import {
  documentsNextPage,
  documentsPrevPage,
} from "../../../../redux/features/document/documentSlice";

const DocumentsPagination = () => {
  const dispatch = useDispatch();
  const { currentDocumentActivePage, filteredDocuments, showDocumentsPerPage } =
    useSelector(state => state.documents);

  return (
    <div className="btn-group m-2  justify-end ">
      <button
        className="btn btn-sm"
        disabled={currentDocumentActivePage <= 1}
        onClick={() => dispatch(documentsPrevPage())}
      >
        «
      </button>
      <button className="btn btn-sm">
        Page {currentDocumentActivePage} of{" "}
        {Math.ceil(filteredDocuments.length / showDocumentsPerPage)}
      </button>
      <button
        className="btn btn-sm"
        disabled={
          currentDocumentActivePage >=
          Math.ceil(filteredDocuments.length / showDocumentsPerPage)
        }
        onClick={() => dispatch(documentsNextPage())}
      >
        »
      </button>
    </div>
  );
};

export default DocumentsPagination;
