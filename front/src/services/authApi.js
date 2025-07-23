import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/auth' }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/login',   // /auth/login endpoint
        method: 'POST',
        body: credentials,  // { username, password }
      }),
    }),
    register: builder.mutation({
      query: (newUser) => ({
        url: '/register',  // /auth/register endpoint
        method: 'POST',
        body: newUser,   // { username, password, ... }
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
