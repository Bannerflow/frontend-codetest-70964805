import { PokemonListItem } from './pokemon.list.item';

export interface List {
  count: number;
  next: string | undefined | null;
  previous: string | undefined | null;
  results: PokemonListItem[];
}
