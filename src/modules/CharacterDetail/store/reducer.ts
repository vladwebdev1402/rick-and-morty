import { ICharacter } from "@/components/CharacterCard";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchCharacterDetail } from "./ActionCreator";

interface ICharacterDetail {
    character: ICharacter;
    isLoading: boolean;
    error: string;
}

const initialState: ICharacterDetail = {
    character: {
        "id": 1,
        "name": "",
        "status": "",
        "species": "",
        "type": "",
        "gender": "",
        "origin": {
          "name": "",
          "url": ""
        },
        "location": {
          "name": "",
          "url": ""
        },
        "image": "",
        "episode": [],
        "url": "",
        "created": ""
    },
    isLoading: false,
    error: ""
}

export const CharacterDetailSlice = createSlice(
    {
        name: "CharacterDetail",
        initialState,
        reducers: {
           
        },
       extraReducers: (builder) => {
        builder.addCase(fetchCharacterDetail.pending, (state) => {
            state.isLoading = true
            state.error = ""
          })
        builder.addCase(fetchCharacterDetail.rejected, (state, action: any) => {
            state.isLoading = false
            state.error = action.payload
          })

        builder.addCase(fetchCharacterDetail.fulfilled, (state, action: any) => {
            state.character = action.payload
            state.isLoading = false
            state.error = ""
          })
    }
    }
)

export default CharacterDetailSlice.reducer