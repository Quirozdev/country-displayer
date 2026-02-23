import { getCountries } from "@/features/countries/api/get-countries";
import { useQuery } from "@tanstack/react-query";

export const useGetCountries = () => {
  return useQuery({
    queryKey: ["countries"],
    queryFn: getCountries,
  });
};
