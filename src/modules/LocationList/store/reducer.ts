import { ILocation } from "@/components/LocationCard";
import { PayloadActionCreator, createSlice, isFulfilled } from "@reduxjs/toolkit";
import { fetchLocations } from "./ActionCreator";

interface ILocationListState {
    locations: ILocation[];
    error: string;
    isLoading: boolean;
}

const initialState: ILocationListState = {
    locations: [],
    error: "",
    isLoading: false
}

export const LocationListSlice = createSlice({
    name: "locationListSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchLocations.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchLocations.rejected, (state, action: any) => {
            state.isLoading = true;
            state.error = action.payload
        })
        builder.addCase(fetchLocations.fulfilled, (state, action: any) => {
            state.error = "";
            state.isLoading = false;
            state.locations = action.payload
        })
    },
}) 

export default LocationListSlice.reducer