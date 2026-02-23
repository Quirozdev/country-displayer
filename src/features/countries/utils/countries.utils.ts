import type { Country } from "@/features/countries/types/country.types";
import { toTitleCase } from "@/shared/utils/text-transformations";

export const getNativeName = (country: Country) => {
  const nativeNameKey = Object.keys(country.name.nativeName)[0];
  return country.name.nativeName[nativeNameKey].common;
};

export const getCurrencies = (country: Country) => {
  return Object.values(country.currencies).map((currency) =>
    toTitleCase(currency.name),
  );
};

export const getLanguages = (country: Country) => {
  return Object.values(country.languages).sort().join(", ");
};
