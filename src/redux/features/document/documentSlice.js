import { createSlice } from "@reduxjs/toolkit";
import {
  addComment,
  addFieldOfStudy,
  addRating,
  addSubject,
  addUniversity,
  allUsers,
  approve,
  approvedDocuments,
  deleteComment,
  deleteDocument,
  deleteField,
  deleteSubject,
  deleteUni,
  deleteUser,
  documentDetails,
  fetchDocuments,
  getFields,
  getUniversities,
  recentDocuments,
  reject,
  submitDocument,
} from "./documentAction";

const initialState = {
  documents: [],
  approved: [],
  recentDocuments: [],
  eachDocument: {},
  filteredDocuments: [],
  users: [],
  allUsers: [],
  filterUsers: [],
  fields: [],
  filterFields: [],
  subjects: [],
  universities: [],
  filterUniversities: [],
  currentUserActivePage: 1,
  showUsersPerPage: 5,
  currentDocumentActivePage: 1,
  showDocumentsPerPage: 5,
  currentUniActivePage: 1,
  showUnisPerPage: 10,
  currentFieldActivePage: 1,
  showFieldsPerPage: 10,
  isLoading: false,
  approveLoading: false,
  rejectLoading: false,
  deleteLoading: false,
  uniLoading: false,
  deleteUserLoading: false,
  commentLoading: false,
  rateLoading: false,
};

