import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiService } from '../api.service';
import { ListComponent } from './list.component';
import { of } from 'rxjs';
import { List } from '../types/list';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let apiService: ApiService;
  let getListSpy: List;

  const mockList: List = {
    count: 1302,
    next: 'https://pokeapi.co/api/v2/pokemon?offset=20&limit=10',
    previous: null,
    results: [
      {
        name: 'bulbasaur',
        url: 'https://pokeapi.co/api/v2/pokemon/1/',
        image: 'sprite.jpg',
      },
      {
        name: 'ivysaur',
        url: 'https://pokeapi.co/api/v2/pokemon/2/',
        image: 'sprite.jpg',
      },
      {
        name: 'venusaur',
        url: 'https://pokeapi.co/api/v2/pokemon/3/',
        image: 'sprite.jpg',
      },
      {
        name: 'charmander',
        url: 'https://pokeapi.co/api/v2/pokemon/4/',
        image: 'sprite.jpg',
      },
      {
        name: 'charmeleon',
        url: 'https://pokeapi.co/api/v2/pokemon/5/',
        image: 'sprite.jpg',
      },
      {
        name: 'charizard',
        url: 'https://pokeapi.co/api/v2/pokemon/6/',
        image: 'sprite.jpg',
      },
      {
        name: 'squirtle',
        url: 'https://pokeapi.co/api/v2/pokemon/7/',
        image: 'sprite.jpg',
      },
      {
        name: 'wartortle',
        url: 'https://pokeapi.co/api/v2/pokemon/8/',
        image: 'sprite.jpg',
      },
      {
        name: 'blastoise',
        url: 'https://pokeapi.co/api/v2/pokemon/9/',
        image: 'sprite.jpg',
      },
      {
        name: 'caterpie',
        url: 'https://pokeapi.co/api/v2/pokemon/10/',
        image: 'sprite.jpg',
      },
    ],
  };

  beforeEach(async () => {
    const apiServiceSpy = jasmine.createSpyObj('ApiService', ['getFirstPage']);
    getListSpy = apiServiceSpy.getFirstPage.and.returnValue(of(mockList));

    await TestBed.configureTestingModule({
      imports: [ListComponent],
      providers: [{ provide: ApiService, useValue: apiServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    apiService = TestBed.inject(ApiService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch ten items on init', () => {
    expect(apiService.getFirstPage).toHaveBeenCalled();
    expect(component.pokemon.results.length).toBe(10);
    expect(component.pokemon).toEqual(mockList);
  });

  it('should have prev and/or next buttons enabled', () => {
    expect(component.pokemon.previous || component.pokemon.next).toBeDefined();
  });
});
