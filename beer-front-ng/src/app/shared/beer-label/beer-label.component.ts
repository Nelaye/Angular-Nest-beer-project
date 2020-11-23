import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Beer} from '../interfaces/beer';

@Component({
  selector: 'app-beer-label',
  templateUrl: './beer-label.component.html',
  styleUrls: ['./beer-label.component.css']
})
export class BeerLabelComponent implements OnInit {
  // private property to store beer value
  private _beer: Beer;

  private readonly _delete$: EventEmitter<Beer>;

  constructor() {
    this._beer = {} as Beer;
    this._delete$ = new EventEmitter<Beer>();
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

  /**
   * Returns private property _delete$
   */
  @Output('deletePerson') get delete$(): EventEmitter<Beer> {
    return this._delete$;
  }

  /**
   * Function to emit event to delete current person
   */
  delete(beer: Beer): void {
    //this._delete$.emit(beer);
  }


}
