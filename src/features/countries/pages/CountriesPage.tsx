import { useGetCountries } from "@/features/countries/hooks/use-get-countries";

export default function CountriesPage() {
  const { data } = useGetCountries();

  console.log(data);

  return <div>xd</div>;
}
