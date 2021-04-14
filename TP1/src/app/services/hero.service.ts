import { Injectable } from '@angular/core';
import { Hero } from '../models/hero.model';
import { HEROES } from '../mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private http : HttpClient;
  private baseUrl = "http://app-ec21e68e-3e55-42d7-b1ae-3eef7507a353.cleverapps.io";
  private heroesUrl = "api/heroes"

  private log(message: string): void {
    this.messageService.add(`HeroService: ${message}`);
  }

  constructor(private messageService : MessageService, httpClient : HttpClient) {
    this.http = httpClient;
  }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(ev => this.log('HeroService: fetched heroes')),
        catchError(this.handleError<Hero[]>('getHeroes', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T): (error: any) => Observable<T> {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getHero(id : number): Observable<Hero | undefined> {
    return this.http.get<Hero>( )
      .pipe(
        tap(ev => this.log(`HeroService: fetched hero id=${id}`)),
        catchError(this.handleError<Hero>('getHero'))
      );
  }
}
