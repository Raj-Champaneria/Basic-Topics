import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  public url="http://localhost:3000/emp"
  getEmployee(){
    return this.http.get(this.url)
  }
  postEmployeData(data:any){
    return this.http.post(this.url,data)
  }

  deleteEmployeeData(empid:any){
    return this.http.delete(this.url +"/"+empid)
  }

  getDataById(id:any){
    return this.http.get(this.url +"/"+id)
  }

  updateEmployeeData(id:any,updatedData:any){
    return this.http.put(this.url +"/"+id,updatedData)
  }
}
