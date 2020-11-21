import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Injectable} from '@angular/core';
import {Beer} from '../interfaces/beer';
import {Observable} from 'rxjs';
import {defaultIfEmpty, filter} from 'rxjs/operators';

@Injectable()
export class BeerService {
  // private property to store all backend URLs
  private readonly _backendURL: any;
  // private property to store default person
  private readonly _defaultBeer: Beer;

  constructor(private _http: HttpClient){

    this._defaultBeer = {
      name: 'water',
      country: 'world',
      brewery: 'ground',
      degree: 0,
      fermentation: 'null',
      bitterness: 0,
      thirst: 2,
      observation: 'Alcohol is water'
    };

    this._backendURL = {};

    // build backend base url
    let baseUrl = `${environment.backend.protocol}://${environment.backend.host}`;
    if (environment.backend.port) {
      baseUrl += `:${environment.backend.port}`;
    }

    // build all backend urls
    Object.keys(environment.backend.endpoints).forEach(k => this._backendURL[ k ] = `${baseUrl}${environment.backend.endpoints[ k ]}`);
  }

  /**
   * Returns private property _defaultBeer
   */
  get defaultBeer(): Beer {
    return this._defaultBeer;
  }

  /**
   * Function to return list of beer
   */
  fetch(): Observable<Beer[]> {
    return this._http.get<Beer[]>(this._backendURL.allBeers)
      .pipe(
        filter(_ => !!_),
        defaultIfEmpty([])
      );
  }

  /**
   * Function to return one random beer from people list
   */
  fetchRandom(): Observable<Beer> {
    return this._http.get<Beer>(this._backendURL.randomBeer)
      .pipe(
        filter(_ => !!_),
        defaultIfEmpty(this._defaultBeer)
      );
  }

  /**
   * Function to return one beer for current id
   */
  fetchOne(id: string): Observable<Beer> {
    return this._http.get<Beer>(this._backendURL.oneBeer.replace(':id', id));
  }

}
