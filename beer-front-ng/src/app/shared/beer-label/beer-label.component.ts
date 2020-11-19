import {Component, Input, OnInit} from '@angular/core';
import {Beer} from '../interfaces/beer';

@Component({
  selector: 'app-beer-label',
  templateUrl: './beer-label.component.html',
  styleUrls: ['./beer-label.component.css']
})
export class BeerLabelComponent implements OnInit {
  // private property to store beer value
  private _beer: Beer;

  constructor() {
    this._beer = {} as Beer;
  }

  /**
   * Returns private property _beer
   */
  get beer(): Beer {
    return this._beer;
  }

  /**
   * Sets private property _beer
   */
  @Input()
  set beer(beer: Beer) {
    this._beer = beer;
  }

  ngOnInit(): void {
  }

}
