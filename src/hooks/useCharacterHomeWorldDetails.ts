import { useQuery } from "@tanstack/react-query";
import { fetchCharacterDetails } from "../api/starWarsApi";
import { IHomeWorld } from "../types/types";

export const useCharacterHomeWorldDetails = (homeWorldUrl: string | null) => {
  return useQuery<IHomeWorld, Error, IHomeWorld, [string, string | null]>({
    queryKey: ["homeWorld", homeWorldUrl],
    queryFn: () => fetchCharacterDetails(homeWorldUrl!),
    enabled: !!homeWorldUrl,
  });
};
