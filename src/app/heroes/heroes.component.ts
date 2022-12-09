import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

getHeroes(): void{
  this.heroes = this,heroService.getHeroes();
}

export class HeroesComponent implements OnInit {

  heroes: HEROES[] = [];
  selectedHero?: Hero;

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}