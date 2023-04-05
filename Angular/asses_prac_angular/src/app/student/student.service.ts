import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  public url="http://localhost:3000/Students"
  //GetCall
  get(){
    return this.http.get(this.url)
  }

  delete(id:any){
    return this.http.delete(this.url + "/"+ id)
  }

}
