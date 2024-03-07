import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { PokemonListItem } from '../types/pokemon.list.item';
import { CommonModule } from '@angular/common';
import { List } from '../types/list';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent implements OnInit {
  pokemonList: PokemonListItem[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getPokemonList();
    console.log(this.pokemonList);
  }

  getPokemonList(): void {
    this.apiService
      .get<List>('pokemon')
      .subscribe((pokemon) => (this.pokemonList = pokemon.results));
  }
}
