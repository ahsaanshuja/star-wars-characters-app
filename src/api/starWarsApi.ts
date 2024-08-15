import axios from "axios";
import { IHomeWorld, StarWarsApiResponse } from "../types/types";

const API_URL = process.env.REACT_APP_API_URL;

export const fetchCharacters = async (
  page: number = 1
): Promise<StarWarsApiResponse> => {
  const response = await axios.get(`${API_URL}/people/?page=${page}`);
  return response.data;
};

export const fetchCharacterDetails = async (
  url: string
): Promise<IHomeWorld> => {
  const response = await axios.get(url);
  return response.data;
};
