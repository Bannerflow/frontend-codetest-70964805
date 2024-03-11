import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { List } from '../types/list';
import { RouterModule } from '@angular/router';
import { PokemonListItem } from '../types/pokemon.list.item';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent implements OnInit {
  pokeList: PokemonListItem[] = [];
  previousPage: string | undefined | null;
  nextPage: string | undefined | null;
  pokemon: List;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getFirstPage();
  }

  getFirstPage(): void {
    this.apiService.getFirstPage().subscribe((pokemon) => {
      this.pokemon = pokemon;
      this.getPokemonListFromData(pokemon.results);
      this.previousPage = pokemon.previous;
      this.nextPage = pokemon.next;
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
      this.getPokemonListFromData(pokemon.results);
      this.previousPage = pokemon.previous;
      this.nextPage = pokemon.next;
    });
  }
}
