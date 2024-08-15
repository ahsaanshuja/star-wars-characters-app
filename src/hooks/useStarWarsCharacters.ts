import { useQuery } from "@tanstack/react-query";
import { fetchCharacters } from "../api/starWarsApi";
import { StarWarsApiResponse } from "../types/types";

export const useStarWarsCharacters = (page: number) => {
  return useQuery<
    StarWarsApiResponse,
    Error,
    StarWarsApiResponse,
    [string, number]
  >({
    queryKey: ["characters", page],
    queryFn: () => fetchCharacters(page),
  });
};
