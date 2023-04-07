import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public ispressed = false
  public userData: any;
  id: any;
  editedData: any;
  constructor(private service: UserService) { }
  public toggle: boolean = false
  ngOnInit() {
    this.getUserData()
  }
  openform(btnValue: any) {
    this.ispressed = btnValue
    this.toggle = btnValue
  }
  closeform(btnValue: any) {
    this.ispressed = btnValue
    this.toggle = btnValue
  }

  getUserData() {
    this.service.getUser().subscribe(res => {this.userData = res})
  }
  postUser(employeData: any) {
    this.service.postUser(employeData).subscribe(data => {this.getUserData()})
  }
  deleteUser(deletedid: any) {
    this.service.deleteUser(deletedid).subscribe(res => {this.getUserData()})
  }

  editUser(id: any) {
    this.service.getEditedData(id).subscribe(res => this.editedData = res)
    this.id = id
  }
  updateUser(updateddata: any) {
    this.service.UpdateUser(this.id, updateddata).subscribe(res=>{this.getUserData()})
  }
}
