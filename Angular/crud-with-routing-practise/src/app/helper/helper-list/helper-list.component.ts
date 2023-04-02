import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/helper.service';

@Component({
  selector: 'app-helper-list',
  templateUrl: './helper-list.component.html',
  styleUrls: ['./helper-list.component.css']
})
export class HelperListComponent implements OnInit {
  public helper:any
  constructor(private service:HelperService,private http:HttpClient,private router:Router) { }

  ngOnInit(){
    this.service.getHelper().subscribe((res)=>this.helper=res)
  }
  deleteHelper(id:any){
    this.service.delete(id).subscribe(data=>data)
    this.service.getHelper().subscribe(res=>this.service.getHelper().subscribe((res)=>this.helper=res))
  }
  GetHelperid(id:any){
    this.router.navigate(['/form',id])
  }
  navigateToForm(){
    this.router.navigate(['/form'," "])
  }
}
