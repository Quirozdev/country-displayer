import { useGetCountries } from "@/features/countries/hooks/use-get-countries";
import type { CountriesResponse } from "@/features/countries/types/country.types";
import { CountriesContent } from "@/features/countries/widgets/CountriesContent";
import { LoadingSpinner } from "@/shared/components/LoadingSpinner";
import { useState } from "react";

export default function CountriesPage() {
  const availableRegions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  const { data: countries, isLoading } = useGetCountries();
  const [countrySearch, setCountrySearch] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  if (isLoading) {
    return (
      <div className="mt-16">
        <LoadingSpinner />;
      </div>
    );
  }

  return (
    <div className="pb-4">
      <CountriesContent
        countries={countries as CountriesResponse}
        countrySearch={countrySearch}
        setCountrySearch={setCountrySearch}
        availableRegions={availableRegions}
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
      />
    </div>
  );
}
