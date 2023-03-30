import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
   
  transform(value: any,searchstring:any) {
    if(!searchstring)
    {
      return value;
    }
    const array=value.filter((item: any)=>item.name.toLowerCase().includes(searchstring) ||item.descripion.toLowerCase().includes(searchstring)||item.manufacturer_year.toLowerCase().includes(searchstring) || item.category.toLowerCase().includes(searchstring) );
  
    return array;
  }

}
