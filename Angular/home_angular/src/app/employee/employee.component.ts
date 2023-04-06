import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  public ispressed=false
  public employelist:any
  editeddata: any;
  id: any;
  constructor(private service:EmployeeService) { }
  openform(btnValue:any){
    this.ispressed=btnValue
  }
  closeform(btnvalue:any){
    this.ispressed=btnvalue
  }
  ngOnInit():void {
    this.service.getEmployee().subscribe(res=>this.employelist=res)
  }
  getEmployeeData(){
    this.service.getEmployee().subscribe(res=>this.employelist=res)
  }
  postEmployeData(data:any){
    // console.log(data)
    this.service.postEmployeData(data).subscribe(res=>res)
    this.service.getEmployee().subscribe(res=>this.employelist=res)
  }

  deleteEmployeData(empid:any){
    this.service.deleteEmployeeData(empid).subscribe(res=>res)
   this.getEmployeeData()
  }

  editData(id:any){
    this.service.getDataById(id).subscribe(res=>this.editeddata=res)
    this.id=id
  }

  UpdateEmployeData(updateddata:any){
    this.service.updateEmployeeData(this.id,updateddata).subscribe(res=>res)
    this.service.getEmployee().subscribe(res=>this.employelist=res)
  }
}
