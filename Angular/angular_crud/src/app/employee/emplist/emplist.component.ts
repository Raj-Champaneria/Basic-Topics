import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css'],

  viewProviders:[CrudService]
})
export class EmplistComponent implements OnInit {

  constructor(private service:CrudService) { }
  

  
  public tablehead=this.service.tablehead;
  public obj:any;
  public tableArr=this.service.getemployee();
  ngOnInit(): void {
    console.log(this.tableArr);
  }
  removeemployee(id:any){
    this.service.remove(id)
  }
  
}
