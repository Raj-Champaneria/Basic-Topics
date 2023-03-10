// with Onchanges
// import {
//   Component,
//   EventEmitter,
//   Input,
//   OnChanges,
//   OnInit,
//   Output,
//   SimpleChanges,
// } from '@angular/core';

// @Component({
//   selector: 'app-form',
//   templateUrl: './form.component.html',
//   styleUrls: ['./form.component.css'],
// })
// export class FormComponent implements OnChanges {
//   // public obj={
//   //   name:"raj",
//   //   age:22
//   // }
//   // p2c
//   // @Input() name:any

//   //c2pn
//   // @Output() myfunc:EventEmitter<any>=new EvetEmitter();
//   // sendData(){
//   //   this.myfunc.emit(this.obj)
//   // }

//   @Input() name!: string;
//   @Input() dob!: string;

//   age!: number;
//   message!: string;
//   uname!: string;
//   constructor() {}

//   ngOnChanges(changes: SimpleChanges): void {
//     if (changes['dob']) {
//       this.age = this.getAge(this.dob);

//       if (this.age > 10 && this.age < 30) {
//         this.message = 'You are kid';
//       } else {
//         this.message = 'you are Mature';
//       }
//     }
//     if (changes['name'] && changes['name'].currentValue) {
//       this.uname = this.name.charAt(0).toUpperCase() + this.name.substring(1);
//     }
//   }

//   private getAge(dateOfBirth: string) {
//     const dob = new Date(dateOfBirth).getTime();
//     const currentDate = new Date().getTime();
//     return Math.floor((currentDate - dob) / (1000 * 60 * 60 * 24 * 365));
//   }
// }

// with getter-setter
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent  {


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

 


  private getAge(dateOfBirth: string):number {
    const dob = new Date(dateOfBirth).getTime();
    const currentDate = new Date().getTime();
    return Math.floor((currentDate - dob) / (1000 * 60 * 60 * 24 * 365));
  }

 
}
