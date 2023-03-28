import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  public tablearr = [
    { id: 1, name: "raj champaneria", salary: 7000, technology: "JS", email: "raj@gmail.com", contact: 9429329596, password: "raj", confirm_password: "raj" },
    { id: 2, name: "raj champaneria", salary: 7000, technology: "JS", email: "raj@gmail.com", contact: 9429329596, password: "raj", confirm_password: "raj" },
    { id: 3, name: "raj champaneria", salary: 7000, technology: "JS", email: "raj@gmail.com", contact: 9429329596, password: "raj", confirm_password: "raj" },
    { id: 4, name: "raj champaneria", salary: 7000, technology: "JS", email: "raj@gmail.com", contact: 9429329596, password: "raj", confirm_password: "raj" },
    { id: 5, name: "raj champaneria", salary: 7000, technology: "JS", email: "raj@gmail.com", contact: 9429329596, password: "raj", confirm_password: "raj" },
  ]
  public returndata: any
  public tempdata: any;
  newobj: any;
  localdata:any;
  constructor() { }
  getData() {
    if (localStorage.length == 0) {
      localStorage.setItem("name1", JSON.stringify(this.tablearr))
      return this.tablearr
    }
    else {
      this.returndata = localStorage.getItem("name1")
      return JSON.parse(this.returndata)
    }
  }
  public delete_emp: any;
  addemp(data:any){
    this.localdata=localStorage.getItem("name1")
    this.newobj=JSON.parse(this.localdata)
    this.newobj.push(data)
    localStorage.setItem("name1",JSON.stringify(this.newobj))
  }
  deleteEmployee(id: any) {
    this.returndata=localStorage.getItem("name1")
    this.tempdata=JSON.parse(this.returndata)
    console.log(this.tempdata);
    this.newobj=this.tempdata.find((Element: { id: any; })=>Element.id==id)
    console.log(this.newobj);
    this.tempdata.splice(this.tempdata.indexOf(this.newobj),1)
    localStorage.setItem("name1", JSON.stringify(this.tempdata))
    this.returndata = localStorage.getItem("name1")
    return JSON.parse(this.returndata)
  } 
}
