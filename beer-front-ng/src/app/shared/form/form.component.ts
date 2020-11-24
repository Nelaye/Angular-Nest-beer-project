import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Beer} from '../interfaces/beer';
import {CustomValidator} from './custom-validator';
import {stringify} from 'querystring';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, OnChanges {

  // private property to store update mode flag
  private _isUpdateMode: boolean;
  // private property to store model value
  private _model: Beer;
  // private property to store cancel$ value
  private readonly _cancel$: EventEmitter<void>;
  // private property to store submit$ value
  private readonly _submit$: EventEmitter<Beer>;
  // private property to store form value
  private readonly _form: FormGroup;

  constructor() {
    this._submit$ = new EventEmitter<Beer>();
    this._cancel$ = new EventEmitter<void>();
    this._form = this._buildForm();
  }

  /**
   * Sets private property _model
   */
  @Input()
  set model(model: Beer) {
    this._model = model;
  }

  /**
   * Returns private property _model
   */
  get model(): Beer {
    return this._model;
  }

  /**
   * Returns private property _form
   */
  get form(): FormGroup {
    return this._form;
  }

  /**
   * Returns private property _isUpdateMode
   */
  get isUpdateMode(): boolean {
    return this._isUpdateMode;
  }

  /**
   * Returns private property _cancel$
   */
  @Output('cancel')
  get cancel$(): EventEmitter<void> {
    return this._cancel$;
  }

  /**
   * Returns private property _submit$
   */
  @Output('submit')
  get submit$(): EventEmitter<Beer> {
    return this._submit$;
  }

  /**
   * Function to emit event to cancel process
   */
  cancel(): void {
    this._cancel$.emit();
  }

  /**
   * Function to emit event to submit form and person
   */
  submit(beer: Beer): void {
    beer.bitterness = +beer.thirst; // convertion to number (without "")
    beer.thirst = +beer.bitterness;
    this._submit$.emit(beer);
  }

  ngOnInit(): void {
  }

  ngOnChanges(record): void {
    if (record.model && record.model.currentValue) {
      this._model = record.model.currentValue;
      this._isUpdateMode = true;
    } else {
      this._model = {
        name: '',
        brewery: '',
        country: '',
        degree: 0,
        fermentation: '',
        bitterness: 0,
        thirst: 0,
        observation: ''
      };
      this._isUpdateMode = false;
    }

    // update form's values with model
    this._form.patchValue(this._model);
  }

  /**
   * Function to build our form
   */
  private _buildForm(): FormGroup{

    return new FormGroup({

      name: new FormControl('', Validators.compose([
        Validators.required, Validators.minLength(2)
      ])),
      country: new FormControl('', Validators.compose([
        Validators.minLength(2)
      ])),
      brewery: new FormControl( '', Validators.compose([
        Validators.minLength(2)
      ])),
      observation: new FormControl('', Validators.compose([
        Validators.minLength(2)
      ])),
      fermentation: new FormControl(''),
      bitterness: new FormControl( 0, Validators.compose([
        Validators.pattern('^[0-9]??[.]??[0-9]*$')
      ])),
      thirst: new FormControl( 0, Validators.compose([
        Validators.pattern('^[0-9]??[.]??[0-9]*$')
      ])),
      degree: new FormControl(0, Validators.compose([
        Validators.required, Validators.pattern('^[0-9]*$'), CustomValidator.degree
      ]))
    });
  }
}
