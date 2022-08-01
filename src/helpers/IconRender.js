//Docuemnt Icons

export const iconRender = filetype => {
  if (filetype === "application/pdf") {
    return "https://cdn-icons-png.flaticon.com/512/337/337946.png";
  } else if (
    filetype ===
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  ) {
    return "https://cdn-icons-png.flaticon.com/512/337/337932.png";
  } else if (
    filetype ===
    "application/vnd.openxmlformats-officedocument.presentationml.presentation"
  ) {
    return "https://cdn-icons-png.flaticon.com/512/337/337949.png";
  } else {
    return "https://cdn-icons.flaticon.com/png/512/2504/premium/2504717.png?token=exp=1658663836~hmac=ba49db717d1c3dea9c3609f47978c1df";
  }
};
