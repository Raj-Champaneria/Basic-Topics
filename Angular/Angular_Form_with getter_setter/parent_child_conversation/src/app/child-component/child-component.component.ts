import { Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,} from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent {


  private _name!: string;
  private _dob!: string;
  @Input()
  get name(): string {
    return this._name;
  }

  set name(val: string) {
    this._name = val;
    if (val) {
      this.uname= val.charAt(0).toUpperCase() + val.substring(1).toLowerCase();
    }
  }
  @Input()
  get dob(): string {
    return this._dob;
  }

  set dob(date:string) {
    this._dob = date;
    this.age = this.getAge(date);
    
    if (this.age > 10 && this.age < 30) {
      this.message = 'You are kid';
    } else {
      this.message = 'you are Mature';
    }
  }
  age!: number;
  message!: string;
  uname!: string;
  constructor() {}

  @Output() callparentFunc:EventEmitter<any>=new EventEmitter<any>()
  private getAge(dateOfBirth: string):number {
    const dob = new Date(dateOfBirth).getTime();
    const currentDate = new Date().getTime();
    return Math.floor((currentDate - dob) / (1000 * 60 * 60 * 24 * 365));
  }
  public onclick(){
    let obj={
      name:this.name,
      dateofbirth:this.dob
    }
    this.callparentFunc.emit(obj)
  }
}
