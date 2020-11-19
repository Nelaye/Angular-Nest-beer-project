import { Component, OnInit } from '@angular/core';
import {Beer} from '../shared/interfaces/beer';
import { ActivatedRoute } from '@angular/router';
import {merge} from 'rxjs';
import {filter, mergeMap, tap} from 'rxjs/operators';
import {BeerService} from '../shared/service/beer.service';

@Component({
  selector: 'app-beer',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.css']
})
export class BeersComponent implements OnInit {
  private _beer: Beer;

  constructor( private _beerService: BeerService, private _route: ActivatedRoute) {
    this._beer = {} as Beer;
  }

  /**
   * Returns private property _person
   */
  get beer(): Beer {
    return this._beer;
  }

  /**
   * OnInit implementation
   */
  ngOnInit(): void {
    merge(
      this._route.params.pipe(
        filter(params => !!params.id),
        mergeMap(params => this._beerService.fetchOne(params.id)),
        tap()
      ),
      this._route.params.pipe(
        filter(params => !params.id),
        mergeMap(_ => this._beerService.fetchRandom()),
        tap()
      )
    )
      .subscribe(
        (beer: any) => this._beer = beer,
        () => {
          // manage error when user doesn't exist in DB
          this._beer = this._beerService.defaultBeer;

        }
      );
  }

}
