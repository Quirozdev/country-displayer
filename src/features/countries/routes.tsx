import CountriesPage from "@/features/countries/pages/CountriesPage";
import type { RouteObject } from "react-router";

export const countryRoutes: RouteObject[] = [
  {
    path: "countries",
    element: <CountriesPage />,
  },
];
