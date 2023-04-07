import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, OnChanges {
  @Output() closeformevent = new EventEmitter
  @Output() postevent = new EventEmitter
  public changebutton: any;
  public togglebutton: any = true
  public headerName: any;

  constructor() {
    this.setvalue()
  }

  setvalue(){
    this.reactiveform = new FormGroup({
      'name': new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z_ ]{3,19}$/)]),
      'description': new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_ ]{3,150}$/)]),
      'status': new FormControl('', Validators.required),
      'rate': new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{1,}$/)]),
      'balance': new FormControl('', [Validators.required, Validators.pattern(/^[-0-9]{1,}$/)]),
    })
    this.changebutton = "Save"
    this.togglebutton = true
    this.headerName = "Add Customer"
  }
  public reactiveform!: FormGroup
  public ispressed: boolean = false
  @Input() editedData: any
  @Output() updateevent = new EventEmitter
  public dropdown = [
    { id: 1, name: "Open" },
    { id: 2, name: "Error" },
    { id: 3, name: "Success" },
    { id: 4, name: "Inactive" }
  ]
  ngOnInit(): void {
    this.reactiveform.reset()
    this.changebutton = "Save"
    this.headerName = "Add Customer"
    this.togglebutton = true
  }
  ngOnChanges() {
    if (this.editedData) {
      this.reactiveform.setValue({
        'name': this.editedData.name,
        'description': this.editedData.description,
        'status': this.editedData.status,
        'rate': this.editedData.rate,
        'balance': this.editedData.balance
      })
      this.changebutton = "UPDATE"
      this.togglebutton = false
      this.headerName = "Update Customer"
    }

  }
  postEmployeeData() {
    this.postevent.emit(this.reactiveform.value)
    this.closeformevent.emit(this.ispressed)
  }

  closeform() {
    this.closeformevent.emit(this.ispressed)
    this.reactiveform.reset()
  }

  UpdateEmployeeData() {
    this.updateevent.emit(this.reactiveform.value)
    this.closeformevent.emit(this.ispressed)
  }
}
