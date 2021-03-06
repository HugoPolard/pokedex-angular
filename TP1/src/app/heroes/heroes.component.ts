import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/hero.model';
import { HeroService } from '../services/hero.service';


@Component({
  selector: 'sw-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  constructor(private heroService : HeroService) { 
    this.heroes = [];
  }

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe(heroesReturned => this.heroes = heroesReturned);
  }

}
