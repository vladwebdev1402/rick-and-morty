import { baseUrl } from "@/api/apiPaths";
import { ICharacterFilters } from "@/types/ICharacterFilters";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {IResponse} from "./type"
import { baseErrorResponse } from "@/api/baseErrorResponse";
export const CharacterListService = createApi({
  reducerPath: "characterListApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getAllCharacters: builder.query<IResponse, ICharacterFilters>({
      query: (filters: ICharacterFilters) => ({
        url: "/character",
        params: filters,
      }),
      transformErrorResponse: baseErrorResponse
    }),
  }),
})


