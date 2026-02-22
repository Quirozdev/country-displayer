import { useGetCountries } from "@/features/countries/hooks/use-get-countries";
import type { CountriesResponse } from "@/features/countries/types/country.types";
import { CountriesContent } from "@/features/countries/widgets/CountriesContent";
import { CountriesHeader } from "@/features/countries/widgets/CountriesHeader";

export default function CountriesPage() {
  const { data: countries, isLoading } = useGetCountries();

  if (isLoading) {
    return <p>Loading....</p>;
  }

  return (
    <div className="flex flex-col gap-4">
      <CountriesHeader />
      <CountriesContent countries={countries as CountriesResponse} />
    </div>
  );
}
