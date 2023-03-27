import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/crud.service';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css'],
  viewProviders:[CrudService]
})
export class EmplistComponent implements OnInit {

  constructor(private service:CrudService) { }
  public tablearr:any
  ngOnInit(): void {
  this.tablearr=this.service.getData();   
  }
  deleteEmp(id:any){
    this.tablearr=this.service.deleteEmployee(id)
  }
}
