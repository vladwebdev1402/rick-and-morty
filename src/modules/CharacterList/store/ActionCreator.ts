import BaseApi from "@/api/api";
import { AppDispatch } from "@/store";
import { CharacterListSlice } from "./reducer";
import { IResponse } from "./type";
import { ICharacterFilters } from "@/types/ICharacterFilters";


export const fetchCharacters = (query?: ICharacterFilters) => async (dispatch: AppDispatch) => {
    try {

        dispatch(CharacterListSlice.actions.characterFetching())
        const response = await BaseApi.get<IResponse>("/character", query)
        dispatch(CharacterListSlice.actions.characterFetchingSuccess(response.data.results))
    }
    catch (e) {
        if (e instanceof Error) dispatch(CharacterListSlice.actions.characterFetchingError(e.message))
        else if (typeof e === "string") dispatch(CharacterListSlice.actions.characterFetchingError(e))
    }
}