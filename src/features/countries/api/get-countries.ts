import type { CountriesResponse } from "@/features/countries/types/country.types";
import axios from "axios";

export const getCountries = async () => {
  const { data } = await axios.get<CountriesResponse>(
    "https://restcountries.com/v3.1/all?fields=cca3,name,population,region,capital,flags",
  );
  return data;
};
