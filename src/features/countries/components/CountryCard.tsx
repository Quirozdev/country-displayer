import type { Country } from "@/features/countries/types/country.types";

interface Props {
  country: Country;
}

export function CountryCard({ country }: Props) {
  return (
    <div className="bg-primary text-foreground flex flex-col gap-4 rounded-lg pb-8 shadow-xl">
      <img
        src={country.flags.png}
        alt={country.flags.alt}
        className="h-40 w-full rounded-t-lg object-fill"
      />
      <div className="flex flex-col gap-3 px-6">
        <p className="font-extrabold">{country.name.common}</p>
        <div>
          <p className="text-sm">
            <span className="font-semibold">Population: </span>
            <span>{country.population}</span>
          </p>

          <p className="text-sm">
            <span className="font-semibold">Region: </span>
            <span>{country.region}</span>
          </p>
          <p className="text-sm">
            <span className="font-semibold">Capital: </span>
            <span>{country.capital[0]}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
