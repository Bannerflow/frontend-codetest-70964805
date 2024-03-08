import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
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
  pokemonList: List;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getPokemonList();
  }

  getPokemonList(): void {
    this.apiService.getFirstPage()
      .subscribe(pokemon => this.pokemonList = pokemon);
  }

  getPage(url: string): void {
    this.apiService.getData(url)
    .subscribe(pokemon => this.pokemonList = pokemon);
  }
}
