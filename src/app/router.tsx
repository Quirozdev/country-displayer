import { createBrowserRouter } from "react-router";
import AppLayout from "@/app/layouts/AppLayout";
import { countryRoutes } from "@/features/countries/routes";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      children: countryRoutes,
    },
  ],
  {
    basename: "/country-displayer",
  },
);
