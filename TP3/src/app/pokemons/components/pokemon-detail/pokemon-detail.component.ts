import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';
import { Location } from '@angular/common';
import { PokemonDetail } from '../../models/pokemon-detail.model';
import { Pokemon } from '../../models/pokemon.model';
import { SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})

export class PokemonDetailComponent implements OnInit {

  @Input() pokemon?: Pokemon;
  pokemonDetail?: PokemonDetail;
  private route : ActivatedRoute;
  private location : Location;

  constructor(route : ActivatedRoute, location : Location, private pokemonService : PokemonService ) {
    this.route = route;
    this.location = location;
  }

  getPokemonDetail(idGiven: number) {
    let id
    if (idGiven == null) {
      if (this.route != null) {
        id = this.route.snapshot.paramMap.get('id');
      }
    }
    else
      id = idGiven

    if (id != null)
      this.pokemonService.getPokemon(+id).subscribe(pokemonDetail => this.pokemonDetail = pokemonDetail);
  }

  ngOnInit(): void {
    this.getPokemonDetail(this.pokemon == undefined ? null : this.pokemon.id);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.pokemon.currentValue && changes.pokemon.previousValue != changes.pokemon.currentValue) {
      this.getPokemonDetail(changes.pokemon.currentValue.id);
    }
  }

  goBack() : void {
    this.location.back();
  }

}
