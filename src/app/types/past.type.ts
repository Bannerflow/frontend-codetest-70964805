import { Type } from './type';

export interface Generation {
  name: string;
  url: string;
}

export interface PastType {
  generation: Generation;
  types: Type[];
}
