import ThemeSwitcher from "@/features/theme/ui/ThemeSwitcher/ThemeSwitcher";
import { Link } from "react-router";

export function CountriesHeader() {
  return (
    <header className="bg-primary @container flex justify-between gap-4 px-4 py-6 shadow-md md:px-12">
      <h1 className="text-foreground text-xl font-extrabold">
        <Link to="/">Where in the world?</Link>
      </h1>
      <ThemeSwitcher />
    </header>
  );
}
