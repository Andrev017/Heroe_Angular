import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../heroe';
import { HEROES } from '../mock-heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroesServiceService {
  constructor () {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }
}
