import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Pokemon } from '../types/pokemon';
import { CommonModule } from '@angular/common';
import { EvolutionChain, EvolutionList } from '../types/evolution.chain';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent implements OnInit {
  pokemon: Pokemon;
  nameParam: string = '';
  evolutionChainUrl: string;
  evolutionChain: {};
  evolutionList: EvolutionList[];

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.nameParam = this.activatedRoute.snapshot.paramMap.get('name') || '';
    this.getPokemonDetails(this.nameParam);
    this.getPokemonEvolutions(this.nameParam);

    this.activatedRoute.params.subscribe((params) => {
      this.getPokemonDetails(params['name']);
    });
  }

  getPokemonDetails(name: string): void {
    this.apiService
      .getPokemonDetails(name)
      .subscribe((pokemon) => (this.pokemon = pokemon));
  }

  getPokemonEvolutions(name: string): void {
    this.apiService
      .getPokemonEvolutionUrl(name)
      .subscribe((species) =>
        this.getPokemonEvolutionChain(species.evolution_chain.url)
      );
  }

  getPokemonEvolutionChain(url: string): void {
    this.apiService
      .getData(url)
      .subscribe(
        (evolutions) =>
          (this.evolutionList = this.getEvolutions(evolutions.chain))
      );
  }

  getPokemonImage(name: string) {
    let image: string | undefined | null = '';
    this.apiService
    .getPokemonDetails(name)
    .subscribe((pokemon) => image = pokemon.sprites.front_default);

    return image;
  }

  getEvolutions(evolutionChainData: EvolutionChain) {
    let evoChain = [];
    do {
      let numberOfEvolutions = evolutionChainData?.['evolves_to'].length;

      evoChain.push({
        name: evolutionChainData?.species.name,
        url: evolutionChainData?.species.url,
        image: this.getPokemonImage(evolutionChainData?.species.name),
      });

      if (numberOfEvolutions > 1) {
        for (let i = 1; i < numberOfEvolutions; i++) {
          evoChain.push({
            name: evolutionChainData.evolves_to[i].species.name,
            url: evolutionChainData.evolves_to[i].species.url,
            image: this.getPokemonImage(evolutionChainData?.evolves_to[i]?.species.name),
          });
        }
      }

      evolutionChainData = evolutionChainData?.['evolves_to'][0];
    } while (
      !!evolutionChainData &&
      evolutionChainData.hasOwnProperty('evolves_to')
    );
    return evoChain;
  }
}
