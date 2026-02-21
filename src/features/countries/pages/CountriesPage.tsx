import { CountryCard } from "@/features/countries/components/CountryCard";
import { useGetCountries } from "@/features/countries/hooks/use-get-countries";

export default function CountriesPage() {
  const { data: countries, isLoading } = useGetCountries();

  if (isLoading) {
    return <p>Loading....</p>;
  }

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
      {countries?.map((country) => (
        <CountryCard country={country} key={country.cca3} />
      ))}
    </div>
  );
}
