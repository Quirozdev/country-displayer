import { CountryCard } from "@/features/countries/components/CountryCard";
import type { Country } from "@/features/countries/types/country.types";
import {
  CountriesFilters,
  type CountriesFiltersProps,
} from "@/features/countries/widgets/CountriesFilters";

interface Props extends CountriesFiltersProps {
  countries: Country[];
}

export function CountriesContent({
  countries,
  countrySearch,
  setCountrySearch,
}: Props) {
  const filteredCountries = countries.filter((country) => {
    if (!countrySearch) {
      return true;
    }
    return country.name.common
      .toLowerCase()
      .includes(countrySearch.toLowerCase().trim());
  });

  return (
    <main className="flex flex-col gap-10 px-4 md:px-12">
      <CountriesFilters
        countrySearch={countrySearch}
        setCountrySearch={setCountrySearch}
      />
      <section className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-4">
        {filteredCountries?.map((country) => (
          <CountryCard country={country} key={country.cca3} />
        ))}
      </section>
    </main>
  );
}
