import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any,filterstring:string ){

    if(filterstring.length===0){
      return value;
    }

    const array=value.filter((item: any)=>item.name.toLowerCase().includes(filterstring) || item.id.toString().includes(filterstring) || item.salary.toString().includes(filterstring) || item.phone.toString().includes(filterstring));
  
    return array;
  }


}
