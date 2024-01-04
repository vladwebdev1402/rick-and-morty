import { CharacterListService } from "@/modules/CharacterList";
import { CharacterFiltersReducer } from "@/modules/CharacterFilters";
import { CharacterDetailReducer } from "@/modules/CharacterDetail";
import { LocationFiltersReducer } from "@/modules/LocationsFilters";
import { EpisodeFiltersReducer } from "@/modules/EpisodeFilters";
import { LocationListReducer, LocationService } from "@/modules/LocationList";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { LocationDetailService } from "@/modules/LocationDetail";
import { EpisodeListService } from "@/modules/EpisodeList";
import { EpisodeDetailService } from "@/modules/EpisodeDetail";
const rootReducer = combineReducers({
  CharacterFiltersReducer,
  CharacterDetailReducer,
  LocationFiltersReducer,
  LocationListReducer,
  EpisodeFiltersReducer,
  [LocationService.reducerPath]: LocationService.reducer,
  [CharacterListService.reducerPath]: CharacterListService.reducer,
  [LocationDetailService.reducerPath]: LocationDetailService.reducer,
  [EpisodeListService.reducerPath]: EpisodeListService.reducer,
  [EpisodeDetailService.reducerPath]: EpisodeDetailService.reducer
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        CharacterListService.middleware,
        LocationService.middleware,
        LocationDetailService.middleware,
        EpisodeListService.middleware,
        EpisodeDetailService.middleware
      ),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
