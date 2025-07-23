import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const hospitalApi = createApi({
  reducerPath: 'hospitalApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/admin/' }),
  endpoints: (builder) => ({
    getHospitals: builder.query({
      query: () => 'appList',
    }),
    getHospitalImage: builder.query({
      query: (id) => `hospitalInfo/${id}`,
    }),
    getHospitalData: builder.query({
      query: () => 'hospitalInfo',
    }),
    getHospitalList: builder.query({
      query: () => 'hospitalList',
    }),
    getAppSlider: builder.query({
      query: () => 'appSlider',
    }),
  }),
});

export const { useGetHospitalsQuery, useGetHospitalImageQuery, useGetHospitalDataQuery, useGetHospitalListQuery, useGetAppSliderQuery } = hospitalApi;
