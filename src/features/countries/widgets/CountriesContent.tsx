import { CountriesEmptyState } from "@/features/countries/components/CountriesEmptyState";
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
  availableRegions,
  selectedRegion,
  setSelectedRegion,
}: Props) {
  const filteredCountries = countries.filter((country) => {
    if (!countrySearch && !selectedRegion) {
      return true;
    }
    const nameMatch = !countrySearch
      ? true
      : country.name.common
          .toLowerCase()
          .includes(countrySearch.toLowerCase().trim());
    const regionMatch = !selectedRegion
      ? true
      : country.region === selectedRegion;
    return nameMatch && regionMatch;
  });

  return (
    <section className="@container flex flex-col gap-10 px-4 md:px-12">
      <CountriesFilters
        countrySearch={countrySearch}
        setCountrySearch={setCountrySearch}
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
        availableRegions={availableRegions}
      />
      {filteredCountries?.length ? (
        <article className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-4">
          {filteredCountries?.map((country) => (
            <CountryCard country={country} key={country.cca3} />
          ))}
        </article>
      ) : (
        <CountriesEmptyState />
      )}
    </section>
  );
}
