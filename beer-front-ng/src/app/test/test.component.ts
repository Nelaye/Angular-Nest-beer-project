import { Component, OnInit } from '@angular/core';
import {Beer} from '../shared/interfaces/beer';
import {BEERS} from '../static/beers';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {DialogComponent} from '../shared/dialog/dialog.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  private _beers: Beer[];

  // private property to store dialog reference
  private _peopleDialog: MatDialogRef<DialogComponent>;


  constructor(private _dialog: MatDialog) {
    this._beers = BEERS;
  }

  ngOnInit(): void {
  }

  /**
   * Returns private property _people
   */
  get beers(): Beer[] {
    return this._beers;
  }

  /**
   * Function to display modal
   */
  showDialog(): void {
    // open modal
    this._peopleDialog = this._dialog.open(DialogComponent, {
      width: '500px',
      disableClose: true
    });
  }
}
