import { Component, OnInit } from '@angular/core';
import {Beer} from '../shared/interfaces/beer';
import {BEERS} from '../static/beers';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {DialogComponent} from '../shared/dialog/dialog.component';
import {BeerService} from '../shared/service/beer.service';
import {filter, map, mergeMap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {PageEvent} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {User} from '../shared/interfaces/user';
import {UserService} from '../shared/service/user-service';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-test',
  templateUrl: './fridge.component.html',
  styleUrls: ['./fridge.component.css']
})
export class FridgeComponent implements OnInit {

  private _beers: Beer[];

  private _currentUser: User;

  private _dialogStatus: string;
  private _beerDialog: MatDialogRef<DialogComponent>;

  // number of beer per page
  private _pageSize: number;
  // current page of the paginator
  private index: number;
  private mtds: MatTableDataSource<Beer[]>;


  constructor(private toolBar: AppComponent, private _dialog: MatDialog, private _beerService: BeerService, private _userService: UserService) {
    this._beers = [] as Beer[];

    this._currentUser = {} as User;

    this._dialogStatus = 'inactive';
    this._pageSize = 8;
    this.mtds = new MatTableDataSource<Beer[]>();
    this.index = 0;
  }

  ngOnInit(): void {
    this._beerService
      .fetch().subscribe((beers: Beer[]) => this._beers = beers); // get beers from service
    /*this._userService
      .fetchRandom().subscribe((user: User) => this._currentUser = user);

     */
  }


  /***** Beer Part *****/

  /**
   * Returns private property _people
   */
  get beers(): Beer[] {
    return this._beers;
  }

  get pageSize(): number{
    return this._pageSize;
  }

  /**
   * Add new beer and fetch all beers to refresh the list
   */
  private _add(beer: Beer): Observable<Beer[]> {
    return this._beerService
      .create(beer)
      .pipe(
        mergeMap(_ => this._beerService.fetch())
      );
  }

  /**
   * Function to delete one beer
   */
  delete(beer: Beer): void {
    this._beerService
      .delete(beer.id)
      .subscribe(_ => this._beers = this._beers.filter(__ => __.id !== _));
  }

  /**
   * Function to catch the paginator event
   * @param $event
   */
  pageEvent($event: PageEvent) {
    this.index = $event.pageIndex;
  }

  /**
   * Function to refresh the current array of beer
   */
  refresh() {
    this.mtds.data.shift();
    this.mtds.data.push(this.tab());
  }

  /**
   * Function to fill the current array of beer
   * @private
   */
  private tab(): Beer[] {
    let tab = [] as Beer[];
    for (let i = 0; i < this.pageSize; i++){
      if(this._beers[i+(this.index*this.pageSize)]) {
        tab.push(this._beers[i + (this.index*this.pageSize)]);
      }
    }
    return tab;
  }

  /**
   * Function for the ngFor, return the current of beer
   */
  get binouzes(): Beer[]{
    this.refresh();
    return this.mtds.data.shift();
  }


  /***** User part *****/

  get currentUser(): User{
    return this._currentUser;
  }


  /***** Dialog part *****/

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
  }
}
