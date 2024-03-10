import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Pokemon } from '../types/pokemon';
import { CommonModule } from '@angular/common';
import { EvolutionChain, EvolutionList } from '../types/evolution.chain';
import { RemoveHyphensAndCapitalize } from '../remove.hyphens.pipe';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, RouterModule, RemoveHyphensAndCapitalize],
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
          (this.evolutionList = this.parseEvolutions(evolutions.chain))
      );
  }

  parseEvolutions(evolutionChainData: EvolutionChain) {
    let evoChain: EvolutionList[] = [];
    do {
      let numberOfEvolutions = evolutionChainData?.['evolves_to'].length;

      this.apiService
        .getPokemonDetails(evolutionChainData?.species.name)
        .subscribe((pokemon) => {
          let element = {
            name: pokemon?.species.name,
            url: pokemon?.species.url,
            image: pokemon?.sprites?.front_default,
          };
          evoChain.push(element);
        });

      if (numberOfEvolutions > 1) {
        for (let i = 1; i < numberOfEvolutions; i++) {
          this.apiService
            .getPokemonDetails(evolutionChainData.evolves_to[i].species.name)
            .subscribe((pokemon) => {
              let element = {
                name: pokemon?.species.name,
                url: pokemon?.species.url,
                image: pokemon?.sprites?.front_default,
              };
              evoChain.push(element);
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
