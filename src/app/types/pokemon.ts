import { AbilityItem } from './ability';
import { Cry } from './cry';
import { Form } from './form';
import { GameIndice } from './game.indice';
import { HeldItem } from './held.item';
import { MoveItem } from './move';
import { PastType } from './past.type';
import { Species } from './species';
import { Sprites } from './sprites';
import { StatItem } from './stat';
import { Type } from './type';

export interface Pokemon {
  abilities: AbilityItem[];
  base_experience: number;
  cries: Cry;
  forms: Form[];
  game_indices: GameIndice[];
  height: number;
  held_items: HeldItem[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: MoveItem[];
  name: string;
  order: number;
  past_types: PastType[];
  species: Species;
  sprites: Sprites;
  stats: StatItem[];
  types: Type[];
  weight: number;
}
