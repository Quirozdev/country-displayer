import { getCountriesByCodes } from "@/features/countries/api/get-countries-by-codes";
import { useQuery } from "@tanstack/react-query";

export const useGetCountriesByCodes = (codes: string[]) => {
  return useQuery({
    queryKey: ["country", codes],
    queryFn: () => {
      return getCountriesByCodes(codes);
    },
    enabled: codes.length > 0,
  });
};
