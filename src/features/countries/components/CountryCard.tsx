import type { Country } from "@/features/countries/types/country.types";

interface Props {
  country: Country;
}

export function CountryCard({ country }: Props) {
  return (
    <div>
      <img src={country.flags.svg} alt={country.flags.alt} />
      <p>Name: {country.name.common}</p>
      <p>Population: {country.population}</p>
      <p>Region: {country.region}</p>
      <p>Capital: {country.capital[0]}</p>
    </div>
  );
}
