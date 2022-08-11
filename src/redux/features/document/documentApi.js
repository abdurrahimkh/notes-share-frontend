import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const documentApi = createApi({
  reducerPath: "documentsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://notes-share-fyp.herokuapp.com/api/",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth?.user.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ["Document"],
  endpoints: builder => ({
    approvedDocuments: builder.query({
      query: () => "documents/approved",
      providesTags: ["Document"],
    }),
    userProfile: builder.query({
      query: id => `users/profile/${id}`,
    }),
    userDocuments: builder.query({
      query: id => `users/profile/${id}`,
    }),
    likeDocuments: builder.mutation({
      query: id => ({
        url: `/documents/like/${id}`,
        method: "POST",
      }),
      invalidatesTags: ["Document"],
    }),
    filterByField: builder.mutation({
      query: selectedOption => ({
        url: `/documents/search?field=${selectedOption}`,
        method: "GET",
      }),
      invalidatesTags: ["Document"],
    }),
  }),
});

export const {
  useApprovedDocumentsQuery,
  useUserProfileQuery,
  useUserDocumentsQuery,
  useLikeDocumentsMutation,
  useFilterByFieldMutation,
} = documentApi;
