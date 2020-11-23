import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Beer} from '../interfaces/beer';
import {CustomValidator} from './custom-validator';

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
   * Function to emit event to cancel process
   */
  cancel(): void {
    this._cancel$.emit();
  }

  /**
   * Function to emit event to submit form and person
   */
  submit(beer: Beer): void {
    this._submit$.emit(beer);
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

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
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
      fermentation: new FormControl(),
      bitterness: new FormControl(),
      thirst: new FormControl(),
      degree: new FormControl('', Validators.compose([
        Validators.required, Validators.pattern("^[0-9]*$"), CustomValidator.degree
      ]))
    });
  }
}
