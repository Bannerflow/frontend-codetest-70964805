import { Species } from './species';

export interface EvolutionChain {
  evolution_details: [];
  evolves_to: EvolutionChain[];
  is_baby: boolean;
  species: Species;
}

export interface EvolutionList {
  name: string;
  url: string;
  image: string | undefined | null;
}
