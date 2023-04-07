import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any,filterval:any){
    if(!filterval)
    {
      return value;
    }
    else{
       let array=value.filter((item: { status: any; })=>item.status==filterval);
       console.log(value)
       return array
    }
  }

}
