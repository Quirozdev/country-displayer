import { getCountryByCode } from "@/features/countries/api/get-country-by-code";
import { useQuery } from "@tanstack/react-query";

export const useGetCountryByCode = (code: string) => {
  return useQuery({
    queryKey: ["country", code],
    queryFn: () => {
      return getCountryByCode(code);
    },
    enabled: !!code,
  });
};
