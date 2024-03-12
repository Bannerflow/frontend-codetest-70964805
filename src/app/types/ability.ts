export interface Ability {
  name: string;
  url: string;
}

export interface AbilityItem {
  ability: Ability;
  is_hidden: boolean;
  slot: boolean;
}
