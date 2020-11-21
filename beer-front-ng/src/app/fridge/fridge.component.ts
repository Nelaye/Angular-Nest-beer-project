import { Component, OnInit } from '@angular/core';
import { Beer } from '../shared/interfaces/beer';
import { BEERS } from '../static/beers';


@Component({
  selector: 'app-fridge',
  templateUrl: './fridge.component.html',
  styleUrls: ['./fridge.component.css']
})
export class FridgeComponent implements OnInit {
  // private property to store beers value
  private _beers: Beer[];
  private _beer: Beer;

  constructor() {
    this._beers = BEERS;
    this._beer = this._beers[0];
  }

  /**
   * Returns private property _people
   */
  get beers(): Beer[] {
    return this._beers;
  }

  get beerOne(): Beer{
    return this._beer;
  }

  ngOnInit(): void {
  }

}
