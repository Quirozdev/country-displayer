import ThemeSwitcher from "@/features/theme/ui/ThemeSwitcher/ThemeSwitcher";

export function CountriesHeader() {
  return (
    <header className="bg-primary @container flex justify-between gap-4 px-4 py-6 shadow-md md:px-12">
      <h1 className="text-foreground text-xl font-extrabold">
        Where in the world?
      </h1>
      <ThemeSwitcher />
    </header>
  );
}
