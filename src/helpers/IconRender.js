import PDF from "../assets/icons/pdf.png";
import DOC from "../assets/icons/doc.png";
import PPT from "../assets/icons/ppt.png";
import FILE from "../assets/icons/file.png";
//Docuemnt Icons

export const iconRender = filetype => {
  if (filetype === "application/pdf") {
    return PDF;
  } else if (
    filetype ===
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  ) {
    return DOC;
  } else if (
    filetype ===
    "application/vnd.openxmlformats-officedocument.presentationml.presentation"
  ) {
    return PPT;
  } else {
    return FILE;
  }
};
