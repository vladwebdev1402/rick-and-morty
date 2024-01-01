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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={paths.main} element={<Root />}>
      <Route index element={<Characters />} />
      <Route path={paths.characterDetail} element={<CharacterDetailPage />} />
    </Route>
  )
);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
