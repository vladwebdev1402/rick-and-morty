import { ICharacter } from "@/components/CharacterCard";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface ICharacterListState {
    characters: ICharacter[];
    isLoading: boolean;
    error: string;
}

const initialState:ICharacterListState  = {
    characters: [],
    isLoading: false,
    error: ""
};

export const CharacterListSlice = createSlice({
    name: "characterList",
    initialState,
    reducers: {
        characterFetching(state) {
            state.isLoading = true;
        },
        characterFetchingSuccess(state,  action: PayloadAction<ICharacter[]>) {
            state.isLoading = false;
            state.error = ""
            state.characters = action.payload
        },
        characterFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload
        },
    }}
)

export default CharacterListSlice.reducer