import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../student.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public studentList: any;

  constructor(public service:StudentService) { }

  ngOnInit(): void {

    //GetUserCall:Service
    //store response in studentList to iterate the loop in table
    this.service.get().subscribe(res=>this.studentList=res)
  }

  //DeleteCall:service
  deleteStudent(id:any){
    this.service.delete(id).subscribe(res=>this.service.get().subscribe(res=>this.studentList=res))
  }

}
