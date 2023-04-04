import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  public url="http://localhost:3000/users"
  getUserData(){
    return this.http.get(this.url)
  }

  postUserData(data:any){
    return this.http.post(this.url,data)
  }

  deleteUserData(id:any){
    return this.http.delete(this.url + "/" + id)
  }
  // getUserById(id:any){
  //   return this.http.get(this.url + "/" + id)
  // }

  updateUser(id:any,data:any){
    return this.http.put(this.url + "/" + id,data)
  }
}
