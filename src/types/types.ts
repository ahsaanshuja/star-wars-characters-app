export interface Character {
  name: string;
  height: string;
  mass: string;
  birth_year: string;
  created: string;
  films: string[];
  species: string[];
  homeworld: string;
}

export interface StarWarsApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Character[];
}

export interface IHomeWorld {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: Date;
  edited: Date;
  url: string;
}
