import QuickStackCard from "./QuickStackCard";
import DocumentsTable from "./DocumentsTable";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDocuments } from "../../../redux/features/document/documentAction";
import SideMenu from "../template/SideMenu";
import DocumentsFilter from "./Filter/DocumentsFilter";
import { documentsPagination } from "../../../redux/features/document/documentSlice";
import LoaderSm from "../../loader/LoaderSm";

const Documents = () => {
  const dispatch = useDispatch();
  const { filteredDocuments, documents, isLoading } = useSelector(
    state => state.documents
  );
  const pending =
    documents && documents.filter(doc => doc.status === "pending").length;
  const rejected =
    documents && documents.filter(doc => doc.status === "rejected").length;
  const approved =
    documents && documents.filter(doc => doc.status === "approved").length;

  useEffect(() => {
    dispatch(fetchDocuments()).then(() => dispatch(documentsPagination()));
  }, [dispatch]);

  return (
    <div className="grid h-full grid-cols-6 gap-0 md:grid-cols-10">
      <div className="col-span-1 md:col-span-1 lg:col-span-2">
        <SideMenu />
      </div>
      <div className="col-span-5 h-full md:col-span-9 lg:col-span-8">
        <div className="relative">
          <div className="flex h-screen flex-col overflow-y-auto">
            <div className="flex-shrink-0 p-5">
              <div className="flex flex-col space-y-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <QuickStackCard
                    title="Total Documents"
                    statics={filteredDocuments && filteredDocuments.length}
                  >
                    <i className="bi bi-journals text-4xl"></i>
                  </QuickStackCard>
                  <QuickStackCard title="Pending" statics={pending}>
                    <i className="bi bi-hourglass text-4xl"></i>
                  </QuickStackCard>
                  <QuickStackCard title="Approved" statics={approved}>
                    <i className="bi bi-check2-circle text-4xl"></i>
                  </QuickStackCard>
                  <QuickStackCard title="Rejected" statics={rejected}>
                    <i className="bi bi-x-circle text-4xl"></i>
                  </QuickStackCard>
                </div>
                <DocumentsFilter />
                <div>
                  {isLoading ? (
                    <div className="flex h-[50vh]   items-center justify-center">
                      <LoaderSm />
                    </div>
                  ) : (
                    <DocumentsTable />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents;
