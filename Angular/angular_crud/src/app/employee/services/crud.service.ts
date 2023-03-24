import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
 

  constructor() { }
  public localdata:any;
  public tablehead=[
    {id:"ID",name:"NAME",field:"FIELD",address:"ADDRESS",contact:"CONTACT",email:"EMAIL",action:"ACTION"}
  ]
  public tableArr=[
    {id:1,name:"raj",field:"frontend",email:"rajchampaneria5@gmail.com",address:"valsad",contact_no:9429329596},
    {id:2,name:"Keval",field:"QA",email:"rajchampaneria5@gmail.com",address:"valsad",contact_no:9773115929},
    {id:3,name:"Mihir",field:".NET",email:"rajchampaneria5@gmail.com",address:"USA",contact_no:9225599855},
    {id:4,name:"Maahi",field:".NET",email:"rajchampaneria5@gmail.com",address:"USA",contact_no:9225599855},
  ]
  
  public obj:any;
  remove(id:any){
      // this.tableArr.splice(id,1);
      this.obj=this.tableArr.find(Element=>Element.id == id)
      console.log(this.obj);
      this.tableArr.splice(this.tableArr.indexOf(this.obj),1)
  }
  // add(obj:any){
  //   console.log("hii")
  // }

  getemployee(){
    if(localStorage.length==0){
      return this.tableArr
    }
    else{
     this.localdata=localStorage.getItem("name");
     JSON.parse(this.localdata).forEach((element: { id: number; name: string; field: string; email: string; address: string; contact_no: number; }) => {
      
       this.tableArr.push(element);
     });
     return this.tableArr;
    }
  }
}
