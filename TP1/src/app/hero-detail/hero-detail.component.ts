import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../models/hero.model';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'sw-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  @Input()
  hero: Hero | undefined;
  private route : ActivatedRoute;
  private location : Location;

  constructor(route : ActivatedRoute, location : Location, private heroService : HeroService ) {
    this.route = route;
    this.location = location;
  }

  getHero() {
    if (this.route != null) {
      let id = this.route.snapshot.paramMap.get('id');
      if (id != null)
        this.heroService.getHero(+id).subscribe(hero => this.hero = hero);
    }
     
  }

  ngOnInit(): void {
    this.getHero();
  }

  goBack() : void {
    this.location.back();
  }

}
