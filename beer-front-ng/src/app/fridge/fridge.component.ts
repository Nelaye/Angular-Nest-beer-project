import { Component, OnInit } from '@angular/core';
import {Beer} from '../shared/interfaces/beer';
import {BEERS} from '../static/beers';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {DialogComponent} from '../shared/dialog/dialog.component';
import {BeerService} from '../shared/service/beer.service';
import {filter, map, mergeMap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './fridge.component.html',
  styleUrls: ['./fridge.component.css']
})
export class FridgeComponent implements OnInit {

  private _beers: Beer[];
  private _dialogStatus: string;

  // private property to store dialog reference
  private _beerDialog: MatDialogRef<DialogComponent>;


  constructor(private _dialog: MatDialog, private _beerService: BeerService) {
    this._beers = BEERS;
    this._dialogStatus = 'inactive';
  }

  ngOnInit(): void {
    /* this._beerService
      .fetch().subscribe((beers: Beer[]) => this._beers = beers); // get beers from service
     */
  }

  /**
   * Returns private property _people
   */
  get beers(): Beer[] {
    return this._beers;
  }

  /**
   * Returns private property _dialogStatus
   */
  get dialogStatus(): string {
    return this._dialogStatus;
  }

  /**
   * Function to display modal
   */
  showDialog(): void {

    this._dialogStatus = 'active';
    // open modal
    this._beerDialog = this._dialog.open(DialogComponent, {
      width: '500px',
      disableClose: true
    });

    /*
    // subscribe to afterClosed observable to set dialog status and do process
    this._beerDialog.afterClosed()
      .pipe(
        filter(_ => !!_),
        map((_: Beer) => {
          // delete obsolete attributes in original object which are not required in the API
          delete _.id;

          return _;
        }),
        mergeMap(_ => this._add(_))
      )
      .subscribe(
        (beers: Beer[]) => this._beers = beers,
        _ => this._dialogStatus = 'inactive',
        () => this._dialogStatus = 'inactive'
      );

     */
  }

  /**
   * Add new beer and fetch all beers to refresh the list
   */
  /*private _add(beer: Beer): Observable<Beer[]> {
    return this._beerService
      .create(beer)
      .pipe(
        mergeMap(_ => this._beerService.fetch())
      );
  }*/

  /**
   * Function to delete one beer
   */
  delete(beer: Beer): void {
    /*this._beerService
      .delete(beer.id)
      .subscribe(_ => this._beers = this._beers.filter(__ => __.id !== _));*/
  }
}
