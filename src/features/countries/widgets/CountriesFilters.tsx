import {
  CountrySearchInput,
  type CountrySearchInputProps,
} from "@/features/countries/components/CountrySearchInput";

export interface CountriesFiltersProps extends CountrySearchInputProps {}

export function CountriesFilters({
  countrySearch,
  setCountrySearch,
}: CountriesFiltersProps) {
  return (
    <section>
      <CountrySearchInput
        countrySearch={countrySearch}
        setCountrySearch={setCountrySearch}
      />
    </section>
  );
}
