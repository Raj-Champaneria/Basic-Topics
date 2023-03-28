import { Component, OnInit } from '@angular/core';
import { PlayerCrudService } from 'src/app/player-crud.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  constructor(private service:PlayerCrudService) { }
  player:any
  ngOnInit(): void {
    this.service.getData().subscribe((res:any)=>this.player=res)
  }
  deleteplayer(id:any){
    this.service.deleteplayer(id).subscribe(item=>item)
    this.service.getData().subscribe((res:any)=>this.player=res)
  }
  // updateplayer(id:any){
  //   this.service.getdatabyid(id).subscribe((res)=>
  //   this.updatedata=res)
  // }
}
