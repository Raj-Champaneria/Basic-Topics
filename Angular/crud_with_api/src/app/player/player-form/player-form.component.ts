import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { PlayerCrudService } from 'src/app/player-crud.service';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent implements OnInit {
  public playerform!:FormGroup;
  length: any;
  
  constructor(private service:PlayerCrudService) { }

  ngOnInit(): void {
    this.playerform=new FormGroup({
      'name':new FormControl("",Validators.required),
      'age':new FormControl("",Validators.required),
      'address':new FormControl("",Validators.required),
      'sports':new FormControl("",Validators.required)
    })
  }
 postdata(){
  this.service.postdata(this.playerform.value).subscribe(data=>data)
 }

}
