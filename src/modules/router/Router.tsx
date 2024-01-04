import Characters from "@/pages/Characters/Characters";
import Root from "@/pages/root/Root";
import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { paths } from "../../routePaths/paths";
import CharacterDetailPage from "@/pages/CharacterDetailPage/CharacterDetailPage";
import LocationsPage from "@/pages/LocationsPage/LocationsPage";
import LocationDetailPage from "@/pages/LocationDetailPage/LocationDetailPage";
import EpisodesPage from "@/pages/EpisodesPage/EpisodesPage";
import EpisodeDetailPage from "@/pages/EpisodeDetailPage/EpisodeDetailPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={paths.main} element={<Root />}>
      <Route index element={<Characters />} />
      <Route path={paths.characterDetail} element={<CharacterDetailPage />} />
      <Route path={paths.locations} element={<LocationsPage />} />
      <Route path={paths.locationDetail} element={<LocationDetailPage />} />
      <Route path={paths.episodes} element={<EpisodesPage />} />
      <Route path={paths.episodeDetail} element={<EpisodeDetailPage />} />
    </Route>
  )
);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
