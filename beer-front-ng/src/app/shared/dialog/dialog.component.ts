import {Component, Inject, OnInit, Optional} from '@angular/core';
import {Beer} from '../interfaces/beer';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(private _dialogRef: MatDialogRef<DialogComponent>, @Optional() @Inject(MAT_DIALOG_DATA) private _beer: Beer) { }

  /**
   * Returns person passed in dialog open
   */
  get beer(): Beer {
    return this._beer;
  }

  ngOnInit(): void {
  }

  /**
   * Function to cancel the process and close the modal
   */
  onCancel(): void {
    this._dialogRef.close();
  }

  /**
   * Function to close the modal and send person to parent
   */
  onSave(beer: Beer): void {
    this._dialogRef.close(beer);
  }

}
