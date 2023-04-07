import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  public url:any=" http://localhost:3000/users"

  getUser(){
    return this.http.get(this.url)
  }
  postUser(userdata:any){
    return this.http.post(this.url,userdata)
  }

  deleteUser(id:any){
    return this.http.delete(this.url+"/"+id)
  }

  getEditedData(id:any){
    return this.http.get(this.url+"/"+id)
  }

  UpdateUser(id:any,updateddata:any){
    return this.http.put(this.url+"/"+id,updateddata)
  }
}
