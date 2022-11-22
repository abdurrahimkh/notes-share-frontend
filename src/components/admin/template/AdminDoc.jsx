import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import React from "react";
import { useLocation } from "react-router-dom";

const AdminDoc = () => {
  const { state } = useLocation();
  const { url } = state;
  const docs = [{ uri: url }];
  return (
    <>
      <div className="min-w-screen min-h-screen">
        <DocViewer
          className=" min-h-screen"
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
    </>
  );
};

export default AdminDoc;
