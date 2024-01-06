import { baseUrl } from "@/api/apiPaths";
import { ILocation } from "@/components/LocationCard";
import { IError } from "@/types/IError";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const LocationDetailService = createApi({
  reducerPath: "locationDetailService",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getDetailById: builder.query<ILocation, number>({
      query: (id: number) => ({
        url: "/location/" + id,
      }),
      transformErrorResponse: (error: IError) =>
        error.data ? error.data.error : "There is no internet connection",
    }),
  }),
});
