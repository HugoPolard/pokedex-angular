import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import  {MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { FormsModule } from '@angular/forms';

import { PokemonsRoutingModule } from './pokemons-routing.module';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { PokedexComponent } from './components/pokedex/pokedex.component';



@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonDetailComponent,
    PokedexComponent
  ],
  imports: [
    CommonModule,
    PokemonsRoutingModule,
    MatListModule, 
    MatChipsModule,
    MatCardModule,
    MatGridListModule,
    InfiniteScrollModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
  ]
})
export class PokemonsModule { }
