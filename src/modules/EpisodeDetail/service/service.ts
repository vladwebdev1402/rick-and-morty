import { baseUrl } from "@/api/apiPaths";
import { baseErrorResponse } from "@/api/baseErrorResponse";
import { IEpisode } from "@/components/EpisodeCard";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const EpisodeDetailService = createApi({
  reducerPath: "episodeDetailApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (build) => ({
    fetchEpisodeById: build.query<IEpisode, number>({
      query: (id: number) => "/episode/" + id,
      transformErrorResponse: baseErrorResponse
    }),
  }),
});
