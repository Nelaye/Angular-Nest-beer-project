import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {User} from '../interfaces/user';
import {Observable} from 'rxjs';
import {defaultIfEmpty, filter} from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
  }
)
export class UserService {

  private readonly _backendURL: any;
  private readonly _defaultUser: User;

  constructor(private _http: HttpClient){

    this._defaultUser = {
      firstname: 'John',
      lastname: 'Boisson',
      email: 'jaimeboire@gmail.com',
      beers:[
        {
          name: 'water',
          country: 'world',
          brewery: 'ground',
          degree: 0,
          fermentation: 'null',
          bitterness: 0,
          thirst: 2,
          observation: 'Alcohol is water'
        }
      ]

    };

    /*
    this._backendURL = {};

    // build backend base url
    let baseUrl = `${environment.backend.protocol}://${environment.backend.host}`;
    if (environment.backend.port) {
      baseUrl += `:${environment.backend.port}`;
    }

    // build all backend urls
    Object.keys(environment.backend.endpoints).forEach(k => this._backendURL[ k ] = `${baseUrl}${environment.backend.endpoints[ k ]}`);

     */

  }

  get defaultUser(){
    return this._defaultUser;
  }

  /**
   * Function to return list of user
   */
  fetch(): Observable<User[]> {

    return this._http.get<User[]>(this._backendURL.allUsers)
      .pipe(
        filter(_ => !!_),
        defaultIfEmpty([])
      );
  }

  /**
   * Function to return one random beer from beer list
   */
  fetchRandom(): Observable<User> {
    return this._http.get<User>(this._backendURL.randomUser)
      .pipe(
        filter(_ => !!_),
        defaultIfEmpty(this._defaultUser)
      );
  }

}
