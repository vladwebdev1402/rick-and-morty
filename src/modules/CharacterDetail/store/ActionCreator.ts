import BaseApi from "@/api/api";
import { ICharacter } from "@/components/CharacterCard";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCharacterDetail = createAsyncThunk(
    "character/detail",
    async (id: number, thunkAPI) => {
        try {
            const response = await BaseApi.get<ICharacter>("/character/" + id);
            return response.data
        }
        catch (e) {
            if (e instanceof Error) return e.message
            else if (typeof e === "string") return e
        }   
    }
)
