import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-hot-toast";

export const submitDocument = createAsyncThunk(
  "documents/upload-document",
  async (uploadData, { getState }) => {
    const token = getState().auth.user.token;
    try {
      const res1 = await fetch(
        "https://notes-share-server.herokuapp.com/api/documents/upload",
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(uploadData),
        }
      );
      const resp2 = await res1.json();
      if (resp2.message) {
        toast.success("Posted .... wait for admin approvel ", {
          duration: 3000,
        });
        return resp2;
      } else if (resp2.error) {
        toast.error(resp2.error);
      } else {
        toast.error("Error");
      }
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteDocument = createAsyncThunk(
  "documents/delete-document",
  async id => {
    try {
      const res = await axios.delete(
        `https://notes-share-server.herokuapp.com/api/documents/delete/${id}`
      );
      return res.data;
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }
);

export const fetchDocuments = createAsyncThunk(
  "documents/fetch-documents",
  async () => {
    try {
      const res = await axios.get(
        "https://notes-share-server.herokuapp.com/api/documents/documents"
      );
      if (res.data) {
        return res.data;
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }
);

export const approve = createAsyncThunk(
  "documents/approve",
  async (id, { getState }) => {
    const token = getState().auth.user.token;
    try {
      const res = await fetch(
        `https://notes-share-server.herokuapp.com/api/documents/approve/${id}`,
        {
          method: "post",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = await res.json();

      if (result) {
        return result;
      }
    } catch (error) {
      console.log(error);
    }
  }
);

export const reject = createAsyncThunk(
  "documents/reject",
  async (id, { getState }) => {
    const token = getState().auth.user.token;

    try {
      const res = await fetch(
        `https://notes-share-server.herokuapp.com/api/documents/reject/${id}`,
        {
          method: "post",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = await res.json();

      if (result) {
        return result;
      }
    } catch (error) {
      console.log(error);
    }
  }
);

export const allUsers = createAsyncThunk(
  "documents/users",
  async adminToken => {
    try {
      const res = await fetch(
        "https://notes-share-server.herokuapp.com/api/users/allusers",
        {
          method: "get",
          headers: {
            Authorization: `Bearer ${adminToken}`,
          },
        }
      );
      const result = await res.json();
      if (result) {
        return result;
      }
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteUser = createAsyncThunk(
  "documents/deleteuser",
  async (id, { getState }) => {
    const token = getState().auth.user.token;
    try {
      const res = await fetch(
        `https://notes-share-server.herokuapp.com/api/admin/delete/user/${id}`,
        {
          method: "delete",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = await res.json();
      if (result) {
        return result;
      }
    } catch (error) {
      console.log(error);
    }
  }
);

export const approvedDocuments = createAsyncThunk(
  "documents/approved",
  async () => {
    try {
      const res = await fetch(
        "https://notes-share-server.herokuapp.com/api/documents/approved",
        {
          method: "get",
        }
      );
      const result = await res.json();

      if (result) {
        return result;
      }
    } catch (error) {
      console.log(error);
    }
  }
);

export const recentDocuments = createAsyncThunk(
  "documents/recent",
  async () => {
    try {
      const res = await fetch(
        "https://notes-share-server.herokuapp.com/api/documents/recent",
        {
          method: "get",
        }
      );
      const result = await res.json();

      if (result) {
        return result;
      }
    } catch (error) {
      console.log(error);
    }
  }
);

export const addRating = createAsyncThunk(
  "documents/add-rating",
  async (data, { getState }) => {
    console.log(data);
    const token = getState().auth.user.token;
    try {
      const res = await axios.post(
        "https://notes-share-server.herokuapp.com/api/documents/document/review",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.data) {
        toast.success("Rating Submitted");
        return res.data;
      }
    } catch (error) {
      console.log(error);
    }
  }
);

export const getFields = createAsyncThunk("documents/get-fields", async () => {
  try {
    const result = await axios({
      method: "get",
      url: "https://notes-share-server.herokuapp.com/api/values/all",
    });
    if (result) {
      return result.data;
    }
  } catch (error) {
    console.log(error);
  }
});

export const getUniversities = createAsyncThunk(
  "documents/get-unis",
  async () => {
    try {
      const result = await axios({
        method: "get",
        url: "https://notes-share-server.herokuapp.com/api/universities/all",
      });
      if (result) {
        return result.data;
      }
    } catch (error) {
      console.log(error);
    }
  }
);

export const addUniversity = createAsyncThunk(
  "documents/add-uni",
  async data => {
    try {
      console.log(data);
      const result = await axios({
        method: "put",
        url: "https://notes-share-server.herokuapp.com/api/universities/adduni",
        data,
      });
      if (result.data) {
        if (result.data.error) {
          toast.error(result.data.error);
        } else {
          return result.data;
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
);

export const addFieldOfStudy = createAsyncThunk(
  "documents/add-field",
  async data => {
    try {
      const result = await axios({
        method: "post",
        url: "https://notes-share-server.herokuapp.com/api/values/addfield",
        data,
      });
      if (result.data) {
        if (result.data.error) {
          toast.error(result.data.error);
        } else {
          return result.data;
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
);

export const addSubject = createAsyncThunk(
  "documents/add-subject",
  async data => {
    try {
      const result = await axios({
        method: "post",
        url: "https://notes-share-server.herokuapp.com/api/values/addsubject",
        data,
      });
      if (result.data) {
        if (result.data.error) {
          toast.error(result.data.error);
        } else {
          toast.success("subject added");
        }
        return result.data;
      }
    } catch (error) {
      console.log(error);
    }
  }
);
export const deleteSubject = createAsyncThunk(
  "documents/delete-subject",
  async data => {
    try {
      const result = await axios({
        method: "delete",
        url: "https://notes-share-server.herokuapp.com/api/values/deletesubject",
        data,
      });
      if (result.data) {
        toast.success("Delete Success");
        return result.data;
      }
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteUni = createAsyncThunk(
  "documents/delete-uni",
  async data => {
    try {
      const result = await axios({
        method: "delete",
        url: "https://notes-share-server.herokuapp.com/api/universities/deleteuni",
        data,
      });
      if (result.data) {
        toast.success("Delete Success");
        return result.data;
      }
    } catch (error) {
      console.log(error);
    }
  }
);
export const deleteField = createAsyncThunk(
  "documents/delete-field",
  async data => {
    try {
      const result = await axios({
        method: "delete",
        url: "https://notes-share-server.herokuapp.com/api/values/deletefield",
        data,
      });
      if (result.data) {
        toast.success("Delete Success");
        return result.data;
      }
    } catch (error) {
      console.log(error);
    }
  }
);

export const documentDetails = createAsyncThunk(
  "documents/each-document",
  async id => {
    try {
      const res = await axios.get(
        `https://notes-share-server.herokuapp.com/api/documents/document/${id}`
      );
      if (res.data) {
        return res.data;
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }
);

export const addComment = createAsyncThunk(
  "documents/add-comment",
  async (commentData, { getState }) => {
    const token = getState().auth.user.token;
    try {
      const res = await axios.put(
        "https://notes-share-server.herokuapp.com/api/documents/document/comments",
        commentData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.data) {
        toast.success("Your comment was submitted");
        return res.data;
      }
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteComment = createAsyncThunk(
  "documents/delete-comment",
  async (commentData, { getState }) => {
    const token = getState().auth.user.token;
    try {
      const res = await axios({
        method: "delete",
        url: "https://notes-share-server.herokuapp.com/api/documents/document/comments",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: commentData,
      });

      if (res.data) {
        toast.success("Comment deleted");
        return res.data;
      }
    } catch (error) {
      console.log(error);
    }
  }
);
