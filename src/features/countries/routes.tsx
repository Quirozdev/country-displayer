import CountriesPage from "@/features/countries/pages/CountriesPage";
import { CountryPage } from "@/features/countries/pages/CountryPage";
import type { RouteObject } from "react-router";

export const countryRoutes: RouteObject[] = [
  {
    index: true,
    element: <CountriesPage />,
  },
  {
    path: ":code",
    element: <CountryPage />,
  },
];
