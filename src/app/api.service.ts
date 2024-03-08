import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Pokemon } from './types/pokemon';
import { List } from './types/list';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private baseUrl = 'https://pokeapi.co/api/v2';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getFirstPage(): Observable<List> {
    return this.http
      .get<List>(`${this.baseUrl}/pokemon?limit=10`)
      .pipe(tap((_) => console.log('fetched pokemon list', _)));
  }

  getPokemonDetails(name: string): Observable<Pokemon> {
    return this.http
      .get<Pokemon>(`${this.baseUrl}/pokemon/${name}`)
      .pipe(tap((_) => console.log('fetched pokemon details', _)));
  }

  getPokemonEvolutionUrl(name: string): Observable<any> {
    return this.http
      .get(`${this.baseUrl}/pokemon-species/${name}`)
      .pipe(tap((_) => console.log('fetched pokemon evolutions url', _)));
  }

  getData(url: string): Observable<any> {
    return this.http
      .get(url)
      .pipe(tap((_) => console.log('fetched data', _)));
  }
}
