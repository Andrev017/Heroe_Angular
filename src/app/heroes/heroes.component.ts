import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroe';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroesServiceService } from '../service/heroes-service.service';
import { NgIf, NgFor, UpperCasePipe } from '@angular/common';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { MessagesComponent } from '../messages/messages.component';
import { RouterModule } from '@angular/router';

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
    MessagesComponent,
    RouterModule,
  ],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
})
export class HeroesComponent implements OnInit {
  selectedHero?: Hero;

  heroes: Hero[] = [];

  constructor(private HeroesServiceService: HeroesServiceService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.HeroesServiceService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
}
