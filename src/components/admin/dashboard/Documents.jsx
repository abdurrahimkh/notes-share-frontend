import QuickStackCard from "./QuickStackCard";
import { DocumentDuplicateIcon } from "@heroicons/react/outline";
import DocumentsTable from "./DocumentsTable";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDocuments } from "../../../redux/features/document/documentAction";
import SideMenu from "../template/SideMenu";
import NavBar from "../template/NavBar";
const Documents = () => {
  console.log("Documents Renderd");
  const iconClass = "w-10 h-10 text-gray-400";
  const dispatch = useDispatch();
  const documents = useSelector(state => state.documents.documents);
  const pending =
    documents && documents.filter(doc => doc.status === "pending").length;
  const rejected =
    documents && documents.filter(doc => doc.status === "rejected").length;
  const approved =
    documents && documents.filter(doc => doc.status === "approved").length;

  useEffect(() => {
    dispatch(fetchDocuments());
  }, [dispatch]);

  return (
    <div className="grid grid-cols-6 md:grid-cols-10 gap-0 h-full">
      <div className="col-span-1 md:col-span-1 lg:col-span-2">
        <SideMenu />
      </div>
      <div className="col-span-5 md:col-span-9 lg:col-span-8 h-full">
        <div className="relative">
          <NavBar />
          <div className="overflow-y-auto h-screen flex flex-col">
            <div className="flex-shrink-0 p-5" style={{ marginTop: 72 }}>
              <div className="flex flex-col space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <QuickStackCard
                    title="Total Documents"
                    statics={documents && documents.length}
                  >
                    <DocumentDuplicateIcon className={iconClass} />
                  </QuickStackCard>
                  <QuickStackCard title="Pending" statics={pending}>
                    <DocumentDuplicateIcon className={iconClass} />
                  </QuickStackCard>
                  <QuickStackCard title="Approved" statics={approved}>
                    <DocumentDuplicateIcon className={iconClass} />
                  </QuickStackCard>
                  <QuickStackCard title="Rejected" statics={rejected}>
                    <DocumentDuplicateIcon className={iconClass} />
                  </QuickStackCard>
                </div>
                <div>
                  <DocumentsTable />
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
