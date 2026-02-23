import { type Country } from "@/features/countries/types/country.types";
import axios from "axios";

export const getCountriesByCodes = async (codes: string[]) => {
  const { data } = await axios.get<Country[]>(
    `https://restcountries.com/v3.1/alpha`,
    {
      params: {
        codes: codes.join(","),
      },
    },
  );
  return data;
};
