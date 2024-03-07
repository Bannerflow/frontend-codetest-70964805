import { PokemonListItem } from './pokemon.list.item';

export interface List {
  count: number;
  next: string;
  previous: string;
  results: PokemonListItem[];
}
