import { createSlice } from "@reduxjs/toolkit";
import {
  allUsers,
  approve,
  approvedDocuments,
  deleteUser,
  fetchDocuments,
  getValues,
  likeDocument,
  reject,
  submitDocument,
} from "./documentAction";

const initialState = {
  documents: [],
  users: [],
  approved: [],
  values: [],
  isLoading: false,
};

const documentSlice = createSlice({
  name: "documents",
  initialState,
  reducers: {},
  extraReducers: {
    [submitDocument.pending]: state => {
      state.isLoading = true;
    },
    [submitDocument.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [submitDocument.rejected]: state => {
      state.isLoading = false;
    },
    [fetchDocuments.pending]: state => {
      state.isLoading = true;
    },
    [fetchDocuments.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.documents = action.payload;
    },
    [fetchDocuments.rejected]: state => {
      state.isLoading = false;
    },
    [approve.pending]: state => {
      state.isLoading = true;
    },
    [approve.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log(action.payload);
      state.documents.map(doc => {
        if (doc._id === action.payload._id) {
          doc.status = action.payload.status;
        }
      });
    },
    [approve.rejected]: state => {
      state.isLoading = false;
    },
    [reject.pending]: state => {
      state.isLoading = true;
    },
    [reject.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log(action.payload);
      state.documents.map(doc => {
        if (doc._id === action.payload._id) {
          doc.status = action.payload.status;
        }
      });
    },
    [reject.rejected]: state => {
      state.isLoading = false;
    },
    [allUsers.pending]: state => {
      state.isLoading = true;
    },
    [allUsers.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log(action.payload);
      state.users = action.payload;
    },
    [allUsers.rejected]: state => {
      state.isLoading = false;
    },
    [deleteUser.pending]: state => {
      state.isLoading = true;
    },
    [deleteUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log(action.payload);
      state.users.splice(
        state.users.findIndex(user => user._id === action.payload._id),
        1
      );
    },
    [deleteUser.rejected]: state => {
      state.isLoading = false;
    },
    [approvedDocuments.pending]: state => {
      state.isLoading = true;
    },
    [approvedDocuments.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.approved = action.payload;
    },
    [approvedDocuments.rejected]: state => {
      state.isLoading = false;
    },
    [likeDocument.pending]: state => {
      state.isLoading = true;
    },
    [likeDocument.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log(state);
      // state.approved.map(doc => {
      //   if (!doc.likes.includes(action.payload._id)) {
      //     doc.likes.push(action.payload._id);
      //   }
      // });
    },
    [likeDocument.rejected]: state => {
      state.isLoading = false;
    },
    [getValues.pending]: state => {
      state.isLoading = true;
    },
    [getValues.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.values = action.payload;
    },
    [getValues.rejected]: state => {
      state.isLoading = false;
    },
  },
});

export const {} = documentSlice.actions;

export default documentSlice.reducer;
