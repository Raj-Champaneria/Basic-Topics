import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() cancelEvent = new EventEmitter()
  public cancel:boolean=false
  constructor() { }

  ngOnInit(): void {
  }

  formClose(){
    this.cancelEvent.emit(this.cancel)
  }

}
