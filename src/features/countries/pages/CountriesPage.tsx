import { useGetCountries } from "@/features/countries/hooks/use-get-countries";
import type { CountriesResponse } from "@/features/countries/types/country.types";
import { CountriesContent } from "@/features/countries/widgets/CountriesContent";
import { CountriesHeader } from "@/features/countries/widgets/CountriesHeader";
import { useState } from "react";

export default function CountriesPage() {
  const { data: countries, isLoading } = useGetCountries();
  const [countrySearch, setCountrySearch] = useState("");

  if (isLoading) {
    return <p>Loading....</p>;
  }

  return (
    <div className="flex flex-col gap-8 pb-4">
      <CountriesHeader />
      <CountriesContent
        countries={countries as CountriesResponse}
        countrySearch={countrySearch}
        setCountrySearch={setCountrySearch}
      />
    </div>
  );
}
