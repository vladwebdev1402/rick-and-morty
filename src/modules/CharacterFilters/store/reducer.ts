import { ICharacterFilters } from "@/types/ICharacterFilters";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface CharacterFilterState {
    filters: ICharacterFilters
}

const initialState: CharacterFilterState = {
    filters: {
        name: "",
        species: "",
        gender: "",
        status: "",
        page: 1,
    }
}

export const CharacterFiltersSlice = createSlice(
    {   name: "CharacterFiltersStore",
        initialState,
        reducers: {
            setName(state, action: PayloadAction<string> ) {
                state.filters.name = action.payload
                state.filters.page = 1
            },
            setSpecies(state, action: PayloadAction<string> ) {
                state.filters.species = action.payload
                state.filters.page = 1
            },
            setGender(state, action: PayloadAction<string> ) {
                state.filters.gender = action.payload
                state.filters.page = 1
            },
            setStatus(state, action: PayloadAction<string> ) {
                state.filters.status = action.payload
                state.filters.page = 1
            },
            nextPage(state) {
                state.filters.page++
            },
            prevPage(state) {
                state.filters.page--
            },
        }
    }
)

export default CharacterFiltersSlice.reducer