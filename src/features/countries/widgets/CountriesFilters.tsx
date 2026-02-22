import {
  CountryRegionFilter,
  type CountryRegionFilterProps,
} from "@/features/countries/components/CountryRegionFilter";
import {
  CountrySearchInput,
  type CountrySearchInputProps,
} from "@/features/countries/components/CountrySearchInput";

export interface CountriesFiltersProps
  extends CountrySearchInputProps, CountryRegionFilterProps {}

export function CountriesFilters({
  countrySearch,
  setCountrySearch,
  availableRegions,
  selectedRegion,
  setSelectedRegion,
}: CountriesFiltersProps) {
  return (
    <div className="@smitems-center flex flex-col justify-between gap-4 @sm:flex-row">
      <CountrySearchInput
        countrySearch={countrySearch}
        setCountrySearch={setCountrySearch}
      />
      <CountryRegionFilter
        availableRegions={availableRegions}
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
      />
    </div>
  );
}
