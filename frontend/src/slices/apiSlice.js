import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//  const baseQuery=fetchBaseQuery({baseUrl:''})
const baseQuery = fetchBaseQuery({
  baseUrl:
    "https://stayfit-backend-g9toc02r3-thomas-josephs-projects.vercel.app/",
  credentials: "include",
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["User", "Admin", "trainer"],
  endpoints: (builder) => ({}),
});
