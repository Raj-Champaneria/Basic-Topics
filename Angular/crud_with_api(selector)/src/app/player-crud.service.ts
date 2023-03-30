import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class PlayerCrudService {

  constructor(private http:HttpClient) { }
  url:any="http://localhost:3000/players"
  getData(){
    return this.http.get(this.url)
  }
  postdata(data:any){
    return this.http.post(this.url,data)
  }
  deleteplayer(id:any){
    return this.http.delete(this.url+"/"+id)
  }
  getdatabyid(id:any){
    return this.http.get(this.url+"/"+id)
  }

  updateData(id:any,data:any){
    return this.http.put(this.url+"/"+id,data)
  }
}
