import { CharacterListReducer } from "@/modules/CharacterList"
import { CharacterFiltersReducer } from "@/modules/CharacterFilters"
import { CharacterDetailReducer } from "@/modules/CharacterDetail"
import { LocationFiltersReducer } from "@/modules/LocationsFilters"
import { LocationListReducer, LocationService } from "@/modules/LocationList"
import {combineReducers, configureStore} from "@reduxjs/toolkit"

const rootReducer = combineReducers({
    CharacterListReducer,
    CharacterFiltersReducer,
    CharacterDetailReducer,
    LocationFiltersReducer,
    LocationListReducer,
    [LocationService.reducerPath]: LocationService.reducer,

})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>  getDefaultMiddleware().concat(LocationService.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']