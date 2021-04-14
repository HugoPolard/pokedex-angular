import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';
import { Location } from '@angular/common';
import { PokemonDetail } from '../../models/pokemon-detail.model';


@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})

export class PokemonDetailComponent implements OnInit {

  @Input() pokemonDetail?: PokemonDetail;
  private route : ActivatedRoute;
  private location : Location;

  constructor(route : ActivatedRoute, location : Location, private pokemonService : PokemonService ) {
    this.route = route;
    this.location = location;
  }

  getPokemonDetail() {
    if (this.route != null) {
      let id = this.route.snapshot.paramMap.get('id');
      if (id != null)
        this.pokemonService.getPokemon(+id).subscribe(pokemonDetail => this.pokemonDetail = pokemonDetail);
    }
     
  }

  ngOnInit(): void {
    this.getPokemonDetail();
  }

  goBack() : void {
    this.location.back();
  }

}
