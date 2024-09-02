import { Component } from '@angular/core';
import { Hero } from '../heroe';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HEROES } from '../mock-heroes';
import { HeroesServiceService } from '../service/heroes-service.service';
import { NgIf, NgFor, UpperCasePipe } from '@angular/common';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { MessagesComponent } from '../messages/messages.component';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NgFor,
    NgIf,
    NgFor,
    UpperCasePipe,
    HeroDetailComponent,
    MessagesComponent
],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
})
export class HeroesComponent {
  selectedHero?: Hero;

  heroes: Hero[] = [];

  constructor(private HeroesServiceService: HeroesServiceService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.HeroesServiceService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}
