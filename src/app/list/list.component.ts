import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { List } from '../types/list';
import { RouterModule } from '@angular/router';
import { PokemonListItem } from '../types/pokemon.list.item';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule, MatButtonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent implements OnInit {
  pokeList: PokemonListItem[] = [];
  previousPage: string | undefined | null;
  nextPage: string | undefined | null;
  pokemon: List;
  dataLoading: boolean = false;
  listLoading: boolean = false;

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
    this.listLoading = true;
    let itemCount = 0;

    pokemon.forEach((el, i, array) => {
      this.apiService.getPokemonDetails(el.name).subscribe((pokemon) => {
        let element = {
          name: pokemon?.species.name,
          url: pokemon?.species.url,
          image: pokemon?.sprites?.front_default,
        };
        this.pokeList.push(element);

        itemCount++;
        if (itemCount === array.length) {
          this.listLoading = false;
        }
      });
    });
  }

  getPage(url: string): void {
    this.dataLoading = true;
    this.apiService.getData(url).subscribe((pokemon) => {
      this.getPokemonListFromData(pokemon.results);
      this.previousPage = pokemon.previous;
      this.nextPage = pokemon.next;
      this.dataLoading = false;
    });
  }
}
