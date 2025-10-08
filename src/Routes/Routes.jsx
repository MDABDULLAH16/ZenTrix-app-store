import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";
import Installation from "../Pages/Installation/Installation";
import AppDetails from "../Pages/AppDetails/AppDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,

        loader: async () => {
          const res = await fetch("/appData.json");
          const data = await res.json();
          return data;
        },
        Component: Home,
      },
      {
        path: "apps",
        loader: async () => {
          const res = await fetch("/appData.json");
          const data = await res.json();
          return data;
        },
        Component: Apps,
      },
      {
        path: "appDetails/:id",
        loader: async ({ params }) => {
          const res = await fetch("/appData.json");
          const data = await res.json();
          const app = data.find((app) => app.id === parseInt(params.id));
          return app;
        },
        Component: AppDetails,
      },
      { path: "/installation", Component: Installation },
    ],
  },
]);
