import { Component, OnInit } from '@angular/core';
import {Beer} from '../shared/interfaces/beer';

@Component({
  selector: 'app-fridge',
  templateUrl: './fridge.component.html',
  styleUrls: ['./fridge.component.css']
})
export class FridgeComponent implements OnInit {
  // private property to store beers value
  private _beers: Beer[];

  constructor() {
    this._beers = [];
  }

  /**
   * Returns private property _people
   */
  get beers(): Beer[] {
    return this._beers;
  }

  ngOnInit(): void {
  }

}
