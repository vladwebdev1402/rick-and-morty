import { baseUrl } from "@/api/apiPaths";
import { ILocationFilters } from "@/types/ILocationFilters";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IResponse } from "../store/types";

export const LocationService = createApi({
  reducerPath: "locationApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getAllLocations: builder.query<IResponse, ILocationFilters>({
      query: (filters: ILocationFilters) => ({
        url: "/location",
        params: filters,
      }),
    }),
  }),
});
