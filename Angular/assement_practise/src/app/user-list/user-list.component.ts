import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  data: any;

  constructor(private service:UserService) { }

  @Output() myevent=new EventEmitter;
  
  ngOnInit(): void {
    this.service.getUserData().subscribe(res=>this.data=res)
  }
  delete(id:any){
    this.service.deleteUserData(id).subscribe(res=>this.service.getUserData().subscribe(res=>this.data=res))
  }
  edit(){
    
  }
  sortByAge(){
    this.data=this.data.sort((a:any,b:any)=>{return(a.age-b.age)})
  }
 
  // editUser(id:any){
  //   this.service.getUserById(id).subscribe((res)=>res)
  // }

}
