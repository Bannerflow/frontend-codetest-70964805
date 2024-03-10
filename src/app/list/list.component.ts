import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { List } from '../types/list';
import { RouterModule } from '@angular/router';
import { PokemonListItem } from '../types/pokemon.list.item';
import { Observable, map } from 'rxjs';
import { Pokemon } from '../types/pokemon';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent implements OnInit {
  pokemonListData: List;
  pokeList: PokemonListItem[] = [];
  imageTemp: string;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getPokemonList();
  }

  getPokemonList(): void {
    this.apiService.getFirstPage().subscribe((pokemon) => {
      this.pokemonListData = pokemon;
      this.getPokemonListFromData(pokemon.results);
    });
  }
  
  getPokemonListFromData(pokemon: PokemonListItem[]): void {
    this.pokeList = [];

    pokemon.forEach((el) => {
      this.apiService.getPokemonDetails(el.name).subscribe((pokemon) => {
        let element = {
          name: pokemon?.species.name,
          url: pokemon?.species.url,
          image: pokemon?.sprites?.front_default,
        };
        this.pokeList.push(element);
      });
    });
  }

  getPage(url: string): void {
    this.apiService.getData(url).subscribe((pokemon) => {
      this.pokemonListData = pokemon;
      this.getPokemonListFromData(pokemon.results);
    });
  }
}
