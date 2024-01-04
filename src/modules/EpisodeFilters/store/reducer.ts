import { IEpisodeFilters } from "@/types/IEpisodeFilters"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface IEpisodeFilterState  {
    filters: IEpisodeFilters
}

const initialState: IEpisodeFilterState = {
    filters: {
        name: "",
        page: 1
    }
}

export const EpisodeFiltersSlice = createSlice({
    name: "episodeFiltersReducer",
    initialState,
    reducers: {
        setName: (state, action: PayloadAction<string>) => {
            state.filters.name = action.payload
            state.filters.page = 1
        },
        nextPage: (state) => {
            state.filters.page++
        },
        prevPage: (state) => {
            state.filters.page--
        },
    }
}) 

export default EpisodeFiltersSlice.reducer