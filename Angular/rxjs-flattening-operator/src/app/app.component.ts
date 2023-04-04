import { Component, OnInit } from '@angular/core';
import { from, map, mergeAll, mergeMap, of } from 'rxjs';
import { UtilityService } from './service/utility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { 
  title = 'rxjs-flattening-operator';
  public array1 = ["Nupur", "Maahi", "raj"]
  public array = from(this.array1)

  constructor(private service:UtilityService){}

  ngOnInit(): void {
    //with only map observable
    
    this.array.pipe
    (map(res => this.getData(res)))
    .subscribe(data => data.subscribe(res2=>{this.service.printData('map',res2)}))

    //with map and mergeAll observable
    this.array.pipe(map(res => this.getData(res)), mergeAll()).subscribe(data => {this.service.printData('map-mergeall',data)})
    
    //With Mergemap
    this.array.pipe(mergeMap(res => this.getData((res)))).subscribe((data) => {this.service.printData('mergemap',data)})
  }

  getData(data: any) {
    return of(data)
  }

}
