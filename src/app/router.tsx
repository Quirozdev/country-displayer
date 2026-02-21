import { createBrowserRouter, Navigate } from "react-router";
import AppLayout from "@/app/layouts/AppLayout";
import { countryRoutes } from "@/features/countries/routes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Navigate to="countries" replace /> },
      ...countryRoutes,
    ],
  },
]);
