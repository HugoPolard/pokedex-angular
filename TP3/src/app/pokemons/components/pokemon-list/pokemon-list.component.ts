import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  
  pokemons: Pokemon[];
  offset = 0;
  limite = 20;
  limiteMax = 150;

  @Output() getPokemonDetailEvent = new EventEmitter<Pokemon>();

  constructor(private pokemonService : PokemonService) { 
    this.pokemons = [];
  }

  ngOnInit(): void {
    this.pokemonService.getPokemons(20, 0).subscribe(pokemonsReturned => pokemonsReturned.data.forEach(pokemon => {this.pokemons.push(pokemon)}));
    this.offset += 20;
  }

  onScroll(): void {
    console.log("SCROLL")
    if (this.offset < this.limiteMax && this.limite <= this.limiteMax) {
      this.pokemonService.getPokemons(this.limite, this.offset).subscribe(pokemonsReturned => pokemonsReturned.data.forEach(pokemon => {this.pokemons.push(pokemon)}));
      this.offset += 20;
    }
  }

  getPokemonDetail(pokemon: Pokemon) {
    this.getPokemonDetailEvent.emit(pokemon);
  }

  searchPokemon(motClé: string): void {
    if (motClé != undefined && motClé != '') {
        this.pokemonService.getPokemonsBySearch(motClé).subscribe(pokemonsReturned => pokemonsReturned.data.forEach(pokemon => {this.pokemons.push(pokemon)}));
        this.offset += 20;
    }
    else {
      this.pokemonService.getPokemons(20, 0).subscribe(pokemonsReturned => pokemonsReturned.data.forEach(pokemon => {this.pokemons.push(pokemon)}));
      this.offset += 20;
    }
  }

}
