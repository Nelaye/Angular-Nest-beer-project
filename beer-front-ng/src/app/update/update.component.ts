import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {DialogComponent} from '../shared/dialog/dialog.component';
import {ActivatedRoute, Router} from '@angular/router';
import {filter, map, mergeMap, tap} from 'rxjs/operators';
import {BeerService} from '../shared/service/beer.service';
import {Beer} from '../shared/interfaces/beer';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  // private property to store dialog reference
  private _beerDialog: MatDialogRef<DialogComponent>;

  /**
   * Component constructor
   */
  constructor(private _route: ActivatedRoute, private _router: Router, private _beerService: BeerService, private _dialog: MatDialog) {
  }

  /**
   * OnInit implementation
   */
  ngOnInit(): void {
    this._route.params
      .pipe(
        map((params: any) => params.id),
        mergeMap((id: string) => this._beerService.fetchOne(id)),
      )
      .subscribe((beer: Beer) => this._initModal(beer));

  }

  /**
   * Initialize modal process
   */
  private _initModal(beer: Beer): void {
    // create modal with initial data inside
    this._beerDialog = this._dialog.open(DialogComponent, {
      width: '500px',
      disableClose: true,
      data: beer
    });

    // subscribe to afterClosed observable to set dialog status and do process
    this._beerDialog.afterClosed()
      .pipe(
        filter(_ => !!_),
        tap(_ => console.log(_.id)),
        map((_: Beer) => {
          // get person id
          const id = _.id;
          // delete obsolete attributes in original object which are not required in the API
          delete _.id;

          return { id, update: _ };
        }),
        tap(_ => console.log(_.id)),
        mergeMap(_ => this._beerService.update(_.id, _.update))
      )
      .subscribe(
        () => undefined,
        () => this._router.navigate([ '/fridge' ]),
        () => this._router.navigate([ '/fridge' ])
      );
  }
}