const documentSlice = createSlice({
  name: "documents",
  initialState,
  reducers: {
    like: (state, action) => {
      state.approved.find(doc => {
        if (doc._id === action.payload.docId) {
          if (!doc.likes.includes(action.payload.userId)) {
            doc.likes.push(action.payload.userId);
          }
        }
      });
    },
    filteredDocuments: (state, action) => {
      state.documents = state.filteredDocuments.filter(
        doc =>
          doc.title.toLowerCase().includes(action.payload.toLowerCase()) ||
          doc.subject.toLowerCase().includes(action.payload.toLowerCase()) ||
          doc.field.toLowerCase().includes(action.payload.toLowerCase()) ||
          doc.postedBy.name
            .toLowerCase()
            .includes(action.payload.toLowerCase()) ||
          doc.status.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    filteredUser: (state, action) => {
      state.users = state.filterUsers.filter(
        user =>
          user.name.toLowerCase().includes(action.payload.toLowerCase()) ||
          user.email.toLowerCase().includes(action.payload.toLowerCase()) ||
          user.username.toLowerCase().includes(action.payload.toLowerCase()) ||
          user.createdAt.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    filteredUni: (state, action) => {
      state.universities = state.filterUniversities.filter(uni =>
        uni.label.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    filteredField: (state, action) => {
      state.fields = state.filterFields.filter(field =>
        field.label.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    userPagination: state => {
      const indexOfLastUser =
        state.currentUserActivePage * state.showUsersPerPage;
      const indexOfFirstUser = indexOfLastUser - state.showUsersPerPage;
      state.users = state.users.slice(indexOfFirstUser, indexOfLastUser);
    },
    usersNextPage: state => {
      state.currentUserActivePage = state.currentUserActivePage + 1;
      const indexOfLastUser =
        state.currentUserActivePage * state.showUsersPerPage;
      const indexOfFirstUser = indexOfLastUser - state.showUsersPerPage;
      state.users = state.allUsers.slice(indexOfFirstUser, indexOfLastUser);
    },
    userPrevPage: state => {
      state.currentUserActivePage = state.currentUserActivePage - 1;
      const indexOfLastUser =
        state.currentUserActivePage * state.showUsersPerPage;
      const indexOfFirstUser = indexOfLastUser - state.showUsersPerPage;
      state.users = state.allUsers.slice(indexOfFirstUser, indexOfLastUser);
    },
    documentsPagination: state => {
      const indexOfLastDocument =
        state.currentDocumentActivePage * state.showDocumentsPerPage;
      const indexOfFirstDocument =
        indexOfLastDocument - state.showDocumentsPerPage;
      state.documents = state.documents.slice(
        indexOfFirstDocument,
        indexOfLastDocument
      );
    },
    documentsNextPage: state => {
      state.currentDocumentActivePage = state.currentDocumentActivePage + 1;
      const indexOfLastDocument =
        state.currentDocumentActivePage * state.showDocumentsPerPage;
      const indexOfFirstDocument =
        indexOfLastDocument - state.showDocumentsPerPage;
      state.documents = state.filteredDocuments.slice(
        indexOfFirstDocument,
        indexOfLastDocument
      );
    },
    documentsPrevPage: state => {
      state.currentDocumentActivePage = state.currentDocumentActivePage - 1;
      const indexOfLastDocument =
        state.currentDocumentActivePage * state.showDocumentsPerPage;
      const indexOfFirstDocument =
        indexOfLastDocument - state.showDocumentsPerPage;
      state.documents = state.filteredDocuments.slice(
        indexOfFirstDocument,
        indexOfLastDocument
      );
    },
    UniPagination: state => {
      const indexOfLastUni = state.currentUniActivePage * state.showUnisPerPage;
      const indexOfFirstUni = indexOfLastUni - state.showUnisPerPage;
      state.universities = state.universities.slice(
        indexOfFirstUni,
        indexOfLastUni
      );
    },
    UniNextPage: state => {
      state.currentUniActivePage = state.currentUniActivePage + 1;
      const indexOfLastUni = state.currentUniActivePage * state.showUnisPerPage;
      const indexOfFirstUni = indexOfLastUni - state.showUnisPerPage;
      state.universities = state.filterUniversities.slice(
        indexOfFirstUni,
        indexOfLastUni
      );
    },
    UniPrevPage: state => {
      state.currentUniActivePage = state.currentUniActivePage - 1;
      const indexOfLastUni = state.currentUniActivePage * state.showUnisPerPage;
      const indexOfFirstUni = indexOfLastUni - state.showUnisPerPage;
      state.universities = state.filterUniversities.slice(
        indexOfFirstUni,
        indexOfLastUni
      );
    },
    FieldPagination: state => {
      const indexOfLastField =
        state.currentFieldActivePage * state.showFieldsPerPage;
      const indexOfFirstField = indexOfLastField - state.showFieldsPerPage;
      state.fields = state.fields.slice(indexOfFirstField, indexOfLastField);
    },
    FieldNextPage: state => {
      state.currentFieldActivePage = state.currentFieldActivePage + 1;
      const indexOfLastField =
        state.currentFieldActivePage * state.showFieldsPerPage;
      const indexOfFirstField = indexOfLastField - state.showFieldsPerPage;
      state.fields = state.filterFields.slice(
        indexOfFirstField,
        indexOfLastField
      );
    },
    FieldPrevPage: state => {
      state.currentFieldActivePage = state.currentFieldActivePage - 1;
      const indexOfLastField =
        state.currentFieldActivePage * state.showFieldsPerPage;
      const indexOfFirstField = indexOfLastField - state.showFieldsPerPage;
      state.fields = state.filterFields.slice(
        indexOfFirstField,
        indexOfLastField
      );
    },
  },
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
      state.filteredDocuments = action.payload;
    },
    [fetchDocuments.rejected]: state => {
      state.isLoading = false;
    },
    [approve.pending]: state => {
      state.approveLoading = true;
    },
    [approve.fulfilled]: (state, action) => {
      state.approveLoading = false;
      state.documents.map(doc => {
        if (doc._id === action.payload._id) {
          doc.status = action.payload.status;
        }
      });
    },
    [approve.rejected]: state => {
      state.approveLoading = false;
    },
    [reject.pending]: state => {
      state.rejectLoading = true;
    },
    [reject.fulfilled]: (state, action) => {
      state.rejectLoading = false;
      state.documents.map(doc => {
        if (doc._id === action.payload._id) {
          doc.status = action.payload.status;
        }
      });
    },
    [reject.rejected]: state => {
      state.rejectLoading = false;
    },
    [allUsers.pending]: state => {
      state.isLoading = true;
    },
    [allUsers.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
      state.filterUsers = action.payload;
      state.allUsers = action.payload;
    },
    [allUsers.rejected]: state => {
      state.isLoading = false;
    },
    [deleteUser.pending]: state => {
      state.deleteUserLoading = true;
    },
    [deleteUser.fulfilled]: (state, action) => {
      state.deleteUserLoading = false;
      state.users.splice(
        state.users.findIndex(user => user._id === action.payload._id),
        1
      );
    },
    [deleteUser.rejected]: state => {
      state.deleteUserLoading = false;
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
    [recentDocuments.pending]: state => {
      state.isLoading = true;
    },
    [recentDocuments.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.recentDocuments = action.payload;
    },
    [recentDocuments.rejected]: state => {
      state.isLoading = false;
    },
    [addRating.pending]: state => {
      state.isLoading = true;
    },
    [addRating.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [addRating.rejected]: state => {
      state.isLoading = false;
    },
    [getFields.pending]: state => {
      state.isLoading = true;
    },
    [getFields.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.fields = action.payload;
      state.filterFields = action.payload;
      state.subjects = action.payload;
    },
    [getFields.rejected]: state => {
      state.isLoading = false;
    },
    [getUniversities.pending]: state => {
      state.isLoading = true;
    },
    [getUniversities.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.universities = action.payload;
      state.filterUniversities = action.payload;
    },
    [getUniversities.rejected]: state => {
      state.isLoading = false;
    },
    [deleteUni.pending]: state => {
      state.isLoading = true;
    },
    [deleteUni.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.universities = action.payload;
      state.filterUniversities = action.payload;
    },
    [deleteUni.rejected]: state => {
      state.isLoading = false;
    },
    [addUniversity.pending]: state => {
      state.uniLoading = true;
    },
    [addUniversity.fulfilled]: (state, action) => {
      state.uniLoading = false;
      state.universities.push(action.payload);
      state.filterUniversities.push(action.payload);
    },
    [addUniversity.rejected]: state => {
      state.uniLoading = false;
    },
    [addFieldOfStudy.pending]: state => {
      state.uniLoading = true;
    },
    [addFieldOfStudy.fulfilled]: (state, action) => {
      state.uniLoading = false;
      state.fields.push(action.payload);
      state.filterFields.push(action.payload);
    },
    [addFieldOfStudy.rejected]: state => {
      state.uniLoading = false;
    },
    [deleteField.pending]: state => {
      state.isLoading = true;
    },
    [deleteField.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.fields = action.payload;
      state.filterFields = action.payload;
    },
    [deleteField.rejected]: state => {
      state.isLoading = false;
    },
    [addSubject.pending]: state => {
      state.isLoading = true;
    },
    [addSubject.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [addSubject.rejected]: state => {
      state.isLoading = false;
    },
    [deleteSubject.pending]: state => {
      state.isLoading = true;
    },
    [deleteSubject.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [deleteSubject.rejected]: state => {
      state.isLoading = false;
    },
    [documentDetails.pending]: state => {
      state.isLoading = true;
    },
    [documentDetails.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.eachDocument = action.payload;
    },
    [documentDetails.rejected]: state => {
      state.isLoading = false;
    },
    [addRating.pending]: state => {
      state.rateLoading = true;
    },
    [addRating.fulfilled]: (state, action) => {
      state.rateLoading = false;
      state.eachDocument = action.payload;
    },
    [addRating.rejected]: state => {
      state.rateLoading = false;
    },
    [addComment.pending]: state => {
      state.commentLoading = true;
    },
    [addComment.fulfilled]: (state, action) => {
      state.commentLoading = false;
      state.eachDocument = action.payload;
    },
    [addComment.rejected]: state => {
      state.commentLoading = false;
    },
    [deleteComment.pending]: state => {
      state.deleteComment = true;
    },
    [deleteComment.fulfilled]: (state, action) => {
      state.deleteComment = false;
      state.eachDocument = action.payload;
    },
    [deleteComment.rejected]: state => {
      state.deleteComment = false;
    },
    [deleteDocument.pending]: state => {
      state.deleteLoading = true;
    },
    [deleteDocument.fulfilled]: (state, action) => {
      state.deleteLoading = false;
      state.documents.splice(
        state.documents.findIndex(doc => doc._id === action.payload._id),
        1
      );
    },
    [deleteDocument.rejected]: state => {
      state.deleteLoading = false;
    },
  },
});

export const {
  like,
  filteredUser,
  filteredUni,
  filteredField,
  filteredDocuments,
  pagination,
  userPagination,
  usersNextPage,
  userPrevPage,
  documentsPagination,
  documentsNextPage,
  documentsPrevPage,
  UniPagination,
  UniNextPage,
  UniPrevPage,
  FieldPagination,
  FieldPrevPage,
  FieldNextPage,
} = documentSlice.actions;

export default documentSlice.reducer;
