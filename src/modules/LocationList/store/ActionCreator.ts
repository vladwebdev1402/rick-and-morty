import BaseApi from "@/api/api";
import { ILocationFilters } from "@/types/ILocationFilters";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IResponse } from "./types";


export const fetchLocations = createAsyncThunk(
    "locations/fetch",
    async (query: ILocationFilters, thunkAPI) => {
        try {
            const response = await BaseApi.get<IResponse>("/location", query);
            return response.data.results
        }
        catch (e) {
            return thunkAPI.rejectWithValue("Ничего не найдено")
        }
        
    }
)