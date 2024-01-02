import { CharacterListReducer } from "@/modules/CharacterList"
import { CharacterFiltersReducer } from "@/modules/CharacterFilters"
import { CharacterDetailReducer } from "@/modules/CharacterDetail"
import {combineReducers, configureStore} from "@reduxjs/toolkit"

const rootReducer = combineReducers({
    CharacterListReducer,
    CharacterFiltersReducer,
    CharacterDetailReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']