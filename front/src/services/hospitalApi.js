import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const hospitalApi = createApi({
  reducerPath: 'hospitalApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/admin/' }),
  endpoints: (builder) => ({
    getHospitals: builder.query({
      query: () => 'appList',
    }),
    getHospitalImage: builder.query({

      query: () => `hospitalInfo/26`,
    }),
    getHospitalData: builder.query({

      query: () => 'hospitalInfo',
    }),
    getHospitalInfo: builder.query({
      query: () => 'hospitalInfo',
    }),
  }),
});

export const { useGetHospitalsQuery, useGetHospitalImageQuery, useGetHospitalDataQuery, useGetHospitalInfoQuery } = hospitalApi;
