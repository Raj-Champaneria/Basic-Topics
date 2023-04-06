import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Helper } from '../helper';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private http:HttpClient) { }
  public url="http://localhost:3000/helper"

  //To get the data
  get(){
    return this.http.get(this.url)
  }
  
  //to post the Data
  post(data:any){
   return this.http.post(this.url,data)
  }
  //to delete the Data
  delete(id:any){
    return this.http.delete(this.url +"/"+id )
  }

  //to get data on click of edit 
  getById(id:any){
    return this.http.get(this.url +"/"+id )
  }

  //to update the data on click of Update
  put(id:any,body:any){
    return this.http.put(this.url +"/"+id ,body)
  }
}
