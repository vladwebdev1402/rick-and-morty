import { ILocationFilters } from "@/types/ILocationFilters";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ILocationFiltersState {
    filters: ILocationFilters
}

const initialState: ILocationFiltersState = {
    filters: {
        name: "",
        dimension: "",
        type: "",
        page: 1
    }
}

export const LocationFiltersSlice = createSlice({
    name: "locationFilters",
    initialState,
    reducers: {
        setName: (state, action: PayloadAction<string>) => {
            state.filters.name = action.payload
        },
        setDimension: (state, action: PayloadAction<string>) => {
            state.filters.dimension = action.payload
        },
        setType: (state, action: PayloadAction<string>) => {
            state.filters.type = action.payload
        },
        nextPage: (state) => {
            state.filters.page++
        },
        prevPage: (state) => {
            state.filters.page--
        },
    }
})

export default LocationFiltersSlice.reducer
