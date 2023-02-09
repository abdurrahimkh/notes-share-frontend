import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const documentApi = createApi({
  reducerPath: 'documentsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'import.meta.env.VITE_REACT_API/api/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth?.user.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ['Document', 'Rating'],
  endpoints: builder => ({
    approvedDocuments: builder.query({
      query: () => 'documents/approved',
      providesTags: ['Document'],
    }),
    recentDocuments: builder.query({
      query: () => 'documents/recent',
      providesTags: ['Document'],
    }),
    userProfile: builder.query({
      query: id => `users/profile/${id}`,
    }),
    documentDetails: builder.query({
      query: id => `documents/document/${id}`,
      providesTags: ['Rating'],
    }),
    addRating: builder.mutation({
      query: data => ({
        url: 'documents/document/review',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Rating'],
    }),
  }),
});

export const { useApprovedDocumentsQuery, useRecentDocumentsQuery, useUserProfileQuery, useDocumentDetailsQuery, useAddRatingMutation } = documentApi;
