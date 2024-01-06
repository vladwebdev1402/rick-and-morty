import { baseUrl } from "@/api/apiPaths";
import { IEpisodeFilters } from "@/types/IEpisodeFilters";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IResponse } from "./type";
import { baseErrorResponse } from "@/api/baseErrorResponse";


const regEpisode1 = new RegExp(/[Ss]{1}\d\d[Ee]{1}\d\d/);
const regEpisode2 = new RegExp(/[Ss]{1}\d\d/);

export const EpisodeListService = createApi({
    reducerPath: "episodeListApi",
    baseQuery: fetchBaseQuery({baseUrl: baseUrl}),
    endpoints: (builder) => ({
        fetchAllEpisodes: builder.query<IResponse, IEpisodeFilters>({
            query: (filters) => ({
                url: "/episode",
                params: {
                    episode: regEpisode1.test(filters.name) || regEpisode2.test(filters.name) ? filters.name : "",
                    name: regEpisode1.test(filters.name) || regEpisode2.test(filters.name) ? "" : filters.name,
                    page: filters.page
                },
            }),
            transformErrorResponse: baseErrorResponse
        })
    })
})