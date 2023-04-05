import { Component, OnInit } from '@angular/core';
import { HelperService } from './helper.service';
import { Helper } from '../helper';

@Component({
  selector: 'app-helper',
  templateUrl: './helper.component.html',
  styleUrls: ['./helper.component.css']
})
export class HelperComponent implements OnInit {

  public toggle: boolean = false
  public helperlist: any;
  editedData: any;
  id: any;
  constructor(private service: HelperService) { }
  ngOnInit(): void {
    this.getData()
  }

  callform(data: any) {
    this.toggle = data
  }

  closeform(data: any) {
    this.toggle = data
  }

  getData() {
    this.service.get().subscribe((res) => this.helperlist = res)
  }

  postform(data: any) {
    this.service.post(data).subscribe(res => res)
    this.getData()
    console.log(data)
  }
  deleteHelper(id: any) {
    this.service.delete(id).subscribe(res => res)
    this.getData()
  }
  editData(id: any) {
    this.id = id
    this.service.getById(id).subscribe(res => this.editedData = res)
  }

  updateData(body: any) {
    this.service.put(this.id, body).subscribe(res => res)
    this.getData()
  }
}
