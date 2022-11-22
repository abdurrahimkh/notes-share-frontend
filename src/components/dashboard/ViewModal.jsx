import React, { useMemo } from "react";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import "@smastrom/react-rating/style.css";
const ViewModal = ({ url }) => {
  const docs = [{ uri: url }];

  const viewMemo = useMemo(
    () => (
      <>
        <input type="checkbox" id="view-model" className="modal-toggle" />
        <div className="modal md:w-[80rem]">
          <div className="modal-action">
            <label
              for="view-model"
              className="absolute right-[5.3rem] top-3 z-20 hover:cursor-pointer"
            >
              <i className="bi bi-x-circle-fill text-xl"></i>
            </label>
          </div>
          <div className="modal-box md:min-h-[40rem] md:min-w-[70rem]">
            <DocViewer
              className=" md:min-h-[37rem]"
              pluginRenderers={DocViewerRenderers}
              documents={docs}
              config={{
                header: {
                  disableFileName: true,
                  disableHeader: true,
                  retainURLParams: true,
                },
              }}
            />
          </div>
        </div>
      </>
    ),
    []
  );
  return <>{viewMemo}</>;
};

export default ViewModal;
