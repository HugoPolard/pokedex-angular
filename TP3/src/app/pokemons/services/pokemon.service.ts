import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';


import { PagedData } from '../models/paged-data.model';
import { Pokemon } from '../models/pokemon.model';
import { environment } from 'src/environments/environment';
import { PokemonDetail } from '../models/pokemon-detail.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  
  private pokemonsUrl = "pokemons"

  constructor(private httpClient : HttpClient) {
  }

  getPokemons(limit?: number, offset?: number): Observable<PagedData<Pokemon>> {
    let params = new HttpParams();
    if (limit)
      params = params.set('limit', `${limit}`);
    if (offset)
      params = params.set('offset', `${offset}`);

    console.log("offset : "+offset+"     limite : "+limit)

    return this.httpClient.get<PagedData<Pokemon>>(environment.baseUrl + this.pokemonsUrl, {params});
  }

  getPokemon(id: number): Observable<PokemonDetail> {
    return this.httpClient.get<PokemonDetail>(environment.baseUrl + this.pokemonsUrl + "/" + id);
  }
  
  getPokemonsBySearch(motClé : String) {
    let params = new HttpParams();
    if (motClé)
      params = params.set('search', `${motClé}`);
  
    return this.httpClient.get<PagedData<Pokemon>>(environment.baseUrl + this.pokemonsUrl, {params});
  }
}
