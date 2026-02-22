import { CountryCard } from "@/features/countries/components/CountryCard";
import type { Country } from "@/features/countries/types/country.types";

interface Props {
  countries: Country[];
}

export function CountriesContent({ countries }: Props) {
  return (
    <main className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4 px-4 md:px-12">
      {countries?.map((country) => (
        <CountryCard country={country} key={country.cca3} />
      ))}
    </main>
  );
}
