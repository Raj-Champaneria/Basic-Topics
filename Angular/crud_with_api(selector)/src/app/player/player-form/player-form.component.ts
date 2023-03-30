import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { PlayerCrudService } from 'src/app/player-crud.service';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent implements OnInit,OnChanges {
  public playerform!:FormGroup;
  length: any;
  @Input()id:any
  @Input()name:any
  @Input()age:any
  @Input()address:any
  @Input()sports:any
  public changebtn:any="submit"
  public toggle:boolean=true
  constructor(private service:PlayerCrudService) { }
  ngOnChanges(): void {
    if(this.id!=undefined){
      this.playerform.setValue({
       'name':this.name,
       'age':this.age,
       'address':this.address,
       'sports':this.sports
      })
      this.changebtn="update"
      this.toggle=false
    }
  }

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
 updateData(){
  this.service.updateData(this.id,this.playerform.value).subscribe(data=>data)
 }

}
