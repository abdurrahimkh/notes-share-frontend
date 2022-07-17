import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const token = JSON.parse(localStorage.getItem("user"));
import { toast } from "react-hot-toast";

export const submitDocument = createAsyncThunk(
  "documents/upload-document",
  async uploadData => {
    const { document, title, subject, discription } = uploadData;
    const data = new FormData();
    data.append("file", document);
    data.append("upload_preset", "fyp-project");
    data.append("cloud_name", "fypproject07");
    try {
      if (document) {
        const res = await axios({
          method: "post",
          url: "https://api.cloudinary.com/v1_1/fypproject07/raw/upload",
          data,
        });
        const result = await res.data;
        const documentURL = result.secure_url;
        const size = result.bytes;
        if (documentURL) {
          const res1 = await fetch(
            "http://localhost:8000/api/documents/upload",
            {
              method: "post",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token.token}`,
              },
              body: JSON.stringify({
                title: uploadData.title,
                description: uploadData.description,
                subject: uploadData.subject,
                url: documentURL,
                filetype: uploadData.document.type,
                size,
              }),
            }
          );
          const resp2 = await res1.json();
          if (resp2.message) {
            toast.success("Posted");
          } else if (resp2.error) {
            toast.error(resp2.error);
          }
        }
      } else {
        toast.error("Error");
      }
    } catch (error) {
      console.log(error);
    }
  }
);
