import { type Country } from "@/features/countries/types/country.types";
import axios from "axios";

export const getCountryByCode = async (code: string) => {
  const { data } = await axios.get<Country[]>(
    `https://restcountries.com/v3.1/alpha/${code}`,
  );
  return data[0];
};
