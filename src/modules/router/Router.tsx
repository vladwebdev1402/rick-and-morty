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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={paths.main} element={<Root />}>
      <Route index element={<Characters />} />
    </Route>
  )
);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
