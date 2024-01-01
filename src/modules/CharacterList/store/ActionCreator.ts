import BaseApi from "@/api/api";
import { ICharacter } from "@/components/CharacterCard";
import { AppDispatch } from "@/store";
import { CharacterListSlice } from "./reducer";
import { IResponse } from "./type";


export const fetchCharacters = () => async (dispatch: AppDispatch) => {
    try {

        dispatch(CharacterListSlice.actions.characterFetching())
        const response = await BaseApi.get<IResponse>("/character")
        dispatch(CharacterListSlice.actions.characterFetchingSuccess(response.data.results))
    }
    catch (e) {
        if (e instanceof Error) dispatch(CharacterListSlice.actions.characterFetchingError(e.message))
        else if (typeof e === "string") dispatch(CharacterListSlice.actions.characterFetchingError(e))
    }
}