import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent implements OnInit {
  pokemon: any;
  name: string | null = null;

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.name = this.activatedRoute.snapshot.paramMap.get('name');
    this.getPokemonDetails();
    console.log('OI', this.pokemon);
  }

  getPokemonDetails(): void {
    this.apiService
      .get<any>(`pokemon/${this.name}`)
      .subscribe((pokemon) => (this.pokemon = pokemon));
  }
}
