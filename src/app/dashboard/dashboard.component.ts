import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { Hero } from '../heroe';
import { RouterModule } from '@angular/router';
import { HeroesServiceService } from '../service/heroes-service.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgFor, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  heroes: Hero[] = [];

  constructor(private HeroesServiceService: HeroesServiceService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.HeroesServiceService
      .getHeroes()
      .subscribe((heroes) => (this.heroes = heroes.slice(1, 5)));
  }
}
