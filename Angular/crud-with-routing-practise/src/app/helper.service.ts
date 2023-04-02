import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HelperService {
  public url:any="http://localhost:3000/helper"
  constructor(private http:HttpClient) { }
  getHelper(){
    return this.http.get(this.url)
  }
  post(data:any){
    return this.http.post(this.url,data)
  }
  delete(id:any){
    return this.http.delete(`${this.url}/${id}`)
  }
  getHelperbyId(id:any){
    return this.http.get(`${this.url}/${id}`)
  }
  putData(id:any,data:any){
    return this.http.put(this.url+"/"+id,data)
  }
}
