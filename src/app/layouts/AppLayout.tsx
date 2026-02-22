import { CountriesHeader } from "@/features/countries/widgets/CountriesHeader";
import { Outlet } from "react-router";

export default function AppLayout() {
  return (
    <div className="flex flex-col gap-8">
      <CountriesHeader />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
