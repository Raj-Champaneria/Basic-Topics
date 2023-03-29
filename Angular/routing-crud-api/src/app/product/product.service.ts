import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient,private router:Router) { }
  url:any="http://localhost:3000/product"
  getData(){
    return this.http.get(this.url)
  }
  postData(data:any){
    this.router.navigate(['/product-list'])
    return this.http.post(this.url,data)
  }
  delete(id:any){
    return this.http.delete(this.url+"/"+id)
  }

  getbyId(id:any){
    return this.http.get(this.url+"/"+id)
  }
  putData(id:any,data:any){
    return this.http.put(this.url+"/"+id,data)
  }
}
