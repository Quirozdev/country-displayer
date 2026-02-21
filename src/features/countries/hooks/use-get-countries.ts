import { getCountries } from "@/features/countries/api/getCountries";
import { useQuery } from "@tanstack/react-query";

export const useGetCountries = () => {
  return useQuery({
    queryKey: ["countries"],
    queryFn: getCountries,
  });
};
